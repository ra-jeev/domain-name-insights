<template>
  <UCard>
    <div class="flex items-center gap-x-4 md:gap-x-6 mb-6 md:mb-8">
      <ScoreMeter :percentage="0" :size="120" is-skeleton />
      <div class="flex-1">
        <USkeleton class="h-6 w-60 mb-4" />
        <USkeleton class="h-6 w-60 mb-1" />
        <USkeleton class="h-4 w-full" />
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
      <div>
        <USkeleton class="h-5 w-20 mb-2" />
        <USkeleton class="h-4 w-full mb-1" />
        <USkeleton class="h-4 w-full mb-1" />
        <USkeleton class="h-4 w-3/4" />
      </div>
      <div>
        <USkeleton class="h-5 w-20 mb-2" />
        <USkeleton class="h-4 w-full mb-1" />
        <USkeleton class="h-4 w-full mb-1" />
        <USkeleton class="h-4 w-3/4" />
      </div>
    </div>
  </UCard>
</template>
