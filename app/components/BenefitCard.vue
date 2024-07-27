<template>
  <div
    class="flex flex-col items-center text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
  >
    <UIcon :name="icon" class="w-12 h-12 mb-4 text-primary" />
    <h3 class="text-xl font-semibold mb-2">{{ title }}</h3>
    <p class="text-gray-600 dark:text-gray-300">{{ description }}</p>
  </div>
</template>

<script setup>
defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});
</script>
