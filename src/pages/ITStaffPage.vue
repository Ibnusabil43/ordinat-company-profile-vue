<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';

interface Member {
  name: string;
  title: string;
  bio: string;
  photo: string | null;
}

const members: Member[] = [
  {
    name: 'Zaidan Ibnusabil, S.Kom.',
    title: 'IT Staff – System & Platform Developer',
    bio: 'Bertanggung jawab dalam perancangan dan pengembangan sistem informasi asesmen psikologi, pengelolaan database hasil tes, serta integrasi layanan psikotes online agar mudah digunakan oleh sekolah, perusahaan, dan CPMI. Memiliki latar belakang rekayasa perangkat lunak dan pengalaman membangun aplikasi berbasis web dan mobile.',
    photo: new URL('@/assets/ITTeamPhotos/Zaidan Ibnusabil, S.Kom..jpg', import.meta.url).href,
  },
  {
    name: 'Abdullah Iman, S.Kom.',
    title: 'IT Staff – Infrastructure & Technical Support',
    bio: 'Berperan dalam pengelolaan infrastruktur IT, keamanan data, dan memastikan proses pelaksanaan psikotes online maupun offline berjalan lancar. Mendukung tim psikolog dalam penyediaan perangkat, troubleshooting teknis, serta optimasi sistem yang digunakan klien.',
    photo: new URL('@/assets/ITTeamPhotos/Abdullah Iman, S.Kom..jpeg', import.meta.url).href,
  },
  {
    name: 'Daffa A., S.Si.',
    title: 'IT Staff – Data & System Support',
    bio: 'Mendukung pengelolaan data dan sistem informasi asesmen psikologi. Membantu dalam pengolahan hasil tes, administrasi database, serta koordinasi teknis untuk memastikan kelancaran operasional sistem psikotes online dan offline.',
    photo: new URL('@/assets/ITTeamPhotos/Daffa A., S.Si..jpeg', import.meta.url).href,
  },
];

const contributions = [
  'Pengembangan sistem psikotes online yang aman dan user-friendly',
  'Automasi pengolahan data hasil tes dan pembuatan laporan',
  'Dukungan teknis pelaksanaan asesmen berskala besar',
  'Pemeliharaan infrastruktur IT untuk kegiatan konseling dan training',
  'Penguatan keamanan dan kerahasiaan data psikologis klien',
];

const getInitial = (name: string): string => {
  return name.charAt(0).toUpperCase();
};
</script>

