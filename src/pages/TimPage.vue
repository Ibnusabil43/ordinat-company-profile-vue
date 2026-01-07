<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'
import irmaPhoto from '@/assets/IrmaRosdiyantiPhotos/IrmaRosdiyanti.jpeg'

const teamMembers = [
  { name: 'Nazilatul F., S.Psi.', photo: new URL('@/assets/TeamPhotos/Nazilatul F., S.Psi..jpeg', import.meta.url).href },
  { name: 'Tanthie Eka, S.Psi.', photo: new URL('@/assets/TeamPhotos/Tanthie Eka, S.Psi..jpeg', import.meta.url).href },
  { name: 'Hamimah, S.Psi.', photo: new URL('@/assets/TeamPhotos/Hamimah, S.Psi..jpeg', import.meta.url).href },
  { name: 'Dimas A., S.Psi.', photo: null },
  { name: 'Noviyanto M., S.Psi.', photo: new URL('@/assets/TeamPhotos/Noviyanto M., S.Psi..jpeg', import.meta.url).href },
  { name: 'Julianto R., S.Psi.', photo: null },
  { name: 'Afrian A., S.Psi.', photo: new URL('@/assets/TeamPhotos/Afrian A., S.Psi..jpeg', import.meta.url).href },
  { name: 'Nisya N., S.Psi.', photo: new URL('@/assets/TeamPhotos/Nisya N., S.Psi..jpeg', import.meta.url).href }
]
</script>

<template>
  <DefaultLayout>
    <!-- Hero Header -->
    <section class="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-12 sm:py-16">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="flex items-center justify-center mb-6">
          <div class="w-14 h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
            <svg class="w-7 h-7 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Tim Psikolog & Fasilitator</h1>
        <p class="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
          Didukung Tenaga Profesional di Bidangnya
        </p>
      </div>
    </section>

    <!-- Lead Psychologist -->
    <section class="py-12 sm:py-16 lg:py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 lg:mb-12">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Psikolog Utama
          </h2>
        </div>

        <RouterLink 
          to="/tim/irma-rosdiyanti"
          class="block bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-6 sm:p-8 lg:p-12 text-white shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1"
        >
          <div class="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
            <img 
              :src="irmaPhoto" 
              alt="Irma Rosdiyanti, S.Psi., Psikolog" 
              class="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl object-cover flex-shrink-0 ring-4 ring-white/20"
            />
            <div class="flex-1 text-center md:text-left">
              <h3 class="text-2xl lg:text-3xl font-bold mb-2">Irma Rosdiyanti, S.Psi., Psikolog</h3>
              <p class="text-blue-100 text-base lg:text-lg mb-4">Psikolog Klinis</p>
              <p class="text-blue-50 leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base">
                Berpengalaman sebagai psikolog sejak 1997 dan saat ini bertugas sebagai Psikolog Klinis Madya di Lapas Narkotika Kelas IIA Cirebon. Memiliki Surat Izin Praktik Psikologi (SIPP) dan aktif sebagai anggota Ikatan Psikologi Klinis Indonesia.
              </p>
              <div class="flex items-center justify-center md:justify-start text-white font-medium text-sm lg:text-base">
                Lihat Profil Lengkap
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
    </section>

    <!-- Team Members -->
    <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 lg:mb-12">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Tim Pendukung
          </h2>
          <p class="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
            Selain psikolog utama, Ordinat Cakrawala didukung oleh tim psikolog dan asisten psikolog yang terbiasa menangani asesmen klasikal, kegiatan di sekolah, pelatihan organisasi, hingga program khusus CPMI.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <div 
            v-for="(member, index) in teamMembers"
            :key="index"
            class="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
          >
            <div v-if="member.photo" class="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-4 overflow-hidden rounded-full">
              <img :src="member.photo" :alt="member.name" class="w-full h-full object-cover" />
            </div>
            <div v-else class="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg lg:text-xl">
              {{ member.name.charAt(0) }}
            </div>
            <p class="font-semibold text-gray-900 text-sm lg:text-base">{{ member.name }}</p>
            <p class="text-xs lg:text-sm text-gray-600 mt-1">Psikolog / Asisten Psikolog</p>
          </div>
        </div>
      </div>
    </section>

    <!-- IT Staff Section -->
    <section class="py-12 sm:py-16 lg:py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 lg:mb-12">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            IT Staff & Sistem Informasi
          </h2>
          <p class="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
            Mendukung Transformasi Digital Layanan Psikologi
          </p>
        </div>

        <RouterLink 
          to="/tim/it-staff"
          class="block bg-gradient-to-br from-slate-50 to-blue-50/30 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
        >
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <div>
              <h3 class="text-xl lg:text-2xl font-bold text-gray-900">Tim IT Internal</h3>
              <p class="text-gray-600 text-sm lg:text-base">System Development & Technical Support</p>
            </div>
          </div>
          <p class="text-gray-700 leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base">
            Perkembangan layanan psikologi tidak lepas dari dukungan teknologi informasi. Kami memiliki tim IT internal yang memastikan proses digital berjalan aman, efisien, dan sesuai etika kerahasiaan data psikologis.
          </p>
          <div class="flex items-center text-blue-600 font-medium text-sm lg:text-base">
            Lihat Tim IT Lengkap
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </RouterLink>
      </div>
    </section>
  </DefaultLayout>
</template>
