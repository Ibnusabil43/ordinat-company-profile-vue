<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import IntroSDM from '@/components/IntroSDM.vue'
import AboutCompany from '@/components/AboutCompany.vue'
import VisiMisi from '@/components/VisiMisi.vue'
</script>

<template>
  <DefaultLayout>
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-12 sm:py-16">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Profil Perusahaan</h1>
        <p class="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
          Mengenal Ordinat Cakrawala: Biro Konsultasi Psikologi Berbasis Praktik Profesional
        </p>
      </div>
    </section>

    <IntroSDM />
    <AboutCompany />
    <VisiMisi />
  </DefaultLayout>
</template>
