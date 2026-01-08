<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import irmaPhoto from '@/assets/IrmaRosdiyantiPhotos/IrmaRosdiyanti.jpeg';
</script>

<template>
  <DefaultLayout>
    <!-- Hero Header with Large Photo -->
    <section class="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-12 sm:py-16 lg:py-24">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-4 lg:gap-6 items-center">
          <!-- Photo Section -->
          <div class="order-1 lg:order-1 flex justify-center lg:justify-start">
            <div class="relative">
              <div class="absolute inset-0 bg-white/20 rounded-3xl blur-2xl transform translate-x-4 translate-y-4"></div>
              <img :src="irmaPhoto" alt="Irma Rosdiyanti, S.Psi., Psikolog" class="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl object-cover shadow-2xl ring-4 ring-white/20" />
            </div>
          </div>

          <!-- Text Section -->
          <div class="order-2 lg:order-2 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-4 lg:mb-6">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
              <span class="text-sm font-semibold">Psikolog Klinis Bersertifikat</span>
            </div>
            <h1 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">Irma Rosdiyanti, S.Psi., Psikolog</h1>
            <p class="text-xl sm:text-2xl text-blue-100 mb-6 lg:mb-8">Pendiri & Lead Psychologist</p>
            <div class="flex flex-wrap gap-3 justify-center lg:justify-start">
              <div class="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                <svg class="w-5 h-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-sm font-medium">25+ Tahun Pengalaman</span>
              </div>
              <div class="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                <svg class="w-5 h-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span class="text-sm font-medium">Terdaftar HIMPSI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Profile Overview -->
    <section class="py-12 sm:py-16 lg:py-20 bg-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900">Tentang</h2>
          </div>
          <p class="text-base lg:text-lg text-gray-700 leading-relaxed mb-6">
            Irma Rosdiyanti adalah psikolog klinis yang telah berpengalaman lebih dari 25 tahun dalam bidang psikologi klinis, industri-organisasi, dan pendidikan. Sebagai pendiri Ordinat Cakrawala, beliau memimpin tim psikolog profesional
            yang melayani kebutuhan asesmen, konseling, dan pengembangan SDM di berbagai sektor.
          </p>
          <p class="text-base lg:text-lg text-gray-700 leading-relaxed">
            Dengan latar belakang akademis yang kuat dan sertifikasi profesi yang lengkap, Irma berkomitmen untuk memberikan layanan psikologi yang berkualitas, etis, dan berdampak nyata bagi klien—baik individu, keluarga, maupun
            organisasi.
          </p>
        </div>
      </div>
    </section>

    <!-- HIMPSI Registration -->
    <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-purple-50/30">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 lg:mb-12">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Registrasi HIMPSI</h2>
          <p class="text-sm lg:text-base text-gray-600">Terdaftar sebagai Psikolog Klinis di Himpunan Psikologi Indonesia</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 lg:gap-8 mb-8">
          <div class="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div class="flex items-center gap-3 mb-4">
              <svg class="w-8 h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 class="text-xl lg:text-2xl font-bold">STR (Surat Tanda Registrasi)</h3>
            </div>
            <div class="text-3xl lg:text-4xl font-bold mb-2">20110293</div>
            <p class="text-blue-100 text-sm">Nomor Registrasi Psikolog</p>
          </div>

          <div class="bg-gradient-to-br from-purple-600 to-purple-700 text-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div class="flex items-center gap-3 mb-4">
              <svg class="w-8 h-8 lg:w-10 lg:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <h3 class="text-xl lg:text-2xl font-bold">SIPP (Surat Izin Praktik)</h3>
            </div>
            <div class="text-2xl lg:text-3xl font-bold mb-2">SIPP. 20110293-2021-02-0734</div>
            <p class="text-purple-100 text-sm">Izin Praktik Psikologi</p>
          </div>
        </div>

        <div class="text-center">
          <a
            href="https://himpsi.or.id/cari-psikolog/hasil?token=Oy8E"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-3 px-6 lg:px-8 py-3 lg:py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg border-2 border-blue-200"
          >
            <svg class="w-5 h-5 lg:w-6 lg:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <span>Verifikasi di Website HIMPSI</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Expertise & Experience -->
    <section class="py-12 sm:py-16 lg:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <!-- Bidang Keahlian -->
          <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 class="text-xl lg:text-2xl font-bold text-gray-900">Bidang Keahlian</h3>
            </div>
            <ul class="space-y-3">
              <li class="flex items-center gap-3">
                <span class="text-blue-600 font-bold text-lg flex-shrink-0">✓</span>
                <span class="text-sm lg:text-base text-gray-700">Psikologi Klinis</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="text-blue-600 font-bold text-lg flex-shrink-0">✓</span>
                <span class="text-sm lg:text-base text-gray-700">Assessment & Diagnosis Psikologi</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="text-blue-600 font-bold text-lg flex-shrink-0">✓</span>
                <span class="text-sm lg:text-base text-gray-700">Konseling & Psikoterapi</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="text-blue-600 font-bold text-lg mt-0.5">✓</span>
                <span class="text-sm lg:text-base text-gray-700">Psikologi Industri & Organisasi</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-blue-600 font-bold text-lg mt-0.5">✓</span>
                <span class="text-sm lg:text-base text-gray-700">Psikologi Pendidikan</span>
              </li>
            </ul>
          </div>

          <!-- Pengalaman Praktik -->
          <div class="bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center">
                <svg class="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                  />
                </svg>
              </div>
              <h3 class="text-xl lg:text-2xl font-bold text-gray-900">Pengalaman Praktik</h3>
            </div>
            <ul class="space-y-3">
              <li class="flex items-center gap-3">
                <span class="text-purple-600 font-bold text-lg flex-shrink-0">✓</span>
                <span class="text-sm lg:text-base text-gray-700">Praktik sejak 1997</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="text-purple-600 font-bold text-lg flex-shrink-0">✓</span>
                <span class="text-sm lg:text-base text-gray-700">Psikolog Klinis Madya - Lapas Narkotika Kelas IIA Cirebon</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="text-purple-600 font-bold text-lg flex-shrink-0">✓</span>
                <span class="text-sm lg:text-base text-gray-700">Anggota Ikatan Psikologi Klinis Indonesia</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="text-purple-600 font-bold text-lg flex-shrink-0">✓</span>
                <span class="text-sm lg:text-base text-gray-700">Memiliki Surat Izin Praktik Psikologi (SIPP)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Offered -->
    <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12">
          <div class="flex items-center gap-4 mb-8">
            <div class="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
              <svg class="w-7 h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 class="text-2xl lg:text-3xl font-bold text-gray-900">Layanan yang Ditawarkan</h2>
          </div>

          <div class="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <h3 class="text-lg lg:text-xl font-bold text-gray-900 mb-4">Asesmen & Psikotes</h3>
              <ul class="space-y-2">
                <li class="flex items-center gap-2 text-sm lg:text-base text-gray-700">
                  <span class="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span>Psikotes untuk rekrutmen dan promosi karyawan</span>
                </li>
                <li class="flex items-center gap-2 text-sm lg:text-base text-gray-700">
                  <span class="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span>Asesmen potensi siswa dan penjurusan</span>
                </li>
                <li class="flex items-center gap-2 text-sm lg:text-base text-gray-700">
                  <span class="text-blue-600 font-bold flex-shrink-0">•</span>
                  <span>Assessment center untuk calon pemimpin</span>
                </li>
              </ul>
            </div>

            <div class="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <h3 class="text-lg lg:text-xl font-bold text-gray-900 mb-4">Konseling & Terapi</h3>
              <ul class="space-y-2">
                <li class="flex items-center gap-2 text-sm lg:text-base text-gray-700">
                  <span class="text-purple-600 font-bold flex-shrink-0">•</span>
                  <span>Konseling individu, keluarga, dan kelompok</span>
                </li>
                <li class="flex items-center gap-2 text-sm lg:text-base text-gray-700">
                  <span class="text-purple-600 font-bold flex-shrink-0">•</span>
                  <span>Terapi untuk masalah psikologis dan emosional</span>
                </li>
                <li class="flex items-center gap-2 text-sm lg:text-base text-gray-700">
                  <span class="text-purple-600 font-bold flex-shrink-0">•</span>
                  <span>Konseling adiksi dan rehabilitasi psikologis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">Konsultasi Psikologi</h2>
        <p class="text-base sm:text-lg text-blue-100 mb-6 lg:mb-8 max-w-3xl mx-auto">Untuk berkonsultasi atau membuat jadwal asesmen psikologi, silakan hubungi kami. Semua informasi dijaga kerahasiaannya sesuai kode etik psikolog.</p>
        <RouterLink to="/kontak" class="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group">
          Hubungi Kami
          <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </RouterLink>
      </div>
    </section>
  </DefaultLayout>
</template>
