<template>
  <UCard class="comparison-card">
    <h3 class="text-xl font-semibold mb-4 sm:text-center">
      {{ categoryName }}
    </h3>
    <div class="flex flex-col sm:flex-row items-center sm:justify-center gap-6">
      <div class="flex-1 flex items-center gap-4 sm:text-right">
        <ScoreMeter
          :percentage="firstDomain.data.score"
          :size="60"
          class="sm:order-last"
        />
        <div class="flex-1">
          <h4 class="text-lg font-medium">{{ firstDomain.name }}</h4>
          <p class="text-sm text-gray-600 dark:text-gray-300 mt-2">
            {{ firstDomain.data.explanation }}
          </p>
        </div>
      </div>
      <UDivider class="hidden sm:block h-12" orientation="vertical" />
      <div class="flex-1 flex items-center gap-4">
        <ScoreMeter :percentage="secondDomain.data.score" :size="60" />
        <div class="flex-1">
          <h4 class="text-lg font-medium">{{ secondDomain.name }}</h4>
          <p class="text-sm text-gray-600 dark:text-gray-300 mt-2">
            {{ secondDomain.data.explanation }}
          </p>
        </div>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import { type CategoryScore } from "~~/types";

defineProps<{
  categoryName: string;
  firstDomain: { name: string; data: CategoryScore };
  secondDomain: { name: string; data: CategoryScore };
}>();
</script>
