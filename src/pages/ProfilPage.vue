<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import IntroSDM from '@/components/IntroSDM.vue'
import AboutCompany from '@/components/AboutCompany.vue'
import VisiMisi from '@/components/VisiMisi.vue'
</script>

<template>
  <DefaultLayout>
    <!-- Page Header -->
    <section class="relative overflow-hidden bg-primary-800 text-white py-16 sm:py-20">
      <div class="pointer-events-none absolute -top-16 -right-10 w-80 h-80 rounded-full bg-primary-700/50" aria-hidden="true"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold mb-4 leading-tight">Profil Perusahaan</h1>
        <p class="text-lg sm:text-xl text-primary-100 max-w-3xl mx-auto">
          Mengenal Ordinat Cakrawala: Biro Konsultasi Psikologi Berbasis Praktik Profesional
        </p>
      </div>
    </section>

    <IntroSDM />
    <AboutCompany />
    <VisiMisi />
  </DefaultLayout>
</template>
