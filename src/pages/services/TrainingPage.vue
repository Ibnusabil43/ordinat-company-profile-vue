<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';

const topics = ['Pengembangan kepemimpinan dan manajerial.', 'Komunikasi efektif dan kerja sama tim.', 'Pelatihan motivasi dan budaya kerja positif.', 'Program penguatan service excellence dan orientasi pelanggan.'];

interface Program {
  number: number;
  variant: 'primary' | 'accent';
  title: string;
  description: string;
}

const programs: Program[] = [
  {
    number: 1,
    variant: 'primary',
    title: 'Leadership Development',
    description: 'Mengembangkan kompetensi kepemimpinan yang adaptif, mampu mengarahkan tim, mengambil keputusan strategis, dan membangun budaya kerja yang sehat.',
  },
  {
    number: 2,
    variant: 'accent',
    title: 'Komunikasi Efektif',
    description: 'Meningkatkan keterampilan komunikasi interpersonal, public speaking, dan kemampuan memberikan feedback yang konstruktif di lingkungan kerja.',
  },
  {
    number: 3,
    variant: 'primary',
    title: 'Team Building',
    description: 'Membangun sinergi tim melalui kegiatan interaktif yang menekankan kolaborasi, kepercayaan, dan pencapaian tujuan bersama.',
  },
  {
    number: 4,
    variant: 'accent',
    title: 'Motivasi & Produktivitas',
    description: 'Menumbuhkan motivasi internal karyawan agar bekerja lebih produktif, proaktif, dan memiliki semangat berprestasi yang tinggi.',
  },
  {
    number: 5,
    variant: 'primary',
    title: 'Service Excellence',
    description: 'Membangun orientasi pelayanan prima kepada pelanggan internal maupun eksternal, dengan penekanan pada empati, responsivitas, dan profesionalisme.',
  },
  {
    number: 6,
    variant: 'accent',
    title: 'Manajemen Stres',
    description: 'Membekali karyawan dengan teknik mengelola stres kerja, menjaga keseimbangan hidup, dan mencegah burnout di lingkungan yang dinamis.',
  },
];
</script>

