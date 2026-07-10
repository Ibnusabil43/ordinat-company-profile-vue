<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'

interface Service {
  icon: string
  title: string
  description: string
  link: string
}

const services: Service[] = [
  {
    icon: 'assessment',
    title: 'Psikotes & Assessment',
    description: 'Pemeriksaan psikologis menyeluruh untuk seleksi, penempatan, promosi jabatan, serta pemetaan potensi dan kompetensi individu.',
    link: '/layanan/psikotes-assessment'
  },
  {
    icon: 'education',
    title: 'Psikologi Pendidikan',
    description: 'Psikotes klasikal dan individual bagi siswa TK hingga Perguruan Tinggi untuk mendukung penjurusan, kesiapan belajar, dan pengembangan prestasi.',
    link: '/layanan/psikologi-pendidikan'
  },
  {
    icon: 'people',
    title: 'Konseling',
    description: 'Pendampingan psikologis bagi individu, keluarga, dan kelompok dalam menghadapi tantangan pribadi, relasi, maupun pekerjaan.',
    link: '/layanan/konseling'
  },
  {
    icon: 'growth',
    title: 'Training & Capacity Building',
    description: 'Program pelatihan soft skills dan pengembangan kapasitas SDM yang disesuaikan dengan kebutuhan spesifik organisasi.',
    link: '/layanan/training'
  },
  {
    icon: 'trail',
    title: 'Outbound & Team Building',
    description: 'Kegiatan outbound berbasis experiential learning untuk membangun kekompakan tim, kepemimpinan, serta kepercayaan diri.',
    link: '/layanan/outbound'
  }
]
</script>

<template>
  <DefaultLayout>
    <!-- Page Header -->
    <section class="relative overflow-hidden bg-primary-800 text-white py-16 sm:py-20">
      <div class="pointer-events-none absolute -top-16 -right-10 w-80 h-80 rounded-full bg-primary-700/50" aria-hidden="true"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold mb-4 leading-tight">Layanan Kami</h1>
        <p class="text-base sm:text-lg lg:text-xl text-primary-100 max-w-3xl mx-auto">
          Layanan kami dirancang untuk menjawab kebutuhan berbagai pemangku kepentingan: sekolah, organisasi, keluarga, dan CPMI.
        </p>
      </div>
    </section>

    <!-- Services Grid -->
    <section class="py-14 sm:py-16 lg:py-24 bg-paper">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <RouterLink
            v-for="(service, index) in services"
            :key="index"
            :to="service.link"
            class="group flex flex-col bg-white rounded-2xl p-6 lg:p-8 border border-paper-300 hover:border-primary-300 hover:shadow-lg transition-all hover:-translate-y-1"
          >
            <!-- top accent rule -->
            <span class="absolute inset-x-0 top-0 h-1 bg-primary-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-t-2xl"></span>
            <div class="w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center mb-4 lg:mb-5 bg-primary-100 text-primary-700 border border-primary-200 group-hover:bg-primary-700 group-hover:text-white transition-colors flex-shrink-0">
              <Icon :name="service.icon" class="w-6 h-6 lg:w-7 lg:h-7" />
            </div>
            <h3 class="text-lg lg:text-xl font-semibold text-ink mb-2 lg:mb-3">{{ service.title }}</h3>
            <p class="text-ink-soft leading-relaxed mb-4 lg:mb-5 text-sm lg:text-base flex-grow">{{ service.description }}</p>
            <div class="flex items-center text-accent-600 font-semibold text-sm lg:text-base">
              Pelajari Lebih Lanjut
              <svg class="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Also Available Section -->
    <section class="py-14 sm:py-16 lg:py-24 bg-white border-t border-paper-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-10">
          <h2 class="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight mb-3">
            Layanan Tambahan
          </h2>
          <p class="text-base text-ink-soft">Opsi khusus yang dapat disesuaikan dengan kebutuhan spesifik Anda</p>
        </div>
        <div class="grid md:grid-cols-2 gap-6 lg:gap-8">
          <div class="bg-paper rounded-2xl p-6 border border-paper-300 hover:border-primary-300 hover:shadow-md transition-all hover:-translate-y-1 group">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-3 bg-primary-100 text-primary-700 border border-primary-200 group-hover:bg-primary-700 group-hover:text-white transition-colors flex-shrink-0">
              <Icon name="assessment" class="w-5 h-5" />
            </div>
            <h3 class="font-semibold text-base lg:text-lg text-ink mb-2">Psikotes Online</h3>
            <p class="text-ink-soft text-sm lg:text-base leading-relaxed">Pelaksanaan tes dapat dijadwalkan setiap hari dengan sistem online yang aman dan terukur.</p>
          </div>
          <div class="bg-paper rounded-2xl p-6 border border-paper-300 hover:border-primary-300 hover:shadow-md transition-all hover:-translate-y-1 group md:mt-6">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-3 bg-primary-100 text-primary-700 border border-primary-200 group-hover:bg-primary-700 group-hover:text-white transition-colors flex-shrink-0">
              <Icon name="spark" class="w-5 h-5" />
            </div>
            <h3 class="font-semibold text-base lg:text-lg text-ink mb-2">Assessment Center</h3>
            <p class="text-ink-soft text-sm lg:text-base leading-relaxed">Menyiapkan calon pimpinan yang tangguh melalui simulasi dan observasi terstruktur.</p>
          </div>
          <div class="bg-paper rounded-2xl p-6 border border-paper-300 hover:border-accent-300 hover:shadow-md transition-all hover:-translate-y-1 group">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-3 bg-accent-100 text-accent-600 border border-accent-200 group-hover:bg-accent-500 group-hover:text-white transition-colors flex-shrink-0">
              <Icon name="layers" class="w-5 h-5" />
            </div>
            <h3 class="font-semibold text-base lg:text-lg text-ink mb-2">Dokumentasi Kegiatan</h3>
            <p class="text-ink-soft text-sm lg:text-base leading-relaxed">Dokumentasi lengkap dari berbagai aktivitas psikotes, pelatihan, dan pendampingan.</p>
          </div>
          <div class="bg-paper rounded-2xl p-6 border border-paper-300 hover:border-accent-300 hover:shadow-md transition-all hover:-translate-y-1 group md:mt-6">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center mb-3 bg-accent-100 text-accent-600 border border-accent-200 group-hover:bg-accent-500 group-hover:text-white transition-colors flex-shrink-0">
              <Icon name="compass" class="w-5 h-5" />
            </div>
            <h3 class="font-semibold text-base lg:text-lg text-ink mb-2">Paket Khusus Sekolah</h3>
            <p class="text-ink-soft text-sm lg:text-base leading-relaxed">Struktur paket psikotes klasikal yang dapat disesuaikan dengan kebutuhan sekolah.</p>
          </div>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>
