<template>
  <footer class="border-t -mt-px border-gray-200 dark:border-gray-800">
    <UContainer>
      <div class="flex flex-col items-center gap-y-4 py-8">
        <p>Made with ❤️ by Rajeev</p>
        <div class="flex gap-x-2 justify-center">
          <UButton
            v-for="social in socials"
            :key="social.name"
            :to="social.to"
            :icon="social.icon"
            :aria-label="social.name"
            color="gray"
            target="_blank"
            variant="ghost"
          />
        </div>
        <div>
          Want to talk?
          <ULink
            active-class="text-primary"
            inactive-class="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary"
            to="mailto:i.rarsh@gmail.com?subject=[Ref: NameInsights]"
          >
            Email me
          </ULink>
        </div>
      </div>
    </UContainer>
  </footer>
</template>

<script setup lang="ts">
const socials = [
  {
    name: "x",
    icon: "i-simple-icons-x",
    to: "https://twitter.com/ra_jeeves",
  },
  {
    name: "github",
    icon: "i-simple-icons-github",
    to: "https://github.com/ra-jeev",
  },
];
</script>
