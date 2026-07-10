<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'

interface TestGroup {
  icon: string
  title: string
  description: string
  items: string[]
}

interface Package {
  title: string
  level: string
  components: string
  price: string
  badge?: string
}

const groups: TestGroup[] = [
  {
    icon: 'mind',
    title: 'Tes Inteligensi (IQ)',
    description: 'Tes untuk mengukur tingkat kecerdasan anak dalam berbagai aspek kognitif, seperti kemampuan verbal, numerik, dan spasial. Hasil tes IQ memberikan gambaran potensi akademik siswa.',
    items: [
      'Kemampuan verbal',
      'Kemampuan numerik',
      'Kemampuan spasial',
      'Daya ingat',
      'Kemampuan berpikir logis',
      'Daya analisa',
      'Kemampuan memecahkan masalah'
    ]
  },
  {
    icon: 'idea',
    title: 'Tes Gaya Belajar',
    description: 'Mengidentifikasi metode belajar yang paling cocok bagi setiap siswa, sehingga proses pembelajaran menjadi lebih efektif dan menyenangkan.',
    items: [
      'Visual (belajar melalui gambar)',
      'Auditory (belajar melalui pendengaran)',
      'Kinesthetic (belajar melalui praktik)'
    ]
  },
  {
    icon: 'compass',
    title: 'Tes Bakat & Minat',
    description: 'Menggali potensi bakat dan area minat siswa untuk membantu pengarahan jurusan, pilihan studi lanjut, hingga proyeksi karier di masa depan.',
    items: [
      'Bakat verbal',
      'Bakat numerik',
      'Bakat spasial'
    ]
  },
  {
    icon: 'heart',
    title: 'Tes Kepribadian Siswa',
    description: 'Mengenal karakter, motivasi belajar, dan gaya interaksi sosial siswa guna memberikan pola dukungan yang tepat dari orang tua dan guru.',
    items: [
      'Ekstrovert vs Introvert',
      'Gaya komunikasi',
      'Motivasi belajar',
      'Sikap terhadap tugas',
      'Kemandirian',
      'Emosi dan pengendalian diri',
      'Hubungan sosial'
    ]
  }
]

const goals = [
  'Membantu siswa memahami potensi diri dan mengenali kekuatan serta area yang perlu dikembangkan.',
  'Memberikan panduan bagi orang tua dan guru dalam mendampingi anak secara lebih efektif.',
  'Meminimalkan trial and error dalam memilih jurusan atau arah studi lanjut.',
  'Menumbuhkan motivasi dan kepercayaan diri siswa dalam menjalani proses belajar.'
]

const packages: Package[] = [
  {
    title: 'Paket Penjurusan Sekolah',
    level: 'SMA',
    components: 'IQ, minat bakat, gaya belajar',
    price: '100.000'
  },
  {
    title: 'Paket Penjurusan Plus Kepribadian',
    level: 'SMA',
    components: 'IQ, kepribadian, minat bakat, gaya belajar',
    price: '120.000',
    badge: 'POPULER'
  },
  {
    title: 'Paket Penjurusan & Arah Studi Lanjut',
    level: 'SMA Kelas Akhir',
    components: 'IQ, kepribadian, minat bakat, gaya belajar, proyeksi studi',
    price: '150.000'
  }
]

</script>

