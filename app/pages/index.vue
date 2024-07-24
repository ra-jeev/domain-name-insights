<template>
  <div>
    <section id="hero" class="relative overflow-hidden py-16 md:py-24">
      <UContainer>
        <div
          class="relative z-10 flex flex-col md:flex-row items-center justify-between"
        >
          <div class="w-full md:w-1/2 mb-12 md:mb-0">
            <h1 class="text-4xl md:text-5xl font-extrabold !leading-tight mb-4">
              Choose Your Domain Name
              <span class="text-primary">with Confidence</span>
            </h1>
            <p class="text-xl mb-10 text-gray-500 dark:text-gray-400">
              Get instant AI-powered strength & weakness analysis for smarter
              domain name decisions.
            </p>
            <DomainNameInput @name-input="onNameInput" />
          </div>

          <div class="w-full md:w-1/2 flex justify-center">
            <HeroImage class="w-full max-w-md" />
          </div>
        </div>
      </UContainer>
    </section>

    <section id="features" class="py-16">
      <UContainer>
        <h2 class="text-3xl font-bold mb-12 text-center">Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon="i-heroicons-cpu-chip"
            title="AI-Powered Analysis"
            description="Our AI analyzes your domain name across six critical categories, providing an unbiased and holistic view of its potential."
          />
          <FeatureCard
            icon="i-heroicons-document-text"
            title="Detailed Insights"
            description="Get your domain's strengths and weaknesses breakdown, along with an overall score and category-specific ratings."
          />
          <FeatureCard
            icon="i-heroicons-megaphone"
            title="Brandability Assessment"
            description="Evaluate your domain's memorability, uniqueness, and ease of use to ensure it is user-friendly and brand-ready."
          />
          <FeatureCard
            icon="i-heroicons-globe-alt"
            title="SEO Considerations"
            description="Understand how your domain name might impact your search engine optimization efforts and online visibility."
          />
          <FeatureCard
            icon="i-heroicons-shield-check"
            title="Legal Risk Assessment"
            description="Get insights into potential trademark issues and other legal considerations associated with your domain name."
          />
          <FeatureCard
            icon="i-heroicons-presentation-chart-line"
            title="Market Potential Analysis"
            description="Evaluate your domain's ability to attract and retain your target audience, supporting long-term business growth."
          />
        </div>
      </UContainer>
    </section>

    <section id="about" class="py-16">
      <UContainer>
        <h2 class="text-3xl font-bold mb-12 text-center">
          About Name Insights
        </h2>

        <div class="flex flex-col items-center max-w-xl text-center mx-auto">
          <p class="text-lg mb-4">
            Name Insights is your go-to tool for evaluating the strength and
            potential of domain names.
          </p>
          <p class="text-lg mb-12">
            Whether you're considering a domain purchase, or just curious about
            your current domain's impact, our AI-powered analysis provides
            valuable insights to help you make informed decisions.
          </p>

          <UButton
            color="primary"
            label="Analyze Your Domain Now"
            trailing-icon="i-heroicons-arrow-right"
            size="xl"
            to="#hero"
          />
        </div>
      </UContainer>
    </section>
  </div>
</template>

<script setup lang="ts">
const onNameInput = async (name: string) => {
  navigateTo(`/insights/${name}`);
};
</script>
