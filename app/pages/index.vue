<template>
  <div
    class="p-4 flex flex-col gap-4 items-center justify-center min-h-[500px]"
  >
    <DomainNameInput @name-input="onNameInput" />
  </div>
</template>

<script setup lang="ts">
const onNameInput = async (name: string) => {
  console.log(name);
  navigateTo(`/insights/${name}`);
};
</script>
