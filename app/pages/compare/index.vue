<template>
  <div>
    <!-- Hero Section -->
    <section class="py-16 bg-gray-50 dark:bg-gray-800">
      <UContainer>
        <div
          class="flex flex-col items-center w-full max-w-2xl text-center mx-auto"
        >
          <h1 class="text-4xl md:text-5xl font-extrabold !leading-tight mb-4">
            Compare <span class="text-primary">Domain Names</span> Side by Side
          </h1>
          <p class="text-xl mb-10 text-gray-600 dark:text-gray-300">
            Discover which domain name has the edge for your business needs.
          </p>
          <DomainCompareInput class="w-full" />
        </div>
      </UContainer>
    </section>

    <!-- Benefits Section -->
    <section class="py-16">
      <UContainer>
        <h2 class="text-3xl font-bold mb-12 text-center">
          Why Compare Domains?
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <BenefitCard
            icon="i-heroicons-scale"
            title="Relative Strengths"
            description="Understand the comparative advantages of different domain options."
          />
          <BenefitCard
            icon="i-heroicons-light-bulb"
            title="Informed Decisions"
            description="Make data-driven choices when selecting between multiple domains."
          />
          <BenefitCard
            icon="i-heroicons-chart-bar"
            title="Competitive Analysis"
            description="Analyze your domain against competitors to gain market insights."
          />
          <BenefitCard
            icon="i-heroicons-arrow-trending-up"
            title="Improvement Areas"
            description="Identify potential enhancements for your current domain strategy."
          />
        </div>
      </UContainer>
    </section>

    <!-- Comparison Criteria Section -->
    <section class="py-16 bg-gray-50 dark:bg-gray-800">
      <UContainer>
        <h2 class="text-3xl font-bold mb-12 text-center">
          What Gets Compared?
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CriteriaCard
            icon="i-heroicons-star"
            title="Brand Impact"
            description="Evaluate memorability and overall branding potential."
          />
          <CriteriaCard
            icon="i-heroicons-cursor-arrow-rays"
            title="Usability"
            description="Assess user-friendliness and ease of use."
          />
          <CriteriaCard
            icon="i-heroicons-magnifying-glass"
            title="SEO Potential"
            description="Analyze search engine optimization possibilities and keyword relevance."
          />
          <CriteriaCard
            icon="i-heroicons-shield-check"
            title="Legal Considerations"
            description="Examine potential legal risks and trademark issues."
          />
          <CriteriaCard
            icon="i-heroicons-chart-bar"
            title="Market Potential"
            description="Gauge the domain's fit with target audience and market trends."
          />
          <CriteriaCard
            icon="i-heroicons-cog"
            title="Technical Aspects"
            description="Evaluate technical suitability and performance potential."
          />
        </div>
      </UContainer>
    </section>

    <!-- CTA Section -->
    <section class="py-16">
      <UContainer>
        <div class="text-center">
          <h2 class="text-2xl md:text-3xl font-bold mb-8">
            Need to analyze a single domain?
          </h2>
          <UButton
            size="xl"
            to="/"
            color="primary"
            trailing-icon="i-heroicons-arrow-right"
          >
            Analyze Single Domain
          </UButton>
        </div>
      </UContainer>
    </section>
  </div>
</template>
