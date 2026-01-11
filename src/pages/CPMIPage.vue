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
    <!-- Hero Header -->
    <section class="bg-gradient-to-br from-purple-600 via-purple-700 to-blue-700 text-white py-12 sm:py-16">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="flex items-center justify-center mb-6">
          <div class="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-2xl flex items-center justify-center p-2">
            <img :src="dimensiLogo" alt="Dimensi Cakrawala Logo" class="w-full h-full object-contain" />
          </div>
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Dimensi Cakrawala – Unit Khusus Psikotes CPMI</h1>
        <p class="text-lg sm:text-xl text-purple-100 max-w-3xl mx-auto">Mendampingi Calon Pekerja Migran Indonesia Mempersiapkan Diri Secara Psikologis</p>
      </div>
    </section>

    <!-- Introduction -->
    <section class="py-12 sm:py-16 lg:py-20 bg-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-4 lg:space-y-6 text-gray-700 leading-relaxed text-base lg:text-lg">
          <p>
            Dimensi Cakrawala adalah unit profesional yang fokus pada layanan psikologi bagi Calon Pekerja Migran Indonesia (CPMI). Kami menyediakan asesmen psikologi komprehensif untuk memastikan kesiapan mental, emosional, dan psikologis
            CPMI sebelum berangkat bekerja ke luar negeri.
          </p>
          <p>
            Dengan menggunakan metode dan alat tes psikologi yang terstandarisasi, kami membantu lembaga penempatan tenaga kerja maupun individu dalam proses seleksi yang objektif, akurat, dan sesuai standar BNP2TKI serta persyaratan negara
            tujuan.
          </p>
          <p>
            Lebih dari sekadar proses administrasi, kami memastikan setiap CPMI siap menghadapi tantangan bekerja di luar negeri, baik secara mental maupun emosional. Layanan ini dirancang untuk melindungi CPMI dari risiko psikologis dan
            meningkatkan peluang kesuksesan mereka di tempat kerja.
          </p>
        </div>
      </div>
    </section>

    <!-- Objectives and Focus -->
    <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <!-- Tujuan -->
          <div class="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                  />
                </svg>
              </div>
              <h2 class="text-xl lg:text-2xl font-bold text-gray-900">Tujuan Psikotes CPMI</h2>
            </div>
            <ul class="space-y-4">
              <li v-for="(item, index) in tujuan" :key="index" class="flex items-center gap-3">
                <span class="text-green-600 font-bold text-xl flex-shrink-0">✓</span>
                <span class="text-gray-700 text-sm lg:text-base">{{ item }}</span>
              </li>
            </ul>
          </div>

          <!-- Fokus -->
          <div class="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                  />
                </svg>
              </div>
              <h2 class="text-xl lg:text-2xl font-bold text-gray-900">Fokus Asesmen</h2>
            </div>
            <ul class="space-y-4">
              <li v-for="(item, index) in fokus" :key="index" class="flex items-center gap-3">
                <span class="text-blue-600 font-bold text-xl flex-shrink-0">•</span>
                <span class="text-gray-700 text-sm lg:text-base">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="py-12 sm:py-16 lg:py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 lg:mb-12">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Keunggulan Layanan Dimensi Cakrawala</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-6 lg:gap-8">
          <div class="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 lg:p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div class="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span class="text-white font-bold text-lg lg:text-xl">1</span>
            </div>
            <h3 class="text-base lg:text-lg font-bold text-gray-900 mb-3">Pengalaman Profesional</h3>
            <p class="text-gray-700 text-sm lg:text-base">Tim psikolog berpengalaman dalam menangani asesmen CPMI sesuai standar dan regulasi yang berlaku.</p>
          </div>

          <div class="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 lg:p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div class="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span class="text-white font-bold text-lg lg:text-xl">2</span>
            </div>
            <h3 class="text-base lg:text-lg font-bold text-gray-900 mb-3">Standar HIMPSI</h3>
            <p class="text-gray-700 text-sm lg:text-base">Menggunakan alat tes yang mengacu pada standar dan norma Himpunan Psikologi Indonesia.</p>
          </div>

          <div class="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 lg:p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div class="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <span class="text-white font-bold text-lg lg:text-xl">3</span>
            </div>
            <h3 class="text-base lg:text-lg font-bold text-gray-900 mb-3">Pendampingan Berkelanjutan</h3>
            <p class="text-gray-700 text-sm lg:text-base">Memberikan rekomendasi dan dukungan untuk persiapan mental sebelum keberangkatan ke luar negeri.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">Hubungi Kami</h2>
        <p class="text-base sm:text-lg text-blue-100 mb-6 lg:mb-8 max-w-3xl mx-auto">
          Untuk informasi lebih lanjut mengenai layanan psikotes CPMI melalui Dimensi Cakrawala, silakan hubungi kami. Kami siap membantu memastikan kesiapan psikologis calon pekerja migran Indonesia.
        </p>
        <RouterLink to="/kontak" class="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
          Hubungi Kami
          <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </RouterLink>
      </div>
    </section>
  </DefaultLayout>
</template>
