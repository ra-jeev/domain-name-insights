<template>
  <div>
    <section class="py-16">
      <UContainer>
        <div
          class="flex flex-col items-center w-full max-w-lg text-center mx-auto"
        >
          <h1 class="text-4xl md:text-5xl font-extrabold !leading-tight mb-4">
            <span class="text-primary">Confused</span> between two domain names?
          </h1>
          <p class="text-xl mb-10 text-gray-500 dark:text-gray-400">
            Discover which domain name has the edge for your needs.
          </p>

          <DomainCompareInput />
        </div>
      </UContainer>
    </section>

    <section class="py-16">
      <UContainer>
        <div class="grid md:grid-cols-2 gap-8">
          <UCard>
            <h2 class="text-xl md:text-2xl font-semibold mb-6">
              Why Compare Domains?
            </h2>

            <ul class="space-y-3">
              <li class="flex items-start">
                <UIcon
                  name="i-heroicons-check-circle"
                  class="w-6 h-6 mr-2 text-green-500 flex-shrink-0"
                />
                <span>
                  Understand the relative strengths of different domain options
                </span>
              </li>
              <li class="flex items-start">
                <UIcon
                  name="i-heroicons-check-circle"
                  class="w-6 h-6 mr-2 text-green-500 flex-shrink-0"
                />
                <span>
                  Make informed decisions when choosing between multiple domains
                </span>
              </li>
              <li class="flex items-start">
                <UIcon
                  name="i-heroicons-check-circle"
                  class="w-6 h-6 mr-2 text-green-500 flex-shrink-0"
                />
                <span>Analyze your domain against competitors</span>
              </li>
              <li class="flex items-start">
                <UIcon
                  name="i-heroicons-check-circle"
                  class="w-6 h-6 mr-2 text-green-500 flex-shrink-0"
                />
                <span>
                  Identify areas for improvement in your current domain
                </span>
              </li>
            </ul>
          </UCard>

          <UCard>
            <h2 class="text-xl md:text-2xl font-semibold mb-6">
              What Gets Compared?
            </h2>

            <ul class="space-y-3">
              <li class="flex items-start">
                <UIcon
                  name="i-heroicons-star"
                  class="w-6 h-6 mr-2 text-yellow-500 flex-shrink-0"
                />
                <span> Brand Impact and Memorability </span>
              </li>
              <li class="flex items-start">
                <UIcon
                  name="i-heroicons-cursor-arrow-rays"
                  class="w-6 h-6 mr-2 text-purple-500 flex-shrink-0"
                />
                <span>Usability and User-Friendliness</span>
              </li>
              <li class="flex items-start">
                <UIcon
                  name="i-heroicons-magnifying-glass"
                  class="w-6 h-6 mr-2 text-blue-500 flex-shrink-0"
                />
                <span>SEO Potential and Keyword Relevance</span>
              </li>
              <li class="flex items-start">
                <UIcon
                  name="i-heroicons-shield-check"
                  class="w-6 h-6 mr-2 text-green-500 flex-shrink-0"
                />
                <span>Legal Risks and Trademark Considerations</span>
              </li>
              <li class="flex items-start">
                <UIcon
                  name="i-heroicons-chart-bar"
                  class="w-6 h-6 mr-2 text-red-500 flex-shrink-0"
                />
                <span>Market Potential and Target Audience Fit</span>
              </li>
            </ul>
          </UCard>
        </div>
      </UContainer>
    </section>

    <section class="py-16">
      <UContainer>
        <div class="text-center">
          <h2 class="text-xl md:text-2xl font-bold mb-8">
            Not sure which domains to compare?
          </h2>
          <UButton size="lg" to="/" trailing-icon="i-heroicons-arrow-right">
            Analyze a Single Domain
          </UButton>
        </div>
      </UContainer>
    </section>
  </div>
</template>
