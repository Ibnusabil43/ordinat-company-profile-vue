<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'

interface Aspect {
  icon: string
  title: string
  items: string[]
}

const aspects: Aspect[] = [
  {
    icon: 'brain',
    title: 'Aspek Intelektual',
    items: [
      'Kemampuan umum dan taraf kecerdasan.',
      'Daya tangkap, daya ingat, serta kemampuan analisa dan sintesis.',
      'Kemampuan verbal, numerik, dan non-verbal.',
      'Kemampuan berpikir abstrak, konkret, dan komprehensif.',
      'Daya antisipasi dan kelenturan berpikir.'
    ]
  },
  {
    icon: 'zap',
    title: 'Sikap Kerja',
    items: [
      'Motivasi kerja dan dorongan berprestasi.',
      'Tempo kerja dan ketelitian.',
      'Ketekunan, daya tahan, dan konsistensi.',
      'Kemampuan bekerja sama dalam tim.'
    ]
  },
  {
    icon: 'users',
    title: 'Kepribadian & Kepemimpinan',
    items: [
      'Stabilitas emosi dan pengendalian diri.',
      'Kepercayaan diri dan inisiatif.',
      'Keterampilan komunikasi dan penyesuaian diri.',
      'Kemampuan mengarahkan, mendelegasikan tugas, dan membangun tim lintas bagian.'
    ]
  }
]

const onlineHighlights = [
  'Pelaksanaan tes dapat dijadwalkan setiap hari, termasuk akhir pekan.',
  'Meminimalkan human error dalam proses koreksi dan rekapitulasi.',
  'Menggunakan alat tes yang mengacu pada standar dan norma HIMPSI.',
  'Laporan hasil dapat disesuaikan dengan format yang dibutuhkan organisasi.'
]

const iconPaths: Record<string, string> = {
  brain: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  zap: 'M13 10V3L4 14h7v7l9-11h-7z',
  users: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
}
</script>

<template>
  <DefaultLayout>
    <!-- Hero Header -->
    <section class="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-12 sm:py-16">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Psikotes & Assessment</h1>
        <p class="text-lg sm:text-xl text-blue-100 mb-4 lg:mb-6">
          Mengungkap Potensi dan Kesiapan Karyawan secara Komprehensif
        </p>
        <div class="space-y-4 text-blue-50 leading-relaxed">
          <p class="text-base lg:text-lg">
            Psikotes digunakan untuk mengenali potensi psikologis karyawan maupun calon karyawan, baik untuk proses rekrutmen, promosi jabatan, maupun penempatan posisi yang lebih tepat.
          </p>
          <p class="text-base lg:text-lg">
            Melalui kombinasi alat tes yang terstandar dan observasi profesional, kami membantu organisasi mengambil keputusan yang lebih objektif dan terukur.
          </p>
        </div>
      </div>
    </section>

    <!-- Aspects Assessed -->
    <section class="py-12 sm:py-16 lg:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 lg:mb-12">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Aspek yang Diukur
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-6 lg:gap-8">
          <div v-for="(aspect, index) in aspects" :key="index" class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
            <div class="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform">
              <svg class="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="iconPaths[aspect.icon]" />
              </svg>
            </div>
            <h3 class="text-lg lg:text-xl font-bold text-gray-900 mb-4">{{ aspect.title }}</h3>
            <ul class="space-y-2">
              <li v-for="(item, idx) in aspect.items" :key="idx" class="flex items-center gap-2 text-xs lg:text-sm text-gray-700">
                <span class="text-blue-600 font-bold flex-shrink-0">•</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Assessment Center -->
    <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg class="w-7 h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div>
              <h2 class="text-2xl lg:text-3xl font-bold text-gray-900">Assessment Center</h2>
              <p class="text-blue-600 font-medium text-sm lg:text-base">Menyiapkan Calon Pimpinan yang Tangguh</p>
            </div>
          </div>

          <div class="space-y-4 text-gray-700 leading-relaxed text-sm lg:text-lg">
            <p>
              Assessment Center kami dirancang untuk memberikan gambaran yang menyeluruh mengenai potensi dan kompetensi calon pimpinan organisasi. Melalui kombinasi simulasi jabatan, studi kasus, wawancara berbasis kompetensi, dan observasi terstruktur, kami membantu mengidentifikasi kader-kader pemimpin yang siap menghadapi tantangan masa depan.
            </p>
            <p>
              Hasil assessment disajikan dalam bentuk profil kompetensi yang mengacu pada kamus kompetensi organisasi, dilengkapi rekomendasi pengembangan yang spesifik dan aplikatif.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Online Testing -->
    <section class="py-12 sm:py-16 lg:py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg class="w-7 h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h2 class="text-2xl lg:text-3xl font-bold text-gray-900">Psikotes & Assessment Online</h2>
                <p class="text-gray-600 font-medium text-sm lg:text-base">Fleksibel, Efisien, dan Terukur</p>
              </div>
            </div>

            <div class="space-y-4 text-gray-700 leading-relaxed text-sm lg:text-lg">
              <p>
                Untuk menjawab kebutuhan organisasi yang dinamis, Ordinat Cakrawala menyediakan layanan psikotes dan assessment secara online. Peserta dapat mengakses tes secara aman melalui perangkat masing-masing, sementara proses skoring tetap mengikuti standar psikometri yang berlaku.
              </p>
              <p>
                Layanan online ini memungkinkan pelaksanaan asesmen lintas wilayah dengan waktu yang lebih fleksibel, tanpa mengurangi kualitas interpretasi hasil.
              </p>
            </div>
          </div>

          <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 lg:p-8 border border-blue-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <h3 class="text-lg lg:text-xl font-bold text-gray-900 mb-4 lg:mb-6">Keunggulan Layanan Online</h3>
            <ul class="space-y-4">
              <li v-for="(item, index) in onlineHighlights" :key="index" class="flex items-center gap-3">
                <span class="text-green-600 font-bold text-xl flex-shrink-0">✓</span>
                <span class="text-sm lg:text-base text-gray-700">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
          Hubungi Kami
        </h2>
        <p class="text-base sm:text-lg text-blue-100 mb-6 lg:mb-8 max-w-3xl mx-auto">
          Untuk informasi lebih lanjut mengenai psikotes dan assessment untuk organisasi Anda, silakan hubungi kami. Tim Ordinat Cakrawala siap membantu merancang solusi yang paling sesuai.
        </p>
        <RouterLink
          to="/kontak"
          class="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group"
        >
          Hubungi Kami
          <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </RouterLink>
      </div>
    </section>
  </DefaultLayout>
</template>
