<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';

const tags = ['Konseling Individu', 'Konseling Keluarga', 'Konseling Kelompok', 'Konseling Adiksi', 'Konseling Siswa & Guru'];
</script>

<template>
  <DefaultLayout>
    <!-- Hero Header -->
    <section class="relative overflow-hidden bg-primary-800 text-white py-16 sm:py-20">
      <div class="pointer-events-none absolute -top-16 -right-10 w-80 h-80 rounded-full bg-primary-700/50" aria-hidden="true"></div>
      <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4 mb-4 lg:mb-6">
          <div class="w-14 h-14 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
            <Icon name="people" class="w-7 h-7 lg:w-8 lg:h-8" />
          </div>
          <h1 class="font-display text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold leading-tight">Konseling Psikologi</h1>
        </div>
        <p class="text-lg sm:text-xl text-accent-300 mb-4 lg:mb-6 font-medium">Pendampingan Profesional untuk Mengatasi Masalah Psikologis</p>
        <p class="text-base lg:text-lg text-primary-100 leading-relaxed mb-6">
          Layanan konseling kami dirancang untuk membantu individu, keluarga, dan kelompok dalam menghadapi berbagai tantangan emosional, relasional, maupun perilaku. Dengan pendekatan yang empatik dan berbasis bukti ilmiah, kami memberikan
          ruang aman bagi setiap klien untuk mengungkapkan perasaan, mengidentifikasi akar masalah, dan menemukan solusi yang konstruktif.
        </p>

        <!-- Service Tags -->
        <div class="flex flex-wrap gap-3">
          <span v-for="(tag, index) in tags" :key="index" class="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium border border-white/10">
            {{ tag }}
          </span>
        </div>
      </div>
    </section>

    <!-- Service Details Grid -->
    <section class="py-14 sm:py-16 lg:py-24 bg-paper">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-10 lg:mb-12">
          <span class="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Ragam Layanan</span>
          <h2 class="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight mt-3">Jenis Layanan Konseling</h2>
        </div>

        <div class="grid md:grid-cols-2 gap-5 lg:gap-6">
          <!-- Konseling Individu -->
          <div class="bg-white rounded-2xl p-6 lg:p-8 border border-paper-300 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
            <h3 class="text-lg lg:text-xl font-semibold text-ink mb-4">Konseling Individu</h3>
            <p class="text-sm lg:text-base text-ink-soft mb-4">Sesi tatap muka satu lawan satu dengan psikolog, untuk membahas permasalahan pribadi yang dialami klien.</p>
            <ul class="space-y-2">
              <li class="flex items-start gap-2 text-xs lg:text-sm text-ink-soft">
                <span class="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                <span>Mengatasi stres, kecemasan, dan depresi</span>
              </li>
              <li class="flex items-start gap-2 text-xs lg:text-sm text-ink-soft">
                <span class="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                <span>Pengembangan diri dan peningkatan kualitas hidup</span>
              </li>
              <li class="flex items-start gap-2 text-xs lg:text-sm text-ink-soft">
                <span class="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                <span>Pengambilan keputusan penting dalam hidup</span>
              </li>
            </ul>
          </div>

          <!-- Konseling Keluarga -->
          <div class="bg-white rounded-2xl p-6 lg:p-8 border border-paper-300 hover:border-accent-300 hover:shadow-lg transition-all duration-300">
            <h3 class="text-lg lg:text-xl font-semibold text-ink mb-4">Konseling Keluarga</h3>
            <p class="text-sm lg:text-base text-ink-soft mb-4">Membantu keluarga mengatasi konflik dan memperbaiki pola komunikasi antar anggota keluarga.</p>
            <ul class="space-y-2">
              <li class="flex items-start gap-2 text-xs lg:text-sm text-ink-soft">
                <span class="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent-400"></span>
                <span>Pola asuh (parenting) yang efektif</span>
              </li>
              <li class="flex items-start gap-2 text-xs lg:text-sm text-ink-soft">
                <span class="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent-400"></span>
                <span>Komunikasi orang tua dan anak</span>
              </li>
              <li class="flex items-start gap-2 text-xs lg:text-sm text-ink-soft">
                <span class="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent-400"></span>
                <span>Dinamika dan relasi keluarga yang harmonis</span>
              </li>
            </ul>
          </div>

          <!-- Konseling Kelompok -->
          <div class="bg-white rounded-2xl p-6 lg:p-8 border border-paper-300 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
            <h3 class="text-lg lg:text-xl font-semibold text-ink mb-4">Konseling Kelompok</h3>
            <p class="text-sm lg:text-base text-ink-soft mb-4">Sesi konseling yang melibatkan beberapa orang dengan permasalahan serupa, untuk saling mendukung dan belajar bersama.</p>
            <ul class="space-y-2">
              <li class="flex items-start gap-2 text-xs lg:text-sm text-ink-soft">
                <span class="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                <span>Peer support group untuk berbagai isu</span>
              </li>
              <li class="flex items-start gap-2 text-xs lg:text-sm text-ink-soft">
                <span class="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                <span>Melatih keterampilan sosial dan empati</span>
              </li>
              <li class="flex items-start gap-2 text-xs lg:text-sm text-ink-soft">
                <span class="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                <span>Membangun resiliensi dan dukungan sosial</span>
              </li>
            </ul>
          </div>

          <!-- Konseling Siswa & Guru -->
          <div class="bg-white rounded-2xl p-6 lg:p-8 border border-paper-300 hover:border-accent-300 hover:shadow-lg transition-all duration-300">
            <h3 class="text-lg lg:text-xl font-semibold text-ink mb-4">Konseling Siswa & Guru</h3>
            <p class="text-sm lg:text-base text-ink-soft mb-4">Konseling khusus untuk mendukung kesejahteraan emosional dan mental di lingkungan pendidikan.</p>
            <ul class="space-y-2">
              <li class="flex items-start gap-2 text-xs lg:text-sm text-ink-soft">
                <span class="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent-400"></span>
                <span>Mengatasi hambatan belajar dan masalah akademik</span>
              </li>
              <li class="flex items-start gap-2 text-xs lg:text-sm text-ink-soft">
                <span class="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent-400"></span>
                <span>Motivasi belajar dan orientasi masa depan</span>
              </li>
              <li class="flex items-start gap-2 text-xs lg:text-sm text-ink-soft">
                <span class="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent-400"></span>
                <span>Manajemen stres guru dan burnout</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Addiction Counseling -->
    <section class="py-14 sm:py-16 lg:py-24 bg-primary-50/40 border-y border-paper-300">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-3xl border border-paper-300 p-6 sm:p-8 lg:p-12">
          <h2 class="font-display text-2xl lg:text-3xl font-semibold text-ink mb-6">Konseling Adiksi</h2>
          <p class="text-sm lg:text-base text-ink-soft leading-relaxed mb-4">
            Layanan khusus untuk individu yang mengalami ketergantungan (adiksi), baik terhadap zat (narkoba, alkohol) maupun perilaku tertentu (game, media sosial, judi, dll).
          </p>
          <p class="text-sm lg:text-base text-ink-soft leading-relaxed mb-6">
            Melalui pendekatan terapi yang terstruktur, kami membantu klien memahami akar permasalahan adiksi, membangun motivasi untuk berubah, dan menyusun strategi pencegahan relapse yang efektif.
          </p>
          <div class="grid md:grid-cols-2 gap-4 lg:gap-5">
            <div class="bg-paper rounded-xl p-4 lg:p-6 border border-paper-300">
              <h3 class="font-semibold text-ink mb-2 text-base lg:text-lg">Fase Assessment</h3>
              <p class="text-xs lg:text-sm text-ink-soft">Evaluasi tingkat keparahan adiksi dan dampaknya terhadap kehidupan klien.</p>
            </div>
            <div class="bg-paper rounded-xl p-4 lg:p-6 border border-paper-300">
              <h3 class="font-semibold text-ink mb-2 text-base lg:text-lg">Fase Terapi</h3>
              <p class="text-xs lg:text-sm text-ink-soft">Intervensi psikologis untuk mengurangi ketergantungan dan membangun pola hidup sehat.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative overflow-hidden bg-primary-800 text-white py-14 sm:py-16 lg:py-20">
      <div class="pointer-events-none absolute -bottom-20 -right-10 w-80 h-80 rounded-full bg-primary-700/50" aria-hidden="true"></div>
      <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 lg:mb-6">Butuh Konseling Psikologi?</h2>
        <p class="text-base sm:text-lg text-primary-100 mb-6 lg:mb-8 max-w-3xl mx-auto">Jangan ragu untuk menghubungi kami. Semua informasi yang Anda sampaikan dijamin kerahasiaannya sesuai kode etik psikolog.</p>
        <RouterLink to="/kontak" class="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-accent-500 text-white font-semibold rounded-full hover:bg-accent-400 transition-all shadow-lg active:scale-[0.98] group">
          Jadwalkan Konseling
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </RouterLink>
      </div>
    </section>
  </DefaultLayout>
</template>
