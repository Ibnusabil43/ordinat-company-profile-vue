<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'

interface Member {
  name: string
  title: string
  bio: string
  photo: string | null
}

const members: Member[] = [
  {
    name: 'Zaidan Ibnusabil, S.Kom.',
    title: 'IT Staff – System & Platform Developer',
    bio: 'Bertanggung jawab dalam perancangan dan pengembangan sistem informasi asesmen psikologi, pengelolaan database hasil tes, serta integrasi layanan psikotes online agar mudah digunakan oleh sekolah, perusahaan, dan CPMI. Memiliki latar belakang rekayasa perangkat lunak dan pengalaman membangun aplikasi berbasis web dan mobile.',
    photo: new URL('@/assets/ITTeamPhotos/Zaidan Ibnusabil, S.Kom..jpg', import.meta.url).href
  },
  {
    name: 'Abdullah Iman, S.Kom.',
    title: 'IT Staff – Infrastructure & Technical Support',
    bio: 'Berperan dalam pengelolaan infrastruktur IT, keamanan data, dan memastikan proses pelaksanaan psikotes online maupun offline berjalan lancar. Mendukung tim psikolog dalam penyediaan perangkat, troubleshooting teknis, serta optimasi sistem yang digunakan klien.',
    photo: new URL('@/assets/ITTeamPhotos/Abdullah Iman, S.Kom..jpeg', import.meta.url).href
  },
  {
    name: 'Daffa A., S.Si.',
    title: 'IT Staff – Data & System Support',
    bio: 'Mendukung pengelolaan data dan sistem informasi asesmen psikologi. Membantu dalam pengolahan hasil tes, administrasi database, serta koordinasi teknis untuk memastikan kelancaran operasional sistem psikotes online dan offline.',
    photo: new URL('@/assets/ITTeamPhotos/Daffa A., S.Si..jpeg', import.meta.url).href
  }
]

const contributions = [
  'Pengembangan sistem psikotes online yang aman dan user-friendly',
  'Automasi pengolahan data hasil tes dan pembuatan laporan',
  'Dukungan teknis pelaksanaan asesmen berskala besar',
  'Pemeliharaan infrastruktur IT untuk kegiatan konseling dan training',
  'Penguatan keamanan dan kerahasiaan data psikologis klien'
]

const getInitial = (name: string): string => {
  return name.charAt(0).toUpperCase()
}
</script>

<template>
  <DefaultLayout>
    <!-- Hero Header -->
    <section class="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-12 sm:py-16">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4 mb-4 lg:mb-6">
          <div class="w-14 h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
            <svg class="w-7 h-7 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold">Tim IT & Sistem Informasi</h1>
        </div>
        <p class="text-lg sm:text-xl text-blue-100 mb-4 lg:mb-6">
          Mengintegrasikan Teknologi dalam Layanan Psikologi
        </p>
        <p class="text-base lg:text-lg text-blue-50 leading-relaxed">
          Tim IT Ordinat Cakrawala berperan penting dalam menyediakan infrastruktur teknologi yang mendukung kelancaran pelaksanaan psikotes, konseling online, hingga pelaporan hasil asesmen yang akurat dan aman. Dengan keahlian di bidang sistem informasi, pengembangan aplikasi, dan pengelolaan data, kami memastikan setiap layanan psikologi tersampaikan secara efisien dan profesional.
        </p>
      </div>
    </section>

    <!-- Team Members -->
    <section class="py-12 sm:py-16 lg:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 lg:mb-12">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Tim Kami
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-6 lg:gap-8">
          <div v-for="(member, index) in members" :key="index" class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 lg:p-8 shadow-lg">
            <div v-if="member.photo" class="w-24 h-24 lg:w-28 lg:h-28 mx-auto mb-4 lg:mb-6 overflow-hidden rounded-full">
              <img :src="member.photo" :alt="member.name" class="w-full h-full object-cover object-[center_20%]" />
            </div>
            <div v-else class="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-6">
              <span class="text-white text-2xl lg:text-3xl font-bold">{{ getInitial(member.name) }}</span>
            </div>
            <h3 class="text-lg lg:text-xl font-bold text-gray-900 text-center mb-2">{{ member.name }}</h3>
            <p class="text-sm text-blue-600 font-medium text-center mb-4">{{ member.title }}</p>
            <p class="text-xs lg:text-sm text-gray-700 leading-relaxed text-center">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contributions -->
    <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-purple-50/30">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12">
          <h2 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 text-center">
            Kontribusi Tim IT
          </h2>

          <div class="grid gap-4 lg:gap-6 max-w-4xl mx-auto">
            <div v-for="(contribution, index) in contributions" :key="index" class="flex items-center gap-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-4 lg:p-6">
              <div class="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 lg:w-6 lg:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p class="text-sm lg:text-base text-gray-700 leading-relaxed">{{ contribution }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack -->
    <section class="py-12 sm:py-16 lg:py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 lg:mb-12">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Teknologi yang Kami Gunakan
          </h2>
        </div>

        <div class="grid md:grid-cols-3 gap-6 lg:gap-8">
          <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 lg:p-8 text-center">
            <div class="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-7 h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2 text-base lg:text-lg">Platform Web</h3>
            <p class="text-xs lg:text-sm text-gray-700">Aplikasi berbasis web untuk psikotes online, manajemen data, dan pelaporan.</p>
          </div>

          <div class="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 lg:p-8 text-center">
            <div class="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-7 h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2 text-base lg:text-lg">Database Aman</h3>
            <p class="text-xs lg:text-sm text-gray-700">Pengelolaan data psikologis dengan sistem keamanan dan enkripsi tingkat tinggi.</p>
          </div>

          <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 lg:p-8 text-center">
            <div class="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg class="w-7 h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="font-bold text-gray-900 mb-2 text-base lg:text-lg">Mobile Responsive</h3>
            <p class="text-xs lg:text-sm text-gray-700">Sistem yang dapat diakses melalui desktop, tablet, maupun smartphone.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">Butuh Dukungan Teknis?</h2>
        <p class="text-base sm:text-lg text-blue-100 mb-6 lg:mb-8 max-w-3xl mx-auto">
          Untuk pertanyaan teknis terkait sistem psikotes online atau layanan IT lainnya, silakan hubungi kami. Tim IT kami siap membantu Anda.
        </p>
        <RouterLink
          to="/kontak"
          class="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group"
        >
          Hubungi Tim IT
          <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </RouterLink>
      </div>
    </section>
  </DefaultLayout>
</template>
