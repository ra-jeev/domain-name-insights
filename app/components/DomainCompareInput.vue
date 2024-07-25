<template>
  <form class="w-full max-w-md space-y-4" @submit.prevent="compareDomains">
    <UInput
      v-model.trim="domain1"
      placeholder="Enter the first domain..."
      size="lg"
    />

    <UInput
      v-model.trim="domain2"
      placeholder="Enter the second domain..."
      size="lg"
    />

    <UButton
      block
      size="lg"
      trailing-icon="i-heroicons-rocket-launch"
      type="submit"
    >
      Compare Now
    </UButton>
  </form>
</template>

<script setup lang="ts">
const domain1 = ref("");
const domain2 = ref("");

const compareDomains = () => {
  if (!domain1.value || !domain2.value) {
    alert("Please enter both the domain names");
  } else if (!isValidDomain(domain1.value)) {
    alert(`"${domain1.value}" is not a valid domain name`);
  } else if (!isValidDomain(domain2.value)) {
    alert(`"${domain2.value}" is not a valid domain name`);
  } else {
    navigateTo(
      `/compare/${encodeURIComponent(domain1.value)},${encodeURIComponent(
        domain2.value
      )}`
    );
  }
};
</script>
