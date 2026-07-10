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
    <section class="relative overflow-hidden bg-primary-800 text-white py-16 sm:py-20">
      <div class="pointer-events-none absolute -top-16 -right-10 w-80 h-80 rounded-full bg-primary-700/50" aria-hidden="true"></div>
      <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div class="flex items-center justify-center mb-6">
          <div class="w-14 h-14 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
            <Icon name="people" class="w-7 h-7 lg:w-8 lg:h-8" />
          </div>
        </div>
        <h1 class="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold mb-4 leading-tight">Tim Psikolog & Fasilitator</h1>
        <p class="text-lg sm:text-xl text-primary-100 max-w-3xl mx-auto">
          Didukung Tenaga Profesional di Bidangnya
        </p>
      </div>
    </section>

    <!-- Lead Psychologist -->
    <section class="py-14 sm:py-16 lg:py-24 bg-paper">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-10 lg:mb-12">
          <span class="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Pimpinan</span>
          <h2 class="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight mt-3">
            Psikolog Utama
          </h2>
        </div>

        <RouterLink
          to="/tim/irma-rosdiyanti"
          class="group relative block bg-primary-800 rounded-3xl p-6 sm:p-8 lg:p-12 text-white overflow-hidden hover:shadow-xl transition-all"
        >
          <div class="pointer-events-none absolute -bottom-16 -right-10 w-64 h-64 rounded-full bg-primary-700/50" aria-hidden="true"></div>
          <div class="relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
            <img
              :src="irmaPhoto"
              alt="Irma Rosdiyanti, S.Psi., Psikolog"
              class="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl object-cover flex-shrink-0 ring-4 ring-white/10"
            />
            <div class="flex-1 text-center md:text-left">
              <h3 class="font-display text-2xl lg:text-3xl font-semibold mb-2">Irma Rosdiyanti, S.Psi., Psikolog</h3>
              <p class="text-accent-300 text-base lg:text-lg mb-4 font-medium">Psikolog Klinis</p>
              <p class="text-primary-100 leading-relaxed mb-5 lg:mb-6 text-sm lg:text-base">
                Berpengalaman sebagai psikolog sejak 1997 dan saat ini bertugas sebagai Psikolog Klinis Madya di Lapas Narkotika Kelas IIA Cirebon. Memiliki Surat Izin Praktik Psikologi (SIPP) dan aktif sebagai anggota Ikatan Psikologi Klinis Indonesia.
              </p>
              <div class="flex items-center justify-center md:justify-start text-white font-semibold text-sm lg:text-base">
                Lihat Profil Lengkap
                <svg class="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div>
            </div>
          </div>
        </RouterLink>
      </div>
    </section>

    <!-- Team Members -->
    <section class="py-14 sm:py-16 lg:py-24 bg-primary-50/40 border-y border-paper-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-10 lg:mb-12">
          <span class="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Kolaborasi</span>
          <h2 class="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight mt-3 mb-4">
            Tim Pendukung
          </h2>
          <p class="text-base lg:text-lg text-ink-soft">
            Selain psikolog utama, Ordinat Cakrawala didukung oleh tim psikolog dan asisten psikolog yang terbiasa menangani asesmen klasikal, kegiatan di sekolah, pelatihan organisasi, hingga program khusus CPMI.
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          <div
            v-for="(member, index) in teamMembers"
            :key="index"
            class="bg-white rounded-2xl p-6 text-center border border-paper-300 hover:border-primary-300 hover:shadow-md transition-all"
          >
            <div v-if="member.photo" class="w-20 h-20 lg:w-24 lg:h-24 mx-auto mb-4 overflow-hidden rounded-full ring-4 ring-primary-50">
              <img :src="member.photo" :alt="member.name" class="w-full h-full object-cover" />
            </div>
            <div v-else class="w-20 h-20 lg:w-24 lg:h-24 bg-primary-700 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-display font-semibold text-lg lg:text-xl">
              {{ member.name.charAt(0) }}
            </div>
            <p class="font-semibold text-ink text-sm lg:text-base">{{ member.name }}</p>
            <p class="text-xs lg:text-sm text-ink-soft mt-1">Psikolog / Asisten Psikolog</p>
          </div>
        </div>
      </div>
    </section>

    <!-- IT Staff Section -->
    <section class="py-14 sm:py-16 lg:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-10 lg:mb-12">
          <span class="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Teknologi</span>
          <h2 class="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight mt-3 mb-4">
            IT Staff & Sistem Informasi
          </h2>
          <p class="text-base lg:text-lg text-ink-soft">
            Mendukung Transformasi Digital Layanan Psikologi
          </p>
        </div>

        <RouterLink
          to="/tim/it-staff"
          class="group block bg-paper rounded-3xl p-6 sm:p-8 lg:p-10 border border-paper-300 hover:border-primary-300 hover:shadow-lg transition-all"
        >
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center flex-shrink-0 bg-primary-100 text-primary-700 border border-primary-200 group-hover:bg-primary-700 group-hover:text-white transition-colors">
              <Icon name="device" class="w-6 h-6 lg:w-7 lg:h-7" />
            </div>
            <div>
              <h3 class="text-xl lg:text-2xl font-semibold text-ink">Tim IT Internal</h3>
              <p class="text-ink-soft text-sm lg:text-base">System Development & Technical Support</p>
            </div>
          </div>
          <p class="text-ink-soft leading-relaxed mb-5 lg:mb-6 text-sm lg:text-base">
            Perkembangan layanan psikologi tidak lepas dari dukungan teknologi informasi. Kami memiliki tim IT internal yang memastikan proses digital berjalan aman, efisien, dan sesuai etika kerahasiaan data psikologis.
          </p>
          <div class="flex items-center text-accent-600 font-semibold text-sm lg:text-base">
            Lihat Tim IT Lengkap
            <svg class="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </RouterLink>
      </div>
    </section>
  </DefaultLayout>
</template>
