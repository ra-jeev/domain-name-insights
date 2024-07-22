<template>
  <UCard>
    <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
      <ScoreMeter :percentage="data.score" :size="80" />
      <div class="flex-1 text-center sm:text-left">
        <h3 class="text-lg sm:text-xl font-semibold mb-2">
          {{ categoryName }}
        </h3>
        <p class="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
          {{ data.explanation }}
        </p>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import { type CategoryScore } from "~~/types";

defineProps<{
  categoryName: string;
  data: CategoryScore;
}>();
</script>
