<template>
  <UContainer
    class="py-4 flex flex-col gap-4 items-center justify-center min-h-[500px]"
  >
    <div v-if="status === 'pending'">Loading ...</div>
    <div v-else class="max-w-lg whitespace-pre text-pretty">
      {{ JSON.stringify(insights, null, 4) }}
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const { data: insights, status } = await useLazyFetch(
  `/api/insights/${useRoute().params.domainName}`
);
</script>
