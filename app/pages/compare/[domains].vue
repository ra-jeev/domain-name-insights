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

    <div v-else-if="comparisonResult">
      <UTabs v-model="activeTab" :items="items" class="w-full">
        <template #item>
          <template v-if="comparisonResult.recommendation">
            <WinningDomainCard
              :winning-domain="comparisonResult.recommendation.choice"
              :explanation="comparisonResult.recommendation.reasoning"
              class="w-full max-w-3xl mx-auto mt-8"
            />

            <h2 class="text-3xl font-bold text-center mt-16 mb-8">
              Detailed Comparison
            </h2>
            <div
              v-if="
                comparisonResult.domain1Data && comparisonResult.domain2Data
              "
              class="space-y-6"
            >
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <OverallScoreCard :data="comparisonResult.domain1Data" />
                <OverallScoreCard :data="comparisonResult.domain2Data" />
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
                      name: comparisonResult.domain1Data.domainName,
                      data: comparisonResult.domain1Data.categoryScores[
                        categoryKey
                      ],
                    }"
                    :second-domain="{
                      name: comparisonResult.domain2Data.domainName,
                      data: comparisonResult.domain2Data.categoryScores[
                        categoryKey
                      ],
                    }"
                  />
                </template>
              </div>
            </div>
          </template>
          <UCard v-else class="text-center">
            Failed to compare the domain names. Please try again.
          </UCard>
        </template>
      </UTabs>

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
import { DomainScoreCategory } from "~~/types";

const items = [
  {
    key: "anthropic",
    label: "Claude 3.5 Sonnet",
  },
  {
    key: "hubAi",
    label: "Llama 3.1 8B",
  },
];

const route = useRoute();
const domains = (route.params.domains as string).split(",");
const activeTab = ref(0);

if (domains.length !== 2) {
  throw createError({
    statusCode: 404,
    statusMessage: "Comparison of only 2 domains is allowed.",
  });
}

const { data: insights, status } = await useLazyFetch(
  `/api/compare/${domains.join(",")}`
);

const comparisonResult = computed(() => {
  if (insights.value) {
    return activeTab.value === 0
      ? {
          recommendation: insights.value.anthropic?.recommendation,
          domain1Data: insights.value.anthropic?.domains[0],
          domain2Data: insights.value.anthropic?.domains[1],
        }
      : {
          recommendation: insights.value.hubAi?.recommendation,
          domain1Data: insights.value.hubAi?.domains[0],
          domain2Data: insights.value.hubAi?.domains[1],
        };
  }

  return undefined;
});
</script>
