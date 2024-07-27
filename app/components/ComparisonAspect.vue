<template>
  <div class="flex items-start">
    <div class="flex-shrink-0 mr-4">
      <UIcon :name="icon" class="w-6 h-6 text-primary" />
    </div>
    <div>
      <h3 class="text-lg font-semibold mb-2">{{ title }}</h3>
      <p class="text-gray-600 dark:text-gray-300">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: String,
  title: String,
  description: String,
});
</script>
