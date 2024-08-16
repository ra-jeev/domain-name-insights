<template>
  <UContainer class="py-12 w-full max-w-4xl">
    <DomainScoreLoader v-if="status === 'pending'" />
    <template v-else-if="insights">
      <div class="flex justify-center mb-6">
        <DomainNameInput :name="domainName" class="w-full max-w-lg" />
      </div>
      <UTabs :items="items" class="w-full">
        <template #item="{ item }">
          <DomainScoreDisplay
            :score-data="
              item.key === 'anthropic' ? insights.anthropic : insights.hubAi
            "
          />
        </template>
      </UTabs>
    </template>
    <div v-else>Something went wrong</div>
  </UContainer>
</template>

<script setup lang="ts">
const { domainName } = useRoute().params as { domainName: string };
const { data: insights, status } = await useLazyFetch(
  `/api/insights/${domainName}`
);

const items = [
  {
    key: "anthropic",
    label: "Claude 3.5 Sonnet",
  },
  {
    key: "hubAi",
    label: "Llama 3.1 8B",
  },
];
</script>
