<template>
  <div>
    <AppBar />
    <main>
      <NuxtPage />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const colorMode = useColorMode();

const color = computed(() =>
  colorMode.value === "dark" ? "#0f172a" : "white"
);

useHead({
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { key: "theme-color", name: "theme-color", content: color },
  ],
  link: [{ rel: "icon", href: "/favicon.ico" }],
  htmlAttrs: {
    lang: "en",
  },
});

useSeoMeta({
  title: "Name Insights",
  description:
    "A Nuxt template to build your full-stack application on the edge.",
});
</script>

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
