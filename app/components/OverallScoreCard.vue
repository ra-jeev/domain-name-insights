<template>
  <UCard>
    <div class="flex items-center gap-x-4 md:gap-x-6 mb-6 md:mb-8">
      <ScoreMeter :percentage="data.overallScore" :size="120" />
      <div class="flex-1">
        <div class="text-xl md:text-2xl font-bold mb-4">Overall Score</div>
        <h2 class="text-lg md:text-xl font-semibold text-primary mb-1">
          <span class="text-gray-500 dark:text-gray-400">Domain:</span>
          {{ data.domainName }}
        </h2>
        <p>
          <span class="text-gray-500 dark:text-gray-400">Suitable for:</span>
          {{ data.guessedPurpose }}
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      <div>
        <h3 class="font-semibold text-gray-500 dark:text-gray-400 mb-2">
          Pros:
        </h3>
        <ul class="list-disc list-inside">
          <li v-for="(pro, index) in data.pros" :key="index">{{ pro }}</li>
        </ul>
      </div>
      <div>
        <h3 class="font-semibold text-gray-500 dark:text-gray-400 mb-2">
          Cons:
        </h3>
        <ul class="list-disc list-inside">
          <li v-for="(con, index) in data.cons" :key="index">{{ con }}</li>
        </ul>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
interface OverallScoreData {
  domainName: string;
  guessedPurpose: string;
  overallScore: number;
  pros: string[];
  cons: string[];
}

defineProps<{
  data: OverallScoreData;
}>();
</script>
