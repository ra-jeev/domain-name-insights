<template>
  <UCard>
    <div class="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
      <ScoreMeter :percentage="0" :size="60" is-skeleton />
      <div class="flex-1">
        <USkeleton class="h-5 w-28 mb-2" />
        <USkeleton class="h-4 w-full min-w-40 mb-1" />
      </div>
    </div>
  </UCard>
</template>