<template>
  <DefaultLayout>
    <!-- Hero Header -->
    <section class="relative overflow-hidden bg-primary-800 text-white py-16 sm:py-20">
      <div class="pointer-events-none absolute -top-16 -right-10 w-80 h-80 rounded-full bg-primary-700/50" aria-hidden="true"></div>
      <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4 mb-4 lg:mb-6">
          <div class="w-14 h-14 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
            <Icon name="growth" class="w-7 h-7 lg:w-8 lg:h-8" />
          </div>
          <h1 class="font-display text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold leading-tight">Pelatihan & Pengembangan SDM</h1>
        </div>
        <p class="text-lg sm:text-xl text-accent-300 mb-4 lg:mb-6 font-medium">Membangun Kompetensi dan Karakter untuk Kinerja Optimal</p>
        <p class="text-base lg:text-lg text-primary-100 leading-relaxed">
          Program pelatihan dari Ordinat Cakrawala dirancang untuk meningkatkan kemampuan teknis maupun soft skills karyawan sesuai dengan kebutuhan organisasi. Dengan pendekatan yang interaktif, aplikatif, dan berbasis kompetensi, kami
          membantu peserta memahami konsep secara mendalam dan menerapkannya langsung di tempat kerja.
        </p>
      </div>
    </section>

    <!-- Why Training Section -->
    <section class="py-14 sm:py-16 lg:py-24 bg-paper">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-10 lg:mb-12">
          <span class="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Mengapa Penting</span>
          <h2 class="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight mt-3 mb-4">Mengapa Pelatihan SDM Penting?</h2>
          <p class="text-base lg:text-lg text-ink-soft">
            Di era yang terus berkembang, investasi pada pengembangan karyawan adalah kunci keberhasilan jangka panjang organisasi. Pelatihan yang tepat akan meningkatkan produktivitas, menurunkan turnover, dan menciptakan budaya kerja yang
            positif.
          </p>
        </div>

        <div class="bg-white rounded-3xl border border-paper-300 p-6 sm:p-8 lg:p-12">
          <h3 class="text-lg lg:text-xl font-semibold text-ink mb-6">Fokus Program Pelatihan Kami</h3>
          <div class="grid sm:grid-cols-2 gap-4">
            <div v-for="(topic, index) in topics" :key="index" class="flex items-start gap-3">
              <span class="mt-0.5 flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 flex items-center justify-center">
                <svg class="w-3.5 h-3.5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span class="text-sm lg:text-base text-ink-soft">{{ topic }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Training Programs -->
    <section class="py-14 sm:py-16 lg:py-24 bg-primary-50/40 border-y border-paper-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-10 lg:mb-12">
          <span class="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Program</span>
          <h2 class="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight mt-3">Program Pelatihan Unggulan</h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <div
            v-for="program in programs"
            :key="program.number"
            :class="[
              'rounded-2xl p-6 lg:p-8 relative overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-white',
              program.variant === 'primary' ? 'bg-primary-700' : 'bg-accent-500'
            ]"
          >
            <div class="absolute top-4 right-4 w-12 h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center font-display text-xl lg:text-2xl font-semibold">
              {{ program.number }}
            </div>
            <h3 class="text-lg lg:text-xl font-semibold mb-4 pr-16">{{ program.title }}</h3>
            <p class="text-sm lg:text-base text-white/90 leading-relaxed">{{ program.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Methodology -->
    <section class="py-14 sm:py-16 lg:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-10 lg:mb-12">
          <span class="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Cara Kerja</span>
          <h2 class="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight mt-3">Metode Pelatihan</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-5 lg:gap-6">
          <div class="bg-paper rounded-xl p-6 lg:p-8 text-center border border-paper-300 hover:border-primary-300 hover:shadow-md transition-all duration-300">
            <div class="font-display text-3xl font-semibold text-primary-300 mb-4">01</div>
            <h3 class="font-semibold text-ink mb-2 text-base lg:text-lg">Presentasi & Diskusi</h3>
            <p class="text-xs lg:text-sm text-ink-soft">Penyampaian materi secara interaktif dengan diskusi kasus nyata.</p>
          </div>

          <div class="bg-paper rounded-xl p-6 lg:p-8 text-center border border-paper-300 hover:border-primary-300 hover:shadow-md transition-all duration-300">
            <div class="font-display text-3xl font-semibold text-primary-300 mb-4">02</div>
            <h3 class="font-semibold text-ink mb-2 text-base lg:text-lg">Role Play & Simulasi</h3>
            <p class="text-xs lg:text-sm text-ink-soft">Latihan praktis melalui simulasi situasi kerja yang relevan.</p>
          </div>

          <div class="bg-paper rounded-xl p-6 lg:p-8 text-center border border-paper-300 hover:border-primary-300 hover:shadow-md transition-all duration-300">
            <div class="font-display text-3xl font-semibold text-primary-300 mb-4">03</div>
            <h3 class="font-semibold text-ink mb-2 text-base lg:text-lg">Evaluasi & Feedback</h3>
            <p class="text-xs lg:text-sm text-ink-soft">Pengukuran pemahaman dan pemberian umpan balik untuk perbaikan.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative overflow-hidden bg-primary-800 text-white py-14 sm:py-16 lg:py-20">
      <div class="pointer-events-none absolute -bottom-20 -right-10 w-80 h-80 rounded-full bg-primary-700/50" aria-hidden="true"></div>
      <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 lg:mb-6">Siap Tingkatkan Kompetensi Tim Anda?</h2>
        <p class="text-base sm:text-lg text-primary-100 mb-6 lg:mb-8 max-w-3xl mx-auto">
          Hubungi kami untuk merancang program pelatihan yang sesuai dengan kebutuhan organisasi Anda. Investasi pada SDM adalah investasi untuk masa depan perusahaan.
        </p>
        <RouterLink to="/kontak" class="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-accent-500 text-white font-semibold rounded-full hover:bg-accent-400 transition-all shadow-lg active:scale-[0.98] group">
          Konsultasi Program Training
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </RouterLink>
      </div>
    </section>
  </DefaultLayout>
</template>
