<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import dimensiLogo from '@/assets/521648d68d8dab5412cee0cc9fcacf2babe5557f.png';

const tujuan = [
  'Mengidentifikasi kekuatan dan kelemahan aspek psikologis CPMI.',
  'Menilai kesiapan mental, ketahanan emosi, dan kemampuan adaptasi budaya.',
  'Memberikan rekomendasi pengembangan diri sebelum keberangkatan.',
  'Mendukung lembaga pengirim dan instansi terkait dalam memastikan perlindungan psikologis pekerja migran.',
];

const fokus = [
  'Kapasitas kognitif dan kemampuan memproses informasi.',
  'Profil kepribadian dan gaya menghadapi tekanan.',
  'Kematangan emosi dan stabilitas dalam situasi kerja yang menantang.',
  'Kemampuan komunikasi dan kerja sama lintas budaya.',
];
</script>

<template>
  <DefaultLayout>
    <!-- Hero Header — CPMI sub-brand keeps its own accent (Dimensi Cakrawala logo) on the shared teal base -->
    <section class="relative overflow-hidden bg-primary-800 text-white py-16 sm:py-20">
      <div class="pointer-events-none absolute -top-16 -right-10 w-80 h-80 rounded-full bg-primary-700/50" aria-hidden="true"></div>
      <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="flex items-center justify-center mb-6">
          <div class="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-2xl flex items-center justify-center p-2 shadow-lg">
            <img :src="dimensiLogo" alt="Dimensi Cakrawala Logo" class="w-full h-full object-contain" />
          </div>
        </div>
        <h1 class="font-display text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold mb-4 leading-tight">Dimensi Cakrawala – Unit Khusus Psikotes CPMI</h1>
        <p class="text-lg sm:text-xl text-primary-100 max-w-3xl mx-auto">Mendampingi Calon Pekerja Migran Indonesia Mempersiapkan Diri Secara Psikologis</p>
      </div>
    </section>

    <!-- Introduction -->
    <section class="py-14 sm:py-16 lg:py-20 bg-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-4 lg:space-y-6 text-ink-soft leading-relaxed text-base lg:text-lg">
          <p>Dimensi Cakrawala merupakan unit khusus yang berfokus pada pemeriksaan psikologi bagi Calon Pekerja Migran Indonesia. Layanan ini mendukung proses seleksi dan kesiapan mental CPMI sebelum berangkat bekerja ke luar negeri.</p>
          <p>
            Dengan pengalaman menangani pemeriksaan psikologi untuk tenaga kerja Indonesia, Dimensi Cakrawala memastikan bahwa setiap peserta tidak hanya lolos secara administratif, tetapi juga lebih siap secara emosional dan psikologis.
          </p>
        </div>
      </div>
    </section>

    <!-- Objectives and Focus -->
    <section class="py-14 sm:py-16 lg:py-24 bg-primary-50/40 border-y border-paper-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <!-- Tujuan -->
          <div class="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-paper-300 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-primary-100 text-primary-700 border border-primary-200">
                <Icon name="target" class="w-6 h-6 lg:w-7 lg:h-7" />
              </div>
              <h2 class="text-xl lg:text-2xl font-semibold text-ink">Tujuan Psikotes CPMI</h2>
            </div>
            <ul class="space-y-3.5">
              <li v-for="(item, index) in tujuan" :key="index" class="flex items-start gap-3">
                <span class="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg class="w-3 h-3 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span class="text-ink-soft text-sm lg:text-base leading-relaxed">{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Fokus -->
          <div class="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-paper-300 hover:border-accent-300 hover:shadow-lg transition-all duration-300">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-accent-100 text-accent-600 border border-accent-200">
                <Icon name="layers" class="w-6 h-6 lg:w-7 lg:h-7" />
              </div>
              <h2 class="text-xl lg:text-2xl font-semibold text-ink">Fokus Asesmen</h2>
            </div>
            <ul class="space-y-3.5">
              <li v-for="(item, index) in fokus" :key="index" class="flex items-start gap-3">
                <span class="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent-500"></span>
                <span class="text-ink-soft text-sm lg:text-base leading-relaxed">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="py-14 sm:py-16 lg:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-8 lg:mb-10">
          <span class="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Keunggulan</span>
          <h2 class="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight mt-3">Keunggulan Layanan Dimensi Cakrawala</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-4 lg:gap-5">
          <div class="bg-paper rounded-2xl p-5 lg:p-6 border border-paper-300 hover:border-primary-300 hover:shadow-md transition-all duration-300 h-full">
            <div class="font-display text-3xl font-semibold text-primary-300 mb-3">01</div>
            <h3 class="text-base lg:text-lg font-semibold text-ink mb-2">Pengalaman Profesional</h3>
            <p class="text-ink-soft text-sm lg:text-base leading-relaxed">Tim psikolog berpengalaman dalam menangani asesmen CPMI sesuai standar dan regulasi yang berlaku.</p>
          </div>

          <div class="bg-paper rounded-2xl p-5 lg:p-6 border border-paper-300 hover:border-primary-300 hover:shadow-md transition-all duration-300 h-full">
            <div class="font-display text-3xl font-semibold text-primary-300 mb-3">02</div>
            <h3 class="text-base lg:text-lg font-semibold text-ink mb-2">Standar HIMPSI</h3>
            <p class="text-ink-soft text-sm lg:text-base leading-relaxed">Menggunakan alat tes yang mengacu pada standar dan norma Himpunan Psikologi Indonesia.</p>
          </div>

          <div class="bg-paper rounded-2xl p-5 lg:p-6 border border-paper-300 hover:border-primary-300 hover:shadow-md transition-all duration-300 h-full">
            <div class="font-display text-3xl font-semibold text-primary-300 mb-3">03</div>
            <h3 class="text-base lg:text-lg font-semibold text-ink mb-2">Pendampingan Berkelanjutan</h3>
            <p class="text-ink-soft text-sm lg:text-base leading-relaxed">Memberikan rekomendasi dan dukungan untuk persiapan mental sebelum keberangkatan ke luar negeri.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative overflow-hidden bg-primary-800 text-white py-14 sm:py-16 lg:py-20">
      <div class="pointer-events-none absolute -bottom-20 -right-10 w-80 h-80 rounded-full bg-primary-700/50" aria-hidden="true"></div>
      <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 lg:mb-6">Hubungi Kami</h2>
        <p class="text-base sm:text-lg text-primary-100 mb-6 lg:mb-8 max-w-3xl mx-auto">
          Untuk informasi lebih lanjut mengenai layanan psikotes CPMI melalui Dimensi Cakrawala, silakan hubungi kami. Kami siap membantu memastikan kesiapan psikologis calon pekerja migran Indonesia.
        </p>
        <RouterLink to="/kontak" class="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-accent-500 text-white font-semibold rounded-full hover:bg-accent-400 transition-all shadow-lg active:scale-[0.98] group">
          Hubungi Kami
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </RouterLink>
      </div>
    </section>
  </DefaultLayout>
</template>
