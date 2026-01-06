<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'

interface Service {
  icon: string
  title: string
  description: string
  color: string
  link: string
}

const services: Service[] = [
  {
    icon: 'clipboard-check',
    title: 'Psikotes & Assessment',
    description: 'Pemeriksaan psikologis menyeluruh untuk seleksi, penempatan, promosi jabatan, serta pemetaan potensi dan kompetensi individu.',
    color: 'from-blue-600 to-blue-700',
    link: '/layanan/psikotes-assessment'
  },
  {
    icon: 'school',
    title: 'Psikologi Pendidikan',
    description: 'Psikotes klasikal dan individual bagi siswa TK hingga Perguruan Tinggi untuk mendukung penjurusan, kesiapan belajar, dan pengembangan prestasi.',
    color: 'from-purple-600 to-purple-700',
    link: '/layanan/psikologi-pendidikan'
  },
  {
    icon: 'users',
    title: 'Konseling',
    description: 'Pendampingan psikologis bagi individu, keluarga, dan kelompok dalam menghadapi tantangan pribadi, relasi, maupun pekerjaan.',
    color: 'from-blue-500 to-purple-500',
    link: '/layanan/konseling'
  },
  {
    icon: 'presentation',
    title: 'Training & Capacity Building',
    description: 'Program pelatihan soft skills dan pengembangan kapasitas SDM yang disesuaikan dengan kebutuhan spesifik organisasi.',
    color: 'from-purple-500 to-blue-500',
    link: '/layanan/training'
  },
  {
    icon: 'mountain',
    title: 'Outbound & Team Building',
    description: 'Kegiatan outbound berbasis experiential learning untuk membangun kekompakan tim, kepemimpinan, serta kepercayaan diri.',
    color: 'from-blue-600 to-purple-600',
    link: '/layanan/outbound'
  }
]

const iconPaths: Record<string, string> = {
  'clipboard-check': 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4',
  'school': 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
  'users': 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
  'presentation': 'M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z',
  'mountain': 'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
}
</script>

<template>
  <DefaultLayout>
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-12 sm:py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
          Layanan Kami
        </h1>
        <p class="text-base sm:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto">
          Layanan kami dirancang untuk menjawab kebutuhan berbagai pemangku kepentingan: sekolah, organisasi, keluarga, dan CPMI.
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-12 sm:py-16 lg:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <RouterLink
            v-for="(service, index) in services"
            :key="index"
            :to="service.link"
            class="flex flex-col bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group"
          >
            <div :class="`w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-4 lg:mb-6 group-hover:scale-110 transition-transform`">
              <svg class="w-7 h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="iconPaths[service.icon]" />
              </svg>
            </div>
            <h3 class="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4">{{ service.title }}</h3>
            <p class="text-gray-600 leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base">{{ service.description }}</p>
            <div class="flex items-center text-blue-600 font-medium text-sm lg:text-base">
              Pelajari Lebih Lanjut
              <svg class="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Also Available Section -->
    <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg hover:shadow-xl transition-shadow">
          <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 lg:mb-8">
            Layanan Tambahan
          </h2>
          <div class="grid md:grid-cols-2 gap-6">
            <div class="hover:-translate-y-1 transition-transform">
              <h3 class="font-semibold text-base lg:text-lg text-gray-900 mb-2">Psikotes Online</h3>
              <p class="text-gray-600 text-sm lg:text-base leading-relaxed">Pelaksanaan tes dapat dijadwalkan setiap hari dengan sistem online yang aman dan terukur.</p>
            </div>
            <div class="hover:-translate-y-1 transition-transform">
              <h3 class="font-semibold text-base lg:text-lg text-gray-900 mb-2">Assessment Center</h3>
              <p class="text-gray-600 text-sm lg:text-base leading-relaxed">Menyiapkan calon pimpinan yang tangguh melalui simulasi dan observasi terstruktur.</p>
            </div>
            <div class="hover:-translate-y-1 transition-transform">
              <h3 class="font-semibold text-base lg:text-lg text-gray-900 mb-2">Dokumentasi Kegiatan</h3>
              <p class="text-gray-600 text-sm lg:text-base leading-relaxed">Dokumentasi lengkap dari berbagai aktivitas psikotes, pelatihan, dan pendampingan.</p>
            </div>
            <div class="hover:-translate-y-1 transition-transform">
              <h3 class="font-semibold text-base lg:text-lg text-gray-900 mb-2">Paket Khusus Sekolah</h3>
              <p class="text-gray-600 text-sm lg:text-base leading-relaxed">Struktur paket psikotes klasikal yang dapat disesuaikan dengan kebutuhan sekolah.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>
