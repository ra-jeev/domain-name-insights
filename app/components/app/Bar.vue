<template>
  <header
    class="header-bg backdrop-blur border-b -mb-px sticky top-0 z-50 border-gray-200 dark:border-gray-800"
  >
    <UContainer
      class="flex flex-wrap items-center justify-between"
      :class="`h-[--header-height]`"
    >
      <div class="flex items-center gap-3">
        <UButton
          icon="i-heroicons-bars-3-16-solid"
          color="gray"
          variant="ghost"
          class="md:hidden"
          @click="$emit('show-drawer')"
        />
        <AppLogo />
      </div>
      <div class="items-center gap-x-6 hidden md:flex">
        <ULink
          to="/discover"
          active-class="text-primary"
          inactive-class="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary"
        >
          Get Ideas
        </ULink>

        <ULink
          to="/compare"
          active-class="text-primary"
          inactive-class="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-primary"
        >
          Compare Names
        </ULink>
      </div>
      <div class="flex items-center gap-x-3">
        <ColorMode />
        <UButton
          to="https://github.com/ra-jeev/domain-name-insights"
          icon="i-simple-icons-github"
          aria-label="github"
          color="gray"
          target="_blank"
          variant="ghost"
        />
      </div>
    </UContainer>
  </header>
</template>

<style scoped>
.header-bg {
  background-color: rgb(var(--ui-background) / 0.75);
}
</style>
