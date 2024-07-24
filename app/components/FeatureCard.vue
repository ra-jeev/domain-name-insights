<template>
  <UCard>
    <UIcon :name="icon" class="w-10 h-10 mb-4 text-primary" />

    <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>

    <p class="text-gray-600 dark:text-gray-300">
      {{ description }}
    </p>
  </UCard>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});
</script>
