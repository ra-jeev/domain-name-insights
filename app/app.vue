<template>
  <div class="flex flex-col min-h-screen">
    <AppBar />
    <main class="flex-1">
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
  link: [
    { rel: "icon", href: "/favicon.ico", sizes: "any" },
    { rel: "icon", href: "/logo.svg", type: "image/svg+xml" },
    { rel: "apple-touch-icon", href: "/apple-touch-icon-180x180.png" },
  ],
  htmlAttrs: {
    lang: "en",
  },
});

useSeoMeta({
  title: "Name Insights",
  description:
    "Get detailed insights on any potential domain name and see how it compares to other domains.",
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
