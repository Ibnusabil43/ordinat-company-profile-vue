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
    icon: 'brain',
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
    icon: 'lightbulb',
    title: 'Tes Gaya Belajar',
    description: 'Mengidentifikasi metode belajar yang paling cocok bagi setiap siswa, sehingga proses pembelajaran menjadi lebih efektif dan menyenangkan.',
    items: [
      'Visual (belajar melalui gambar)',
      'Auditory (belajar melalui pendengaran)',
      'Kinesthetic (belajar melalui praktik)'
    ]
  },
  {
    icon: 'palette',
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

const iconPaths: Record<string, string> = {
  brain: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  lightbulb: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
  palette: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
  heart: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  target: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
}
</script>

<template>
  <DefaultLayout>
    <!-- Hero Header -->
    <section class="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-12 sm:py-16">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Psikologi Pendidikan</h1>
        <p class="text-lg sm:text-xl text-purple-100 mb-4 lg:mb-6">
          Membantu Siswa Menemukan Jurusan yang Tepat
        </p>
        <div class="space-y-4 text-purple-50 leading-relaxed">
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
    <section class="py-12 sm:py-16 lg:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 lg:mb-12">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Jenis Tes yang Dilakukan
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-6 lg:gap-8">
          <div v-for="(group, index) in groups" :key="index" class="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
            <div class="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mb-4 lg:mb-6">
              <svg class="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="iconPaths[group.icon]" />
              </svg>
            </div>
            <h3 class="text-lg lg:text-xl font-bold text-gray-900 mb-3">{{ group.title }}</h3>
            <p class="text-sm lg:text-base text-gray-700 mb-4">{{ group.description }}</p>
            <ul class="space-y-2">
              <li v-for="(item, idx) in group.items" :key="idx" class="flex items-center gap-2 text-xs lg:text-sm text-gray-700">
                <span class="text-purple-600 font-bold flex-shrink-0">•</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Goals Section -->
    <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-purple-50/30">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12">
          <div class="flex items-center gap-4 mb-6 lg:mb-8">
            <div class="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <svg class="w-7 h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="iconPaths.target" />
              </svg>
            </div>
            <div>
              <h2 class="text-2xl lg:text-3xl font-bold text-gray-900">Tujuan Psikotes Pendidikan</h2>
            </div>
          </div>

          <div class="grid gap-4 lg:gap-6">
            <div v-for="(goal, index) in goals" :key="index" class="flex items-center gap-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-4 lg:p-6">
              <div class="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm lg:text-base flex-shrink-0">
                {{ index + 1 }}
              </div>
              <p class="text-sm lg:text-base text-gray-700 leading-relaxed">{{ goal }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Packages -->
    <section class="py-12 sm:py-16 lg:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 lg:mb-12">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Paket Layanan
          </h2>
          <p class="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
            Pilih paket yang sesuai dengan kebutuhan penjurusan dan pengembangan potensi anak Anda.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          <div v-for="(pkg, index) in packages" :key="index" class="relative bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 lg:p-8 shadow-lg border-2 border-transparent hover:border-purple-600 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
            <div v-if="pkg.badge" class="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-blue-600 text-white text-xs font-bold px-4 py-1 rounded-bl-xl rounded-tr-xl">
              {{ pkg.badge }}
            </div>
            
            <div class="mb-6">
              <h3 class="text-lg lg:text-xl font-bold text-gray-900 mb-2">{{ pkg.title }}</h3>
              <p class="text-sm text-purple-600 font-medium">{{ pkg.level }}</p>
            </div>

            <div class="mb-6">
              <p class="text-xs lg:text-sm text-gray-600 mb-2">Komponen:</p>
              <p class="text-sm lg:text-base text-gray-700 font-medium">{{ pkg.components }}</p>
            </div>

            <div class="pt-6 border-t border-purple-200">
              <div class="text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                Rp {{ pkg.price }}
              </div>
              <p class="text-xs lg:text-sm text-gray-600">per siswa</p>
            </div>
          </div>
        </div>

        <div class="mt-8 lg:mt-12 text-center">
          <p class="text-sm lg:text-base text-gray-600">
            * Harga dapat disesuaikan untuk pemesanan dalam jumlah besar atau program khusus sekolah.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">Konsultasi & Informasi Lebih Lanjut</h2>
        <p class="text-base sm:text-lg text-purple-100 mb-6 lg:mb-8 max-w-3xl mx-auto">
          Silakan hubungi kami untuk mendiskusikan kebutuhan psikotes penjurusan siswa di sekolah atau untuk anak Anda secara individu. Kami siap membantu merancang program yang tepat.
        </p>
        <RouterLink
          to="/kontak"
          class="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-purple-600 font-semibold rounded-xl hover:bg-purple-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group"
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
