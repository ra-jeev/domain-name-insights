<template>
  <form class="relative w-full max-w-md" @submit.prevent="onSubmit">
    <UInput
      v-model.trim="nameInput"
      placeholder="Enter a domain name..."
      size="xl"
      :ui="{ rounded: 'rounded-full', padding: { xl: 'pr-28' } }"
    />
    <UButton
      trailing-icon="i-heroicons-rocket-launch"
      class="absolute top-1 right-1"
      size="md"
      type="submit"
    >
      Analyze Now
    </UButton>
  </form>
</template>

<script setup lang="ts">
const props = defineProps({
  name: {
    type: String,
    default: "",
  },
});

const nameInput = ref(props.name);

const emit = defineEmits(["name-input"]);

const onSubmit = () => {
  if (!nameInput.value) {
    alert("Please enter a domain name");
  } else if (!isValidDomain(nameInput.value)) {
    alert("Please enter a valid domain name");
  } else {
    emit("name-input", nameInput.value);
  }
};
</script>
