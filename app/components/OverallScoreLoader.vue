<template>
  <UCard>
    <div
      class="flex flex-col md:flex-row items-start md:items-center gap-6 mb-8"
    >
      <ScoreMeter :percentage="0" :size="120" is-skeleton />
      <div class="flex-1">
        <USkeleton class="h-6 w-60 mb-4" />
        <USkeleton class="h-4 w-4/5" />
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
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
