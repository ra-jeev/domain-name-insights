<template>
  <form class="relative w-full max-w-sm" @submit.prevent="onSubmit">
    <UInput
      v-model="nameInput"
      placeholder="Enter a domain name..."
      size="xl"
      :ui="{ rounded: 'rounded-full', padding: { xl: 'pr-32' } }"
    />
    <UButton
      trailing-icon="i-heroicons-rocket-launch"
      class="absolute top-1 right-1"
      size="md"
      type="submit"
    >
      Get Score
    </UButton>
  </form>
</template>

<script setup lang="ts">
const nameInput = ref("");

const onSubmit = () => {
  if (!nameInput.value) {
    alert("Please enter a domain name");
    return;
  } else if (!isValidDomain(nameInput.value)) {
    alert("Please enter a valid domain name");
    return;
  }
};
</script>
