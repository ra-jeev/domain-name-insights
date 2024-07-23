<template>
  <UCard>
    <h3 class="text-lg font-semibold text-center mb-4">Score Legend</h3>
    <div class="flex flex-wrap justify-center items-start gap-8 sm:gap-12">
      <div
        v-for="(range, index) in scoreRanges"
        :key="`legend-${index}`"
        class="inline-flex flex-col items-center"
      >
        <div class="flex items-center gap-2 mb-2">
          <UIcon :name="range.icon" :class="range.colorClass" class="w-8 h-8" />
          <span class="font-medium">{{ range.label }}</span>
        </div>
        <span class="text-sm text-gray-700 dark:text-gray-300 text-center">
          {{ range.description }}
        </span>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
const scoreRanges = [
  {
    label: "0-49",
    icon: "i-mdi-face-sad",
    description: "Needs Improvement",
    colorClass: "text-red-500 dark:text-red-400",
  },
  {
    label: "50-79",
    icon: "i-mdi-face-neutral",
    description: "Average",
    colorClass: "text-yellow-500 dark:text-yellow-400",
  },
  {
    label: "80-100",
    icon: "i-mdi-face-happy",
    description: "Good",
    colorClass: "text-green-500 dark:text-green-400",
  },
];
</script>
