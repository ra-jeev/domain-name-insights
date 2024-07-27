<template>
  <div
    class="flex items-start p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md"
  >
    <UIcon :name="icon" class="w-8 h-8 mr-4 text-primary flex-shrink-0" />
    <div>
      <h3 class="text-lg font-semibold mb-2">{{ title }}</h3>
      <p class="text-gray-600 dark:text-gray-300">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  icon: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});
</script>
