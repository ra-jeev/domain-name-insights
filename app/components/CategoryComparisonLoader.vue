<template>
  <UCard>
    <USkeleton class="h-8 w-40 mb-4 sm:mx-auto" />
    <div class="flex flex-col sm:flex-row items-center sm:justify-center gap-6">
      <div class="flex-1 flex items-center gap-4 sm:text-right w-full">
        <div class="w-[60px] h-[60px] sm:order-last">
          <USkeleton class="w-full h-full rounded-full" />
        </div>
        <div class="flex-1 flex flex-col items-start sm:items-end">
          <USkeleton class="h-6 w-24 mb-2" />
          <USkeleton class="h-4 w-full" />
          <USkeleton class="h-4 w-3/4 mt-1" />
        </div>
      </div>
      <UDivider class="hidden sm:block h-12" orientation="vertical" />
      <div class="flex-1 flex items-center gap-4 w-full">
        <div class="w-[60px] h-[60px]">
          <USkeleton class="w-full h-full rounded-full" />
        </div>
        <div class="flex-1">
          <USkeleton class="h-6 w-24 mb-2" />
          <USkeleton class="h-4 w-full" />
          <USkeleton class="h-4 w-3/4 mt-1" />
        </div>
      </div>
    </div>
  </UCard>
</template>