<template>
  <DefaultLayout>
    <!-- Hero Header -->
    <section class="relative overflow-hidden bg-primary-800 text-white py-16 sm:py-20">
      <div class="pointer-events-none absolute -top-16 -right-10 w-80 h-80 rounded-full bg-primary-700/50" aria-hidden="true"></div>
      <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold mb-4 leading-tight">Psikologi Pendidikan</h1>
        <p class="text-lg sm:text-xl text-accent-300 mb-4 lg:mb-6 font-medium">
          Membantu Siswa Menemukan Jurusan yang Tepat
        </p>
        <div class="space-y-4 text-primary-100 leading-relaxed">
          <p class="text-base lg:text-lg">
            Layanan psikotes pendidikan dari Ordinat Cakrawala dirancang untuk memberikan pemetaan potensi siswa secara komprehensif. Kami membantu siswa SMP dan SMA mengenali kemampuan intelektual, bakat, minat, kepribadian, hingga gaya belajar yang paling cocok.
          </p>
          <p class="text-base lg:text-lg">
            Dengan laporan psikotes yang lengkap dan mudah dipahami, siswa maupun orang tua dapat mengambil keputusan penjurusan sekolah atau kuliah yang lebih bijak dan sesuai potensi.
          </p>
        </div>
      </div>
    </section>

    <!-- Test Types -->
    <section class="py-14 sm:py-16 lg:py-24 bg-paper">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-10 lg:mb-12">
          <span class="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Instrumen</span>
          <h2 class="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight mt-3">
            Jenis Tes yang Dilakukan
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-5 lg:gap-6">
          <div v-for="(group, index) in groups" :key="index" class="bg-white rounded-2xl p-6 lg:p-8 border border-paper-300 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
            <div class="w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center mb-4 lg:mb-6 bg-primary-100 text-primary-700 border border-primary-200">
              <Icon :name="group.icon" class="w-6 h-6 lg:w-7 lg:h-7" />
            </div>
            <h3 class="text-lg lg:text-xl font-semibold text-ink mb-3">{{ group.title }}</h3>
            <p class="text-sm lg:text-base text-ink-soft mb-4">{{ group.description }}</p>
            <ul class="space-y-2">
              <li v-for="(item, idx) in group.items" :key="idx" class="flex items-start gap-2 text-xs lg:text-sm text-ink-soft">
                <span class="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Goals Section -->
    <section class="py-14 sm:py-16 lg:py-24 bg-primary-50/40 border-y border-paper-300">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-3xl border border-paper-300 p-6 sm:p-8 lg:p-12">
          <div class="flex items-center gap-4 mb-6 lg:mb-8">
            <div class="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 bg-primary-100 text-primary-700 border border-primary-200">
              <Icon name="target" class="w-7 h-7 lg:w-8 lg:h-8" />
            </div>
            <div>
              <h2 class="font-display text-2xl lg:text-3xl font-semibold text-ink">Tujuan Psikotes Pendidikan</h2>
            </div>
          </div>

          <div class="grid gap-3 lg:gap-4">
            <div v-for="(goal, index) in goals" :key="index" class="flex items-center gap-4 bg-paper rounded-xl p-4 lg:p-5 border border-paper-300">
              <div class="w-8 h-8 lg:w-10 lg:h-10 bg-primary-700 rounded-full flex items-center justify-center text-white font-display font-semibold text-sm lg:text-base flex-shrink-0">
                {{ index + 1 }}
              </div>
              <p class="text-sm lg:text-base text-ink-soft leading-relaxed">{{ goal }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Packages -->
    <section class="py-14 sm:py-16 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-10 lg:mb-12">
          <span class="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Harga</span>
          <h2 class="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight mt-3 mb-4">
            Paket Layanan
          </h2>
          <p class="text-base lg:text-lg text-ink-soft">
            Pilih paket yang sesuai dengan kebutuhan penjurusan dan pengembangan potensi anak Anda.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-5 lg:gap-6 max-w-6xl mx-auto">
          <div v-for="(pkg, index) in packages" :key="index" class="relative bg-paper rounded-2xl p-6 lg:p-8 border-2 border-paper-300 hover:border-primary-500 hover:shadow-lg transition-all duration-300">
            <div v-if="pkg.badge" class="absolute top-0 right-0 bg-accent-500 text-white text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-2xl">
              {{ pkg.badge }}
            </div>

            <div class="mb-6">
              <h3 class="text-lg lg:text-xl font-semibold text-ink mb-2">{{ pkg.title }}</h3>
              <p class="text-sm text-primary-700 font-medium">{{ pkg.level }}</p>
            </div>

            <div class="mb-6">
              <p class="text-xs lg:text-sm text-ink-soft mb-2">Komponen:</p>
              <p class="text-sm lg:text-base text-ink font-medium">{{ pkg.components }}</p>
            </div>

            <div class="pt-6 border-t border-paper-300">
              <div class="font-display text-3xl lg:text-4xl font-semibold text-ink mb-1">
                Rp {{ pkg.price }}
              </div>
              <p class="text-xs lg:text-sm text-ink-soft">per siswa</p>
            </div>
          </div>
        </div>

        <div class="mt-8 lg:mt-12 text-center">
          <p class="text-sm lg:text-base text-ink-soft">
            * Harga dapat disesuaikan untuk pemesanan dalam jumlah besar atau program khusus sekolah.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative overflow-hidden bg-primary-800 text-white py-14 sm:py-16 lg:py-20">
      <div class="pointer-events-none absolute -bottom-20 -right-10 w-80 h-80 rounded-full bg-primary-700/50" aria-hidden="true"></div>
      <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 lg:mb-6">Konsultasi & Informasi Lebih Lanjut</h2>
        <p class="text-base sm:text-lg text-primary-100 mb-6 lg:mb-8 max-w-3xl mx-auto">
          Silakan hubungi kami untuk mendiskusikan kebutuhan psikotes penjurusan siswa di sekolah atau untuk anak Anda secara individu. Kami siap membantu merancang program yang tepat.
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
