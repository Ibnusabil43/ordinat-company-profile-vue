<script setup lang="ts">
import Navigation from '@/components/Navigation.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div>
    <Navigation />
    <main class="pt-20">
      <slot />
    </main>
    <Footer />
  </div>
</template>
