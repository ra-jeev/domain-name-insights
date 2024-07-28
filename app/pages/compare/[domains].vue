<template>
  <UContainer class="py-12">
    <template v-if="status === 'pending'">
      <WinningDomainLoader class="w-full max-w-3xl mx-auto" />
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <OverallScoreLoader />
        <OverallScoreLoader />
      </div>
      <CategoryComparisonLoader class="mt-6" />
      <CategoryComparisonLoader class="mt-6" />
    </template>

    <div v-else-if="insights">
      <WinningDomainCard
        :winning-domain="insights.recommendation.choice"
        :explanation="insights.recommendation.reasoning"
        :score="84"
        class="w-full max-w-3xl mx-auto"
      />

      <h2 class="text-3xl font-bold text-center mt-16 mb-8">
        Detailed Comparison
      </h2>
      <div v-if="domain1Data && domain2Data" class="space-y-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <OverallScoreCard :data="domain1Data" />
          <OverallScoreCard :data="domain2Data" />
        </div>

        <ScoreLegend />

        <div class="grid gap-6">
          <template
            v-for="(categoryName, categoryKey) in DomainScoreCategory"
            :key="categoryKey"
          >
            <CategoryComparisonCard
              :category-name="categoryName"
              :first-domain="{
                name: domain1Data.domainName,
                data: domain1Data.categoryScores[categoryKey],
              }"
              :second-domain="{
                name: domain2Data.domainName,
                data: domain2Data.categoryScores[categoryKey],
              }"
            />
          </template>
        </div>
      </div>

      <div class="py-16 text-center">
        <h2 class="text-xl md:text-2xl font-bold mb-8">
          Want to compare other domains?
        </h2>
        <UButton
          size="lg"
          to="/compare"
          trailing-icon="i-heroicons-arrow-right"
        >
          Restart Comparison
        </UButton>
      </div>
    </div>

    <div v-else>Something went wrong</div>
  </UContainer>
</template>

<script setup lang="ts">
import type { DomainsComparisonData } from "~~/types";
import { DomainScoreCategory } from "~~/types";

const route = useRoute();
const domains = (route.params.domains as string).split(",");

if (domains.length !== 2) {
  throw createError({
    statusCode: 404,
    statusMessage: "Comparison of only 2 domains is allowed.",
  });
}

const { data: insights, status } = await useLazyFetch<DomainsComparisonData>(
  `/api/compare/${domains.join(",")}`
);

const domain1Data = computed(() => insights.value?.domains[0]);
const domain2Data = computed(() => insights.value?.domains[1]);
</script>
