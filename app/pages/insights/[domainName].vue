<template>
  <UContainer class="py-12 w-full max-w-4xl">
    <DomainScoreLoader v-if="status === 'pending'" />
    <template v-else-if="insights">
      <div class="flex justify-center mb-6">
        <DomainNameInput
          :name="route.params.domainName as string"
          @name-input="onNameInput"
        />
      </div>
      <DomainScoreDisplay :score-data="insights" />
    </template>
    <div v-else>Something went wrong</div>
  </UContainer>
</template>

<script setup lang="ts">
const route = useRoute();
const { data: insights, status } = await useLazyFetch(
  `/api/insights/${route.params.domainName}`
);

const onNameInput = async (name: string) => {
  navigateTo(`/insights/${name}`);
};
</script>
