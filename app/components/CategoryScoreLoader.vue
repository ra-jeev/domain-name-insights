<template>
  <UCard>
    <div class="flex items-center gap-x-4 md:gap-x-6">
      <ScoreMeter :percentage="0" :size="60" />
      <div>
        <USkeleton class="h-5 w-28 mb-2" />
        <USkeleton class="h-4 w-full min-w-40 mb-1" />
      </div>
    </div>
  </UCard>
</template>
