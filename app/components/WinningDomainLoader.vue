<template>
  <UCard class="border-2 border-gray-200 dark:border-gray-700">
    <div class="flex items-center gap-x-4 md:gap-x-8">
      <USkeleton class="w-20 h-20 rounded-full shrink-0" />
      <div class="flex-1">
        <USkeleton class="h-6 w-20 mb-2" />
        <USkeleton class="h-10 w-40 mb-4" />
        <div class="hidden sm:block space-y-2">
          <USkeleton class="h-4 w-full" />
          <USkeleton class="h-4 w-3/4" />
        </div>
      </div>
    </div>
    <div class="sm:hidden space-y-2 mt-4">
      <USkeleton class="h-4 w-full" />
      <USkeleton class="h-4 w-3/4" />
    </div>
  </UCard>
</template>