<template>
  <DefaultLayout>
    <!-- Hero Header -->
    <section class="relative overflow-hidden bg-primary-800 text-white py-16 sm:py-20">
      <div class="pointer-events-none absolute -top-16 -right-10 w-80 h-80 rounded-full bg-primary-700/50" aria-hidden="true"></div>
      <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4 mb-4 lg:mb-6">
          <div class="w-14 h-14 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
            <Icon name="device" class="w-7 h-7 lg:w-8 lg:h-8" />
          </div>
          <h1 class="font-display text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold leading-tight">Tim IT & Sistem Informasi</h1>
        </div>
        <p class="text-lg sm:text-xl text-accent-300 mb-4 lg:mb-6 font-medium">Mengintegrasikan Teknologi dalam Layanan Psikologi</p>
        <p class="text-base lg:text-lg text-primary-100 leading-relaxed">
          Tim IT Ordinat Cakrawala berperan penting dalam menyediakan infrastruktur teknologi yang mendukung kelancaran pelaksanaan psikotes, konseling online, hingga pelaporan hasil asesmen yang akurat dan aman. Dengan keahlian di bidang
          sistem informasi, pengembangan aplikasi, dan pengelolaan data, kami memastikan setiap layanan psikologi tersampaikan secara efisien dan profesional.
        </p>
      </div>
    </section>

    <!-- Team Members -->
    <section class="py-14 sm:py-16 lg:py-24 bg-paper">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-10 lg:mb-12">
          <span class="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Tim Kami</span>
          <h2 class="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight mt-3">Tim Kami</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-5 lg:gap-6">
          <div v-for="(member, index) in members" :key="index" class="bg-white rounded-2xl p-6 lg:p-8 border border-paper-300 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
            <div v-if="member.photo" class="w-24 h-24 lg:w-28 lg:h-28 mx-auto mb-4 lg:mb-6 overflow-hidden rounded-full ring-4 ring-primary-50">
              <img :src="member.photo" :alt="member.name" class="w-full h-full object-cover object-[center_20%]" />
            </div>
            <div v-else class="w-16 h-16 lg:w-20 lg:h-20 bg-primary-700 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
              <span class="text-white font-display text-2xl lg:text-3xl font-semibold">{{ getInitial(member.name) }}</span>
            </div>
            <h3 class="text-lg lg:text-xl font-semibold text-ink text-center mb-2">{{ member.name }}</h3>
            <p class="text-sm text-primary-700 font-medium text-center mb-4">{{ member.title }}</p>
            <p class="text-xs lg:text-sm text-ink-soft leading-relaxed text-center">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contributions -->
    <section class="py-14 sm:py-16 lg:py-24 bg-primary-50/40 border-y border-paper-300">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-3xl border border-paper-300 p-6 sm:p-8 lg:p-12">
          <h2 class="font-display text-2xl lg:text-3xl font-semibold text-ink mb-8 text-center">Kontribusi Tim IT</h2>

          <div class="grid gap-3 lg:gap-4 max-w-4xl mx-auto">
            <div
              v-for="(contribution, index) in contributions"
              :key="index"
              class="flex items-center gap-4 bg-paper rounded-xl p-4 lg:p-5 border border-paper-300 hover:border-primary-300 transition-colors"
            >
              <div class="w-9 h-9 lg:w-10 lg:h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-4 h-4 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p class="text-sm lg:text-base text-ink-soft leading-relaxed">{{ contribution }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack -->
    <section class="py-14 sm:py-16 lg:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-10 lg:mb-12">
          <span class="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Stack</span>
          <h2 class="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight mt-3">Teknologi yang Kami Gunakan</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-5 lg:gap-6">
          <div class="bg-paper rounded-2xl p-6 lg:p-8 text-center border border-paper-300 hover:border-primary-300 hover:shadow-md transition-all duration-300">
            <div class="w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center mx-auto mb-4 bg-primary-100 text-primary-700 border border-primary-200">
              <Icon name="device" class="w-6 h-6 lg:w-7 lg:h-7" />
            </div>
            <h3 class="font-semibold text-ink mb-2 text-base lg:text-lg">Platform Web</h3>
            <p class="text-xs lg:text-sm text-ink-soft">Aplikasi berbasis web untuk psikotes online, manajemen data, dan pelaporan.</p>
          </div>

          <div class="bg-paper rounded-2xl p-6 lg:p-8 text-center border border-paper-300 hover:border-accent-300 hover:shadow-md transition-all duration-300">
            <div class="w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center mx-auto mb-4 bg-accent-100 text-accent-600 border border-accent-200">
              <Icon name="shield" class="w-6 h-6 lg:w-7 lg:h-7" />
            </div>
            <h3 class="font-semibold text-ink mb-2 text-base lg:text-lg">Database Aman</h3>
            <p class="text-xs lg:text-sm text-ink-soft">Pengelolaan data psikologis dengan sistem keamanan dan enkripsi tingkat tinggi.</p>
          </div>

          <div class="bg-paper rounded-2xl p-6 lg:p-8 text-center border border-paper-300 hover:border-primary-300 hover:shadow-md transition-all duration-300">
            <div class="w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center mx-auto mb-4 bg-primary-100 text-primary-700 border border-primary-200">
              <Icon name="mobile" class="w-6 h-6 lg:w-7 lg:h-7" />
            </div>
            <h3 class="font-semibold text-ink mb-2 text-base lg:text-lg">Mobile Responsive</h3>
            <p class="text-xs lg:text-sm text-ink-soft">Sistem yang dapat diakses melalui desktop, tablet, maupun smartphone.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative overflow-hidden bg-primary-800 text-white py-14 sm:py-16 lg:py-20">
      <div class="pointer-events-none absolute -bottom-20 -right-10 w-80 h-80 rounded-full bg-primary-700/50" aria-hidden="true"></div>
      <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 lg:mb-6">Butuh Dukungan Teknis?</h2>
        <p class="text-base sm:text-lg text-primary-100 mb-6 lg:mb-8 max-w-3xl mx-auto">Untuk pertanyaan teknis terkait sistem psikotes online atau layanan IT lainnya, silakan hubungi kami. Tim IT kami siap membantu Anda.</p>
        <RouterLink to="/kontak" class="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-accent-500 text-white font-semibold rounded-full hover:bg-accent-400 transition-all shadow-lg active:scale-[0.98] group">
          Hubungi Tim IT
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </RouterLink>
      </div>
    </section>
  </DefaultLayout>
</template>
