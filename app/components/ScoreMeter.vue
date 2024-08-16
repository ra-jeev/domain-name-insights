<template>
  <div
    class="relative"
    :class="{ 'animate-pulse': isSkeleton }"
    :style="{ width: size + 'px', height: size + 'px' }"
  >
    <svg class="w-full h-full" viewBox="0 0 100 100">
      <circle
        :class="`${
          isSkeleton
            ? 'text-gray-100 dark:text-gray-800'
            : 'text-gray-200 dark:text-gray-700'
        }`"
        :stroke-width="strokeWidth"
        stroke="currentColor"
        fill="transparent"
        :r="circleRadius"
        cx="50"
        cy="50"
      />

      <circle
        :class="colorClass"
        :stroke-width="strokeWidth"
        :stroke-dasharray="dashArray"
        :stroke-dashoffset="dashOffset"
        stroke-linecap="round"
        stroke="currentColor"
        fill="transparent"
        :r="circleRadius"
        cx="50"
        cy="50"
      >
        <animate
          attributeName="stroke-dasharray"
          :from="`0 ${circumference}`"
          :to="dashArray"
          dur="1s"
          fill="freeze"
        />
      </circle>
    </svg>

    <div class="absolute inset-0 flex items-center justify-center">
      <div class="font-extrabold" :class="`${colorClass} ${textSizeClass}`">
        {{ isSkeleton ? "--" : percentage }}%
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
  isSkeleton: {
    type: Boolean,
    default: false,
  },
});

const circleRadius = 45;
const strokeWidth = 10;
const circumference = computed(() => 2 * Math.PI * circleRadius);
const dashArray = computed(() => {
  const dashLength =
    (circumference.value * props.percentage) / 100 - strokeWidth; // account for the rounding
  const gapLength = circumference.value - dashLength;
  return `${dashLength} ${gapLength}`;
});

// To start from the top, give an offset of one quarter of the circle
// and subtract half the stroke width to account for the rounding
const dashOffset = computed(
  () => `${circumference.value * 0.25 - strokeWidth / 2}`
);

const colorClass = computed(() => {
  if (props.isSkeleton) {
    return "text-gray-200 dark:text-gray-700";
  }

  if (props.percentage < 50) {
    return "text-red-500 dark:text-red-400";
  } else if (props.percentage < 80) {
    return "text-yellow-500 dark:text-yellow-400";
  } else {
    return "text-green-500 dark:text-green-400";
  }
});

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
