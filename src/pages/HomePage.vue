<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import Hero from '@/components/Hero.vue'
import dimensiLogo from '@/assets/521648d68d8dab5412cee0cc9fcacf2babe5557f.png'

interface FeatureCard {
  icon: string
  title: string
  description: string
}

interface QuickLink {
  title: string
  description: string
  link: string
  color: string
  icon?: string
  customIcon?: string
}

const whyChooseUs: FeatureCard[] = [
  {
    icon: 'users',
    title: 'Psikolog Berpengalaman',
    description: 'Tim psikolog profesional dengan pengalaman sejak 1997'
  },
  {
    icon: 'briefcase',
    title: 'Layanan Komprehensif',
    description: 'Dari psikotes, konseling, hingga training & capacity building'
  },
  {
    icon: 'check',
    title: 'Standar Profesional',
    description: 'Menggunakan alat tes yang mengacu pada standar dan norma HIMPSI'
  }
]

const quickLinks: QuickLink[] = [
  {
    title: 'Profil Perusahaan',
    description: 'Pelajari lebih lanjut tentang Ordinat Cakrawala, visi, misi, dan nilai-nilai perusahaan kami.',
    link: '/profil',
    color: 'from-blue-600 to-blue-700',
    icon: 'building'
  },
  {
    title: 'Layanan',
    description: 'Jelajahi layanan psikologi kami yang dirancang untuk sekolah, organisasi, dan individu.',
    link: '/layanan',
    color: 'from-purple-600 to-purple-700',
    icon: 'briefcase'
  },
  {
    title: 'Unit CPMI',
    description: 'Layanan khusus psikotes bagi Calon Pekerja Migran Indonesia melalui Dimensi Cakrawala.',
    link: '/cpmi',
    color: 'from-blue-500 to-purple-500',
    customIcon: dimensiLogo
  },
  {
    title: 'Tim Psikolog',
    description: 'Kenali tim psikolog dan tenaga profesional yang mendukung layanan kami.',
    link: '/tim',
    color: 'from-purple-500 to-blue-500',
    icon: 'graduation'
  }
]

const getIconComponent = (iconName: string) => {
  const icons: Record<string, string> = {
    users: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z',
    briefcase: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    check: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
    building: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    graduation: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z'
  }
  return icons[iconName] || icons.check
}
</script>

<template>
  <DefaultLayout>
    <!-- Hero Section -->
    <Hero />

    <!-- Why Choose Us -->
    <section class="py-12 sm:py-16 lg:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 lg:mb-12">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Mengapa Memilih Kami
          </h2>
          <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Ordinat Cakrawala adalah biro konsultasi psikologi yang mendampingi sekolah, organisasi, dan calon pekerja migran Indonesia dalam mengenali potensi, mengelola tantangan, dan mengembangkan kualitas SDM secara menyeluruh.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          <div
            v-for="(item, index) in whyChooseUs"
            :key="index"
            class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 lg:p-8 text-center shadow-lg hover:shadow-xl transition-all"
          >
            <div class="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
              <svg class="w-7 h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="getIconComponent(item.icon)" />
              </svg>
            </div>
            <h3 class="text-lg lg:text-xl font-bold text-gray-900 mb-2 lg:mb-3">{{ item.title }}</h3>
            <p class="text-sm lg:text-base text-gray-700 leading-relaxed">{{ item.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Links -->
    <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 lg:mb-12">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Jelajahi Lebih Lanjut
          </h2>
          <p class="text-base sm:text-lg text-gray-600">
            Temukan informasi lengkap tentang layanan dan tim profesional kami
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <RouterLink
            v-for="(item, index) in quickLinks"
            :key="index"
            :to="item.link"
            class="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group flex flex-col"
          >
            <div v-if="item.customIcon" class="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-xl flex items-center justify-center mb-4 p-1 group-hover:scale-110 transition-transform border-2 border-purple-200 flex-shrink-0">
              <img :src="item.customIcon" alt="Dimensi Cakrawala Logo" class="w-full h-full object-contain" />
            </div>
            <div v-else :class="`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform flex-shrink-0`">
              <svg class="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="getIconComponent(item.icon || '')" />
              </svg>
            </div>
            <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-2">{{ item.title }}</h3>
            <p class="text-gray-600 text-xs sm:text-sm mb-4 leading-relaxed flex-grow">{{ item.description }}</p>
            <div class="flex items-center text-blue-600 font-medium text-xs sm:text-sm">
              Selengkapnya
              <svg class="w-4 h-4 ml-1 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
          Siap Berkolaborasi Bersama Kami?
        </h2>
        <p class="text-base sm:text-lg text-blue-100 mb-6 lg:mb-8 max-w-3xl mx-auto">
          Hubungi kami untuk konsultasi lebih lanjut mengenai psikotes sekolah, asesmen karyawan, program CPMI, maupun kebutuhan konsultasi lainnya.
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
