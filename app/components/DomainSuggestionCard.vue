<!-- components/DomainSuggestionCard.vue -->
<template>
  <UCard>
    <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
      <ScoreMeter :percentage="suggestion.overallScore" :size="80" />

      <div class="flex-1 text-center sm:text-left">
        <h3 class="text-lg sm:text-xl font-bold mb-2">
          {{ suggestion.domainName }}
        </h3>
        <p class="text-sm sm:text-base text-gray-600 dark:text-gray-300">
          {{ suggestion.explanation }}
        </p>
      </div>
    </div>

    <template #footer>
      <h3 class="text-lg sm:text-xl font-semibold mb-6 text-center">
        Detailed Scores
      </h3>
      <div class="flex flex-wrap justify-between gap-6">
        <div
          v-for="category in categoryKeys"
          :key="category"
          class="flex flex-col items-center w-24"
        >
          <ScoreMeter :percentage="suggestion[category]" :size="48" />
          <span class="text-xs text-center mt-2">
            {{ DomainScoreCategory[category] }}
          </span>
        </div>
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
import {
  DomainScoreCategory,
  type DomainSuggestion,
  type DomainScoreCategoryKeys,
} from "~~/types";

defineProps<{
  suggestion: DomainSuggestion;
}>();

const categoryKeys = Object.keys(
  DomainScoreCategory
) as DomainScoreCategoryKeys[];
</script>
