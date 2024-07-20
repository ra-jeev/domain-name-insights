<template>
  <header
    class="header-bg backdrop-blur border-b -mb-px sticky top-0 z-50 border-gray-200 dark:border-gray-800"
  >
    <UContainer
      class="flex flex-wrap items-center justify-between"
      :class="`h-[--header-height]`"
    >
      <AppLogo />
      <div class="flex items-center gap-x-4">
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
