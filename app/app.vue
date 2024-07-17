<script setup lang="ts">
useSeoMeta({
  title: "NuxtHub Starter",
  description:
    "A Nuxt template to build your full-stack application on the edge.",
});
</script>

<template>
  <div>
    <AppBar />
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<style>
:root {
  --header-height: 4rem;
  --ui-background: 255 255 255;
}

.dark {
  --ui-background: var(--color-gray-900);
}

body {
  --tw-bg-opacity: 1;
  background-color: rgb(var(--ui-background) / var(--tw-bg-opacity));
}
</style>
