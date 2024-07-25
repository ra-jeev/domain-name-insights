<template>
  <UCard>
    <div
      class="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8"
    >
      <ScoreMeter :percentage="data.overallScore" :size="120" />
      <div class="flex-1">
        <h2 class="text-2xl md:text-3xl font-bold mb-4">
          {{ data.domainName }}
        </h2>

        <p class="text-lg text-gray-600 dark:text-gray-300">
          <UBadge color="yellow" variant="subtle" class="mr-1">
            <UIcon name="i-heroicons-light-bulb" class="w-4 h-4 mr-1" />
            Best for
          </UBadge>
          {{ data.guessedPurpose }}
        </p>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
      <div>
        <h3
          class="text-lg font-semibold text-green-600 dark:text-green-400 mb-3"
        >
          Pros
        </h3>
        <ul class="space-y-2">
          <li
            v-for="(pro, index) in data.pros"
            :key="`pro-${index}`"
            class="flex items-start"
          >
            <UIcon
              name="i-heroicons-check-circle"
              class="w-5 h-5 text-green-500 shrink-0 mr-2 mt-1"
            />
            <span>{{ pro }}</span>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-lg font-semibold text-red-600 dark:text-red-400 mb-3">
          Cons
        </h3>
        <ul class="space-y-2">
          <li
            v-for="(con, index) in data.cons"
            :key="`con-${index}`"
            class="flex items-start"
          >
            <UIcon
              name="i-heroicons-exclamation-circle"
              class="w-5 h-5 text-red-500 shrink-0 mr-2 mt-1"
            />
            <span>{{ con }}</span>
          </li>
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
