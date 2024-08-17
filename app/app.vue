<template>
  <div class="flex flex-col min-h-screen px-24 pt-20">
    <AppBar @show-drawer="showDrawer = true" />
    <main class="flex-1">
      <NuxtPage />
    </main>
    <USlideover
      v-model="showDrawer"
      :ui="{ width: 'max-w-xs' }"
      class="md:hidden"
      side="left"
    >
      <AppSidebar :links="links" class="flex" />
    </USlideover>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
const showDrawer = ref(false);
const onLinkClick = () => {
  showDrawer.value = false;
};

const links = [
  {
    label: "Get Ideas",
    icon: "i-mdi-home",
    to: "/discover",
    click: onLinkClick,
  },
  {
    label: "Compare Names",
    icon: "i-mdi-content-save-settings",
    to: "/compare",
    click: onLinkClick,
  },
];

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

const title = "Name Insights";
const description =
  "Get detailed insights on any potential domain name, and see how it compares to other names on various important aspects. Get fresh name ideas for your next domain name.";
const siteUrl = "https://name-insights.nuxt.dev";
const imageUrl = `${siteUrl}/hero.png`;

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogImage: imageUrl,
  ogUrl: siteUrl,
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: imageUrl,
  twitterCard: "summary_large_image",
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
