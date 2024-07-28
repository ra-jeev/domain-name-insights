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
              Analyze, compare, and discover perfect domain names for your
              business with our comprehensive AI tools.
            </p>
            <DomainNameInput />
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
            icon="i-heroicons-chart-bar"
            title="Domain Name Scoring"
            description="Get instant AI-powered strength & weakness analysis for smarter domain name decisions."
          />
          <FeatureCard
            icon="i-heroicons-scale"
            title="Domain Comparison"
            description="Compare two domain names side-by-side to make informed choices for your brand."
          />
          <FeatureCard
            icon="i-heroicons-light-bulb"
            title="Domain Suggestions"
            description="Receive tailored domain name suggestions based on your specific business purpose."
          />
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
            icon="i-heroicons-adjustments-horizontal"
            title="Easy-to-Understand Results"
            description="Get clear, actionable insights in an easy-to-understand format, simplifying your decision-making process."
          />
        </div>
      </UContainer>
    </section>

    <section id="analysis-aspects" class="py-16 bg-gray-50 dark:bg-gray-800">
      <UContainer>
        <h2 class="text-3xl font-bold mb-12 text-center">
          Comprehensive Analysis
        </h2>
        <div class="flex flex-col md:flex-row items-center gap-12">
          <div class="w-full md:w-1/2 flex justify-center">
            <AspectsImage class="w-full max-w-md" />
          </div>
          <div class="w-full md:w-1/2 space-y-8">
            <ComparisonAspect
              icon="i-heroicons-megaphone"
              title="Brandability"
              description="Assess memorability, uniqueness, and ease of use for brand-readiness."
            />
            <ComparisonAspect
              icon="i-heroicons-cursor-arrow-ripple"
              title="Usability"
              description="Evaluate the domain's ease of use, typing, and pronunciation for better user experience."
            />
            <ComparisonAspect
              icon="i-heroicons-globe-alt"
              title="SEO Potential"
              description="Evaluate how well your domain aligns with search engine optimization best practices."
            />
            <ComparisonAspect
              icon="i-heroicons-shield-check"
              title="Legal Considerations"
              description="Identify potential trademark issues and other legal risks associated with your domain."
            />
            <ComparisonAspect
              icon="i-heroicons-computer-desktop"
              title="Technical Suitability"
              description="Ensure your domain meets technical standards for optimal online performance."
            />
            <ComparisonAspect
              icon="i-heroicons-presentation-chart-line"
              title="Market Potential"
              description="Analyze your domain's capacity to support long-term business expansion."
            />
          </div>
        </div>
      </UContainer>
    </section>

    <section id="cta" class="py-16">
      <UContainer>
        <div class="flex flex-col items-center max-w-xl text-center mx-auto">
          <h2 class="text-3xl font-bold mb-6">
            Ready to Optimize Your Domain Strategy?
          </h2>
          <p class="text-lg mb-8">
            Whether you're analyzing a single domain, comparing options, or
            seeking inspiration, our AI-powered tools are here to guide you
            towards the perfect domain name for your business.
          </p>
          <UButton
            color="primary"
            label="Get Started Now"
            trailing-icon="i-heroicons-arrow-right"
            size="xl"
            to="#hero"
          />
        </div>
      </UContainer>
    </section>
  </div>
</template>
