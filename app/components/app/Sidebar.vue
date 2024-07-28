<template>
  <div
    class="h-screen w-full shrink-0 md:w-64 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800"
  >
    <div class="w-full flex flex-col gap-2">
      <div class="h-[--header-height] flex items-center px-4">
        <AppLogo :icon-size="24" text-size="text-lg" class="px-2.5" />
      </div>

      <UVerticalNavigation
        :links="links"
        :ui="{ base: 'gap-2' }"
        class="flex-1 px-4"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
type SidebarLink = {
  label: string;
  to: string;
  icon?: string;
  exact?: boolean;
  click?: () => void;
};

defineProps<{ links: SidebarLink[] }>();
</script>
