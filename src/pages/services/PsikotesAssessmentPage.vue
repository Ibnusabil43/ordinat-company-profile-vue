<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'

interface Aspect {
  icon: string
  title: string
  items: string[]
}

const aspects: Aspect[] = [
  {
    icon: 'mind',
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
    icon: 'spark',
    title: 'Sikap Kerja',
    items: [
      'Motivasi kerja dan dorongan berprestasi.',
      'Tempo kerja dan ketelitian.',
      'Ketekunan, daya tahan, dan konsistensi.',
      'Kemampuan bekerja sama dalam tim.'
    ]
  },
  {
    icon: 'people',
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

</script>

<template>
  <DefaultLayout>
    <!-- Hero Header -->
    <section class="relative overflow-hidden bg-primary-800 text-white py-16 sm:py-20">
      <div class="pointer-events-none absolute -top-16 -right-10 w-80 h-80 rounded-full bg-primary-700/50" aria-hidden="true"></div>
      <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold mb-4 leading-tight">Psikotes & Assessment</h1>
        <p class="text-lg sm:text-xl text-accent-300 mb-4 lg:mb-6 font-medium">
          Mengungkap Potensi dan Kesiapan Karyawan secara Komprehensif
        </p>
        <div class="space-y-4 text-primary-100 leading-relaxed">
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
    <section class="py-14 sm:py-16 lg:py-24 bg-paper">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-10 lg:mb-12">
          <span class="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Cakupan</span>
          <h2 class="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight mt-3">
            Aspek yang Diukur
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-5 lg:gap-6">
          <div v-for="(aspect, index) in aspects" :key="index" class="bg-white rounded-2xl p-6 lg:p-8 border border-paper-300 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
            <div class="w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center mb-4 lg:mb-6 bg-primary-100 text-primary-700 border border-primary-200">
              <Icon :name="aspect.icon" class="w-6 h-6 lg:w-7 lg:h-7" />
            </div>
            <h3 class="text-lg lg:text-xl font-semibold text-ink mb-4">{{ aspect.title }}</h3>
            <ul class="space-y-2">
              <li v-for="(item, idx) in aspect.items" :key="idx" class="flex items-start gap-2 text-xs lg:text-sm text-ink-soft">
                <span class="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Assessment Center -->
    <section class="py-14 sm:py-16 lg:py-24 bg-primary-50/40 border-y border-paper-300">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-3xl border border-paper-300 p-6 sm:p-8 lg:p-12">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 bg-primary-100 text-primary-700 border border-primary-200">
              <Icon name="target" class="w-7 h-7 lg:w-8 lg:h-8" />
            </div>
            <div>
              <h2 class="font-display text-2xl lg:text-3xl font-semibold text-ink">Assessment Center</h2>
              <p class="text-primary-700 font-medium text-sm lg:text-base">Menyiapkan Calon Pimpinan yang Tangguh</p>
            </div>
          </div>

          <div class="space-y-4 text-ink-soft leading-relaxed text-sm lg:text-lg">
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
    <section class="py-14 sm:py-16 lg:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 bg-accent-100 text-accent-600 border border-accent-200">
                <Icon name="device" class="w-7 h-7 lg:w-8 lg:h-8" />
              </div>
              <div>
                <h2 class="font-display text-2xl lg:text-3xl font-semibold text-ink">Psikotes & Assessment Online</h2>
                <p class="text-ink-soft font-medium text-sm lg:text-base">Fleksibel, Efisien, dan Terukur</p>
              </div>
            </div>

            <div class="space-y-4 text-ink-soft leading-relaxed text-sm lg:text-lg">
              <p>
                Untuk menjawab kebutuhan organisasi yang dinamis, Ordinat Cakrawala menyediakan layanan psikotes dan assessment secara online. Peserta dapat mengakses tes secara aman melalui perangkat masing-masing, sementara proses skoring tetap mengikuti standar psikometri yang berlaku.
              </p>
              <p>
                Layanan online ini memungkinkan pelaksanaan asesmen lintas wilayah dengan waktu yang lebih fleksibel, tanpa mengurangi kualitas interpretasi hasil.
              </p>
            </div>
          </div>

          <div class="bg-paper rounded-2xl p-6 lg:p-8 border border-paper-300">
            <h3 class="text-lg lg:text-xl font-semibold text-ink mb-4 lg:mb-6">Keunggulan Layanan Online</h3>
            <ul class="space-y-3.5">
              <li v-for="(item, index) in onlineHighlights" :key="index" class="flex items-start gap-3">
                <span class="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg class="w-3 h-3 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span class="text-sm lg:text-base text-ink-soft leading-relaxed">{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative overflow-hidden bg-primary-800 text-white py-14 sm:py-16 lg:py-20">
      <div class="pointer-events-none absolute -bottom-20 -right-10 w-80 h-80 rounded-full bg-primary-700/50" aria-hidden="true"></div>
      <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 lg:mb-6">
          Hubungi Kami
        </h2>
        <p class="text-base sm:text-lg text-primary-100 mb-6 lg:mb-8 max-w-3xl mx-auto">
          Untuk informasi lebih lanjut mengenai psikotes dan assessment untuk organisasi Anda, silakan hubungi kami. Tim Ordinat Cakrawala siap membantu merancang solusi yang paling sesuai.
        </p>
        <RouterLink
          to="/kontak"
          class="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-accent-500 text-white font-semibold rounded-full hover:bg-accent-400 transition-all shadow-lg active:scale-[0.98] group"
        >
          Hubungi Kami
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
        </RouterLink>
      </div>
    </section>
  </DefaultLayout>
</template>
