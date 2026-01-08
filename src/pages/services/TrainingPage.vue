<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';

const topics = ['Pengembangan kepemimpinan dan manajerial.', 'Komunikasi efektif dan kerja sama tim.', 'Pelatihan motivasi dan budaya kerja positif.', 'Program penguatan service excellence dan orientasi pelanggan.'];

interface Program {
  number: number;
  color: string;
  title: string;
  description: string;
}

const programs: Program[] = [
  {
    number: 1,
    color: 'blue-600 to-blue-700',
    title: 'Leadership Development',
    description: 'Mengembangkan kompetensi kepemimpinan yang adaptif, mampu mengarahkan tim, mengambil keputusan strategis, dan membangun budaya kerja yang sehat.',
  },
  {
    number: 2,
    color: 'purple-600 to-purple-700',
    title: 'Komunikasi Efektif',
    description: 'Meningkatkan keterampilan komunikasi interpersonal, public speaking, dan kemampuan memberikan feedback yang konstruktif di lingkungan kerja.',
  },
  {
    number: 3,
    color: 'blue-500 to-purple-500',
    title: 'Team Building',
    description: 'Membangun sinergi tim melalui kegiatan interaktif yang menekankan kolaborasi, kepercayaan, dan pencapaian tujuan bersama.',
  },
  {
    number: 4,
    color: 'purple-500 to-blue-500',
    title: 'Motivasi & Produktivitas',
    description: 'Menumbuhkan motivasi internal karyawan agar bekerja lebih produktif, proaktif, dan memiliki semangat berprestasi yang tinggi.',
  },
  {
    number: 5,
    color: 'blue-600 to-purple-600',
    title: 'Service Excellence',
    description: 'Membangun orientasi pelayanan prima kepada pelanggan internal maupun eksternal, dengan penekanan pada empati, responsivitas, dan profesionalisme.',
  },
  {
    number: 6,
    color: 'purple-600 to-blue-600',
    title: 'Manajemen Stres',
    description: 'Membekali karyawan dengan teknik mengelola stres kerja, menjaga keseimbangan hidup, dan mencegah burnout di lingkungan yang dinamis.',
  },
];
</script>

<template>
  <DefaultLayout>
    <!-- Hero Header -->
    <section class="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-12 sm:py-16">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4 mb-4 lg:mb-6">
          <div class="w-14 h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
            <svg class="w-7 h-7 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
          </div>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold">Pelatihan & Pengembangan SDM</h1>
        </div>
        <p class="text-lg sm:text-xl text-blue-100 mb-4 lg:mb-6">Membangun Kompetensi dan Karakter untuk Kinerja Optimal</p>
        <p class="text-base lg:text-lg text-blue-50 leading-relaxed">
          Program pelatihan dari Ordinat Cakrawala dirancang untuk meningkatkan kemampuan teknis maupun soft skills karyawan sesuai dengan kebutuhan organisasi. Dengan pendekatan yang interaktif, aplikatif, dan berbasis kompetensi, kami
          membantu peserta memahami konsep secara mendalam dan menerapkannya langsung di tempat kerja.
        </p>
      </div>
    </section>

    <!-- Why Training Section -->
    <section class="py-12 sm:py-16 lg:py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 lg:mb-12">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Mengapa Pelatihan SDM Penting?</h2>
          <p class="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
            Di era yang terus berkembang, investasi pada pengembangan karyawan adalah kunci keberhasilan jangka panjang organisasi. Pelatihan yang tepat akan meningkatkan produktivitas, menurunkan turnover, dan menciptakan budaya kerja yang
            positif.
          </p>
        </div>

        <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
          <h3 class="text-lg lg:text-xl font-bold text-gray-900 mb-6">Fokus Program Pelatihan Kami</h3>
          <div class="grid sm:grid-cols-2 gap-4">
            <div v-for="(topic, index) in topics" :key="index" class="flex items-start gap-3">
              <svg class="w-5 h-5 lg:w-6 lg:h-6 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-sm lg:text-base text-gray-700">{{ topic }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Training Programs -->
    <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-purple-50/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 lg:mb-12">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Program Pelatihan Unggulan</h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div
            v-for="program in programs"
            :key="program.number"
            :class="`bg-gradient-to-br from-${program.color} text-white rounded-2xl p-6 lg:p-8 shadow-lg relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group`"
          >
            <div class="absolute top-4 right-4 w-12 h-12 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl lg:text-3xl font-bold">
              {{ program.number }}
            </div>
            <h3 class="text-lg lg:text-xl font-bold mb-4 pr-16">{{ program.title }}</h3>
            <p class="text-sm lg:text-base text-white/90 leading-relaxed">{{ program.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Methodology -->
    <section class="py-12 sm:py-16 lg:py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 lg:mb-12">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Metode Pelatihan</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-6 lg:gap-8">
          <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 lg:p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div class="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white text-2xl lg:text-3xl font-bold">1</span>
            </div>
            <h3 class="font-bold text-gray-900 mb-2 text-base lg:text-lg">Presentasi & Diskusi</h3>
            <p class="text-xs lg:text-sm text-gray-700">Penyampaian materi secara interaktif dengan diskusi kasus nyata.</p>
          </div>

          <div class="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 lg:p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div class="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white text-2xl lg:text-3xl font-bold">2</span>
            </div>
            <h3 class="font-bold text-gray-900 mb-2 text-base lg:text-lg">Role Play & Simulasi</h3>
            <p class="text-xs lg:text-sm text-gray-700">Latihan praktis melalui simulasi situasi kerja yang relevan.</p>
          </div>

          <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 lg:p-8 text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div class="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white text-2xl lg:text-3xl font-bold">3</span>
            </div>
            <h3 class="font-bold text-gray-900 mb-2 text-base lg:text-lg">Evaluasi & Feedback</h3>
            <p class="text-xs lg:text-sm text-gray-700">Pengukuran pemahaman dan pemberian umpan balik untuk perbaikan.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">Siap Tingkatkan Kompetensi Tim Anda?</h2>
        <p class="text-base sm:text-lg text-blue-100 mb-6 lg:mb-8 max-w-3xl mx-auto">
          Hubungi kami untuk merancang program pelatihan yang sesuai dengan kebutuhan organisasi Anda. Investasi pada SDM adalah investasi untuk masa depan perusahaan.
        </p>
        <RouterLink to="/kontak" class="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group">
          Konsultasi Program Training
          <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </RouterLink>
      </div>
    </section>
  </DefaultLayout>
</template>
