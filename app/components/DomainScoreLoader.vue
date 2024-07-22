<template>
  <div class="space-y-6">
    <OverallScoreLoader />
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <CategoryScoreLoader v-for="n in 6" :key="`category-loader-${n}`" />
    </div>
  </div>
</template>
