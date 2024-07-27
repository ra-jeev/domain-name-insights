<template>
  <UContainer class="py-12 w-full max-w-4xl mx-auto">
    <section :class="`${suggestions.length ? 'py-8' : 'py-16'}`">
      <div
        :class="[
          'flex flex-col items-center w-full mx-auto',
          suggestions.length ? 'max-w-full' : 'max-w-lg text-center',
        ]"
      >
        <template v-if="!suggestions.length">
          <h1 class="text-4xl md:text-5xl font-extrabold !leading-tight mb-4">
            <span class="text-primary">Discover</span> Your Perfect Domain Name
          </h1>
          <p class="text-xl mb-10 text-gray-500 dark:text-gray-400">
            Harness AI to generate unique, memorable domain names tailored to
            your purpose.
          </p>
        </template>

        <form
          :class="[
            'w-full space-y-4',
            suggestions.length
              ? 'flex items-center space-y-0 space-x-4'
              : 'max-w-md',
          ]"
          @submit.prevent="getDomainSuggestions"
        >
          <UTextarea
            v-model.trim="purpose"
            placeholder="Enter the purpose of your app/service"
            size="lg"
            autoresize
            :rows="1"
            :maxrows="3"
            :class="suggestions.length ? 'flex-grow' : 'w-full'"
          />

          <UButton
            :block="!suggestions.length"
            size="lg"
            trailing-icon="i-mdi-lightbulb-on-outline"
            type="submit"
            :loading="isLoading"
            :disabled="isLoading"
          >
            Get Suggestions
          </UButton>
        </form>

        <UAlert
          v-if="error"
          icon="i-heroicons-exclamation-triangle-solid"
          color="red"
          class="text-start mt-4"
          :class="suggestions.length ? 'w-full' : 'max-w-md'"
          :close-button="{
            icon: 'i-heroicons-x-mark',
            color: 'white',
            variant: 'link',
            padded: false,
          }"
          :description="error"
          @close="error = ''"
        />
      </div>
    </section>

    <section v-if="suggestions.length > 0" class="mt-8">
      <h2
        class="text-2xl md:text-3xl lg:text-4xl text-center font-semibold mb-6"
      >
        Your Suggested Domains
      </h2>
      <div class="space-y-6">
        <DomainSuggestionCard
          v-for="suggestion in suggestions"
          :key="suggestion.domainName"
          :suggestion="suggestion"
        />
      </div>
    </section>
  </UContainer>
</template>

<script setup lang="ts">
import { type DomainSuggestionsData } from "~~/types";

const purpose = ref("");

const suggestions = ref<DomainSuggestionsData["suggestions"]>([]);
const isLoading = ref(false);
const error = ref("");

async function getDomainSuggestions() {
  if (!purpose.value) {
    alert("Please enter a purpose for your app/service");
    return;
  }

  isLoading.value = true;
  error.value = "";
  suggestions.value = [];

  try {
    const res = await $fetch<DomainSuggestionsData>("/api/suggestions", {
      method: "POST",
      body: { purpose: purpose.value },
    });

    if (res) {
      suggestions.value = res.suggestions;
    } else {
      throw new Error("No suggestions received");
    }
  } catch (e) {
    error.value = "Failed to fetch domain suggestions. Please try again.";
    console.error(e);
  } finally {
    isLoading.value = false;
  }
}
</script>
