<template>
  <UCard>
    <div class="flex items-center gap-x-4 md:gap-x-6">
      <ScoreMeter :percentage="data.score" :size="80" />
      <div>
        <h3 class="text-lg md:text-xl font-semibold mb-2">
          {{ categoryName }}
        </h3>
        <p class="text-gray-500 dark:text-gray-400">{{ data.explanation }}</p>
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
