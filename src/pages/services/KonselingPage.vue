<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const tags = [
  'Konseling Individu',
  'Konseling Keluarga',
  'Konseling Kelompok',
  'Konseling Adiksi',
  'Konseling Siswa & Guru'
]
</script>

<template>
  <DefaultLayout>
    <!-- Hero Header -->
    <section class="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-12 sm:py-16">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4 mb-4 lg:mb-6">
          <div class="w-14 h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
            <svg class="w-7 h-7 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold">Konseling Psikologi</h1>
        </div>
        <p class="text-lg sm:text-xl text-blue-100 mb-4 lg:mb-6">
          Pendampingan Profesional untuk Mengatasi Masalah Psikologis
        </p>
        <p class="text-base lg:text-lg text-blue-50 leading-relaxed mb-6">
          Layanan konseling kami dirancang untuk membantu individu, keluarga, dan kelompok dalam menghadapi berbagai tantangan emosional, relasional, maupun perilaku. Dengan pendekatan yang empatik dan berbasis bukti ilmiah, kami memberikan ruang aman bagi setiap klien untuk mengungkapkan perasaan, mengidentifikasi akar masalah, dan menemukan solusi yang konstruktif.
        </p>

        <!-- Service Tags -->
        <div class="flex flex-wrap gap-3">
          <span v-for="(tag, index) in tags" :key="index" class="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/20">
            {{ tag }}
          </span>
        </div>
      </div>
    </section>

    <!-- Service Details Grid -->
    <section class="py-12 sm:py-16 lg:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 lg:mb-12">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Jenis Layanan Konseling
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-6 lg:gap-8">
          <!-- Konseling Individu -->
          <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <h3 class="text-lg lg:text-xl font-bold text-gray-900 mb-4">Konseling Individu</h3>
            <p class="text-sm lg:text-base text-gray-700 mb-4">
              Sesi tatap muka satu lawan satu dengan psikolog, untuk membahas permasalahan pribadi yang dialami klien.
            </p>
            <ul class="space-y-2">
              <li class="flex items-center gap-2 text-xs lg:text-sm text-gray-700">
                <span class="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Mengatasi stres, kecemasan, dan depresi</span>
              </li>
              <li class="flex items-center gap-2 text-xs lg:text-sm text-gray-700">
                <span class="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Pengembangan diri dan peningkatan kualitas hidup</span>
              </li>
              <li class="flex items-center gap-2 text-xs lg:text-sm text-gray-700">
                <span class="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Pengambilan keputusan penting dalam hidup</span>
              </li>
            </ul>
          </div>

          <!-- Konseling Keluarga -->
          <div class="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <h3 class="text-lg lg:text-xl font-bold text-gray-900 mb-4">Konseling Keluarga</h3>
            <p class="text-sm lg:text-base text-gray-700 mb-4">
              Membantu keluarga mengatasi konflik dan memperbaiki pola komunikasi antar anggota keluarga.
            </p>
            <ul class="space-y-2">
              <li class="flex items-center gap-2 text-xs lg:text-sm text-gray-700">
                <span class="text-purple-600 font-bold flex-shrink-0">•</span>
                <span>Pola asuh (parenting) yang efektif</span>
              </li>
              <li class="flex items-center gap-2 text-xs lg:text-sm text-gray-700">
                <span class="text-purple-600 font-bold flex-shrink-0">•</span>
                <span>Komunikasi orang tua dan anak</span>
              </li>
              <li class="flex items-center gap-2 text-xs lg:text-sm text-gray-700">
                <span class="text-purple-600 font-bold flex-shrink-0">•</span>
                <span>Dinamika dan relasi keluarga yang harmonis</span>
              </li>
            </ul>
          </div>

          <!-- Konseling Kelompok -->
          <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <h3 class="text-lg lg:text-xl font-bold text-gray-900 mb-4">Konseling Kelompok</h3>
            <p class="text-sm lg:text-base text-gray-700 mb-4">
              Sesi konseling yang melibatkan beberapa orang dengan permasalahan serupa, untuk saling mendukung dan belajar bersama.
            </p>
            <ul class="space-y-2">
              <li class="flex items-center gap-2 text-xs lg:text-sm text-gray-700">
                <span class="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Peer support group untuk berbagai isu</span>
              </li>
              <li class="flex items-center gap-2 text-xs lg:text-sm text-gray-700">
                <span class="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Melatih keterampilan sosial dan empati</span>
              </li>
              <li class="flex items-center gap-2 text-xs lg:text-sm text-gray-700">
                <span class="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>Membangun resiliensi dan dukungan sosial</span>
              </li>
            </ul>
          </div>

          <!-- Konseling Siswa & Guru -->
          <div class="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <h3 class="text-lg lg:text-xl font-bold text-gray-900 mb-4">Konseling Siswa & Guru</h3>
            <p class="text-sm lg:text-base text-gray-700 mb-4">
              Konseling khusus untuk mendukung kesejahteraan emosional dan mental di lingkungan pendidikan.
            </p>
            <ul class="space-y-2">
              <li class="flex items-center gap-2 text-xs lg:text-sm text-gray-700">
                <span class="text-purple-600 font-bold flex-shrink-0">•</span>
                <span>Mengatasi hambatan belajar dan masalah akademik</span>
              </li>
              <li class="flex items-center gap-2 text-xs lg:text-sm text-gray-700">
                <span class="text-purple-600 font-bold flex-shrink-0">•</span>
                <span>Motivasi belajar dan orientasi masa depan</span>
              </li>
              <li class="flex items-center gap-2 text-xs lg:text-sm text-gray-700">
                <span class="text-purple-600 font-bold flex-shrink-0">•</span>
                <span>Manajemen stres guru dan burnout</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Addiction Counseling -->
    <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">Konseling Adiksi</h2>
          <p class="text-sm lg:text-base text-gray-700 leading-relaxed mb-4">
            Layanan khusus untuk individu yang mengalami ketergantungan (adiksi), baik terhadap zat (narkoba, alkohol) maupun perilaku tertentu (game, media sosial, judi, dll).
          </p>
          <p class="text-sm lg:text-base text-gray-700 leading-relaxed mb-6">
            Melalui pendekatan terapi yang terstruktur, kami membantu klien memahami akar permasalahan adiksi, membangun motivasi untuk berubah, dan menyusun strategi pencegahan relapse yang efektif.
          </p>
          <div class="grid md:grid-cols-2 gap-4 lg:gap-6">
            <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 lg:p-6">
              <h3 class="font-bold text-gray-900 mb-2 text-base lg:text-lg">Fase Assessment</h3>
              <p class="text-xs lg:text-sm text-gray-700">Evaluasi tingkat keparahan adiksi dan dampaknya terhadap kehidupan klien.</p>
            </div>
            <div class="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4 lg:p-6">
              <h3 class="font-bold text-gray-900 mb-2 text-base lg:text-lg">Fase Terapi</h3>
              <p class="text-xs lg:text-sm text-gray-700">Intervensi psikologis untuk mengurangi ketergantungan dan membangun pola hidup sehat.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
          Butuh Konseling Psikologi?
        </h2>
        <p class="text-base sm:text-lg text-blue-100 mb-6 lg:mb-8 max-w-3xl mx-auto">
          Jangan ragu untuk menghubungi kami. Semua informasi yang Anda sampaikan dijamin kerahasiaannya sesuai kode etik psikolog.
        </p>
        <RouterLink
          to="/kontak"
          class="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group"
        >
          Jadwalkan Konseling
          <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </RouterLink>
      </div>
    </section>
  </DefaultLayout>
</template>
