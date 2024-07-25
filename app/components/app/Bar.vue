<template>
  <header
    class="header-bg backdrop-blur border-b -mb-px sticky top-0 z-50 border-gray-200 dark:border-gray-800"
  >
    <UContainer
      class="flex flex-wrap items-center justify-between"
      :class="`h-[--header-height]`"
    >
      <AppLogo />
      <div>
        <ULink
          to="/compare"
          active-class="text-primary"
          inactive-class="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
        >
          Compare Domains
        </ULink>
      </div>
      <div class="flex items-center gap-x-3">
        <ColorMode />
        <UButton
          to="https://github.com/ra-jeev/domain-name-insights"
          icon="i-mdi-github"
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
