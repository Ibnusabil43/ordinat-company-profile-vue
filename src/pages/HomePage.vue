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
    icon: 'building'
  },
  {
    title: 'Layanan',
    description: 'Jelajahi layanan psikologi kami yang dirancang untuk sekolah, organisasi, dan individu.',
    link: '/layanan',
    icon: 'briefcase'
  },
  {
    title: 'Unit CPMI',
    description: 'Layanan khusus psikotes bagi Calon Pekerja Migran Indonesia melalui Dimensi Cakrawala.',
    link: '/cpmi',
    customIcon: dimensiLogo
  },
  {
    title: 'Tim Psikolog',
    description: 'Kenali tim psikolog dan tenaga profesional yang mendukung layanan kami.',
    link: '/tim',
    icon: 'education'
  }
]
</script>

<template>
  <DefaultLayout>
    <!-- Hero Section -->
    <Hero />

    <!-- Why Choose Us -->
    <section class="py-14 sm:py-16 lg:py-24 bg-paper">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <!-- Left: heading + intro -->
          <div class="lg:col-span-5">
            <span class="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Mengapa Kami</span>
            <h2 class="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight mt-3 mb-5">
              Mengapa Memilih Kami
            </h2>
            <p class="text-base lg:text-lg text-ink-soft leading-relaxed">
              Ordinat Cakrawala adalah biro konsultasi psikologi yang mendampingi sekolah, organisasi, dan calon pekerja migran Indonesia dalam mengenali potensi, mengelola tantangan, dan mengembangkan kualitas SDM secara menyeluruh.
            </p>
          </div>

          <!-- Right: numbered editorial list -->
          <div class="lg:col-span-7">
            <div
              v-for="(item, index) in whyChooseUs"
              :key="index"
              class="group flex gap-5 sm:gap-7 py-6 border-t border-paper-300 first:border-t-0 first:pt-0 last:pb-0"
            >
              <div class="font-display text-2xl sm:text-3xl font-semibold text-primary-300 group-hover:text-accent-500 transition-colors w-12 flex-shrink-0 tabular-nums">
                {{ String(index + 1).padStart(2, '0') }}
              </div>
              <div>
                <h3 class="text-lg lg:text-xl font-semibold text-ink mb-1.5">{{ item.title }}</h3>
                <p class="text-sm lg:text-base text-ink-soft leading-relaxed">{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Quick Links -->
    <section class="py-14 sm:py-16 lg:py-24 bg-primary-50/40 border-y border-paper-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-10 lg:mb-14">
          <span class="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Navigasi</span>
          <h2 class="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight mt-3 mb-4">
            Jelajahi Lebih Lanjut
          </h2>
          <p class="text-base sm:text-lg text-ink-soft">
            Temukan informasi lengkap tentang layanan dan tim profesional kami
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <RouterLink
            v-for="(item, index) in quickLinks"
            :key="index"
            :to="item.link"
            class="relative bg-white rounded-2xl p-6 border border-paper-300 hover:border-primary-300 hover:shadow-lg transition-all hover:-translate-y-1 group flex flex-col overflow-hidden"
          >
            <!-- top accent rule -->
            <span class="absolute inset-x-0 top-0 h-1 bg-primary-600 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>

            <div v-if="item.customIcon" class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-5 p-1.5 bg-accent-50 border border-accent-100 flex-shrink-0">
              <img :src="item.customIcon" alt="Dimensi Cakrawala Logo" class="w-full h-full object-contain" />
            </div>
            <div v-else class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-5 bg-primary-100 text-primary-700 border border-primary-200 group-hover:bg-primary-700 group-hover:text-white transition-colors flex-shrink-0">
              <Icon :name="item.icon || 'target'" class="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h3 class="text-base sm:text-lg font-semibold text-ink mb-2">{{ item.title }}</h3>
            <p class="text-ink-soft text-xs sm:text-sm mb-5 leading-relaxed flex-grow">{{ item.description }}</p>
            <div class="flex items-center text-accent-600 font-semibold text-xs sm:text-sm">
              Selengkapnya
              <svg class="w-4 h-4 ml-1 group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="relative overflow-hidden bg-primary-800 text-white">
      <!-- subtle organic accent, not a glow blob -->
      <div class="pointer-events-none absolute -bottom-24 -right-16 w-96 h-96 rounded-full bg-primary-700/50" aria-hidden="true"></div>
      <div class="pointer-events-none absolute -top-20 -left-10 w-72 h-72 rounded-full bg-accent-500/10" aria-hidden="true"></div>

      <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24 text-center">
        <h2 class="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold mb-5 lg:mb-6 leading-tight">
          Siap Berkolaborasi Bersama Kami?
        </h2>
        <p class="text-base sm:text-lg text-primary-100 mb-8 lg:mb-10 max-w-3xl mx-auto leading-relaxed">
          Hubungi kami untuk konsultasi lebih lanjut mengenai psikotes sekolah, asesmen karyawan, program CPMI, maupun kebutuhan konsultasi lainnya.
        </p>
        <RouterLink
          to="/kontak"
          class="inline-flex items-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 bg-accent-500 text-white font-semibold rounded-full hover:bg-accent-400 transition-all shadow-lg shadow-accent-900/20 hover:shadow-xl active:scale-[0.98] group"
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
