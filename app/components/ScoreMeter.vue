<template>
  <div class="relative" :style="{ width: size + 'px', height: size + 'px' }">
    <svg class="w-full h-full" viewBox="0 0 100 100">
      <circle
        class="text-gray-200 dark:text-gray-700"
        stroke-width="10"
        stroke="currentColor"
        fill="transparent"
        :r="circleRadius"
        cx="50"
        cy="50"
      />

      <circle
        :class="colorClass"
        stroke-width="10"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="dashOffset"
        stroke="currentColor"
        fill="transparent"
        :r="circleRadius"
        cx="50"
        cy="50"
      />
    </svg>

    <div class="absolute inset-0 flex items-center justify-center">
      <div class="font-extrabold" :class="`${colorClass} ${textSizeClass}`">
        {{ percentage }}%
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  percentage: {
    type: Number,
    required: true,
    validator: (value: number) => value >= 0 && value <= 100,
  },
  size: {
    type: Number,
    default: 100,
  },
  color: {
    type: String,
    default: "primary",
  },
});

const circleRadius = 45;
const circumference = computed(() => 2 * Math.PI * circleRadius);
const dashOffset = computed(
  () => circumference.value - (props.percentage / 100) * circumference.value
);
const colorClass = computed(
  () => `text-${props.color}-500 dark:text-${props.color}-400`
);
const textSizeClass = computed(() => {
  if (props.size <= 40) return "text-[10px]";
  if (props.size < 52) return "text-xs";
  if (props.size < 64) return "text-sm";
  if (props.size < 80) return "text-base";
  if (props.size < 100) return "text-lg";
  if (props.size < 120) return "text-xl";
  if (props.size < 150) return "text-2xl";
  if (props.size < 200) return "text-3xl";
  if (props.size < 250) return "text-4xl";

  return "text-5xl";
});
</script>
