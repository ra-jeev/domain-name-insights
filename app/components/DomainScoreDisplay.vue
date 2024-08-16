<template>
  <div class="space-y-6">
    <template v-if="scoreData">
      <OverallScoreCard :data="overallData!" />
      <ScoreLegend />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <CategoryScoreCard
          v-for="(category, categoryKey) in scoreData.categoryScores"
          :key="categoryKey"
          :category-name="DomainScoreCategory[categoryKey]"
          :data="category"
        />
      </div>
    </template>
    <UCard v-else class="text-center">
      "Failed to generate insights. Please try again.
    </UCard>
  </div>
</template>

<script setup lang="ts">
import type { DomainScoreData } from "~~/types";
import { DomainScoreCategory } from "~~/types";

const props = defineProps<{
  scoreData?: DomainScoreData;
}>();

const overallData = computed(() => {
  if (props.scoreData) {
    return {
      domainName: props.scoreData.domainName,
      guessedPurpose: props.scoreData.guessedPurpose,
      overallScore: props.scoreData.overallScore,
      pros: props.scoreData.pros,
      cons: props.scoreData.cons,
    };
  }

  return undefined;
});
</script>
