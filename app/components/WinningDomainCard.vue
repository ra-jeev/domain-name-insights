<template>
  <UCard class="border-2 border-yellow-300">
    <div class="flex items-center justify-center gap-x-4 md:gap-x-8">
      <UIcon
        name="i-heroicons-trophy-solid"
        class="w-20 h-20 text-yellow-300 shrink-0"
      />
      <div>
        <h3 class="text-2xl font-bold text-gray-500 dark:text-gray-400 mb-2">
          Winner
        </h3>
        <p class="text-3xl font-extrabold text-primary">{{ winningDomain }}</p>
        <p class="mt-4 text-gray-700 dark:text-gray-300">{{ explanation }}</p>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
defineProps({
  winningDomain: {
    type: String,
    required: true,
  },
  explanation: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});
</script>
