<script setup lang="ts">
// No props needed
</script>

<template>
  <section id="about_company" class="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-blue-50">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-8 lg:mb-12">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Tentang Ordinat Cakrawala
        </h2>
        <p class="text-lg sm:text-xl text-blue-600 font-medium">
          Biro Konsultasi Psikologi Profesional
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
        <!-- Company Profile Text -->
        <div class="space-y-4 lg:space-y-6 text-gray-700 leading-relaxed">
          <p class="text-base lg:text-lg">
            <span class="font-semibold text-gray-900">Ordinat Cakrawala</span> adalah biro konsultasi psikologi yang berfokus pada layanan profesional berbasis riset dan praktik terkini. Kami berkomitmen untuk memberikan solusi SDM yang tepat sasaran bagi berbagai kalangan—mulai dari institusi pendidikan, perusahaan, hingga individu yang memerlukan pendampingan psikologis.
          </p>
          <p class="text-base lg:text-lg">
            Dengan pendekatan yang terukur dan berbasis bukti ilmiah, kami membantu organisasi memaksimalkan potensi SDM mereka melalui asesmen psikologi, pelatihan, konseling, dan program pengembangan yang disesuaikan dengan kebutuhan spesifik.
          </p>
          <p class="text-base lg:text-lg">
            Didukung oleh tim psikolog berpengalaman dan bersertifikat, Ordinat Cakrawala hadir sebagai mitra terpercaya dalam perjalanan pengembangan individu dan organisasi Anda.
          </p>
        </div>

        <!-- Specialization Cards -->
        <div class="grid sm:grid-cols-2 gap-4 lg:gap-6">
          <div class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer text-center">
            <div class="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="font-semibold text-base lg:text-lg text-gray-900 mb-2">Psikologi Industri</h3>
            <p class="text-sm text-gray-600">Asesmen SDM, rekrutmen, dan pengembangan organisasi</p>
          </div>

          <div class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer text-center">
            <div class="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 class="font-semibold text-base lg:text-lg text-gray-900 mb-2">Psikologi Pendidikan</h3>
            <p class="text-sm text-gray-600">Asesmen siswa, bimbingan belajar, dan konsultasi akademik</p>
          </div>

          <div class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer text-center">
            <div class="w-12 h-12 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <svg class="w-6 h-6 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 class="font-semibold text-base lg:text-lg text-gray-900 mb-2">Psikologi Keluarga</h3>
            <p class="text-sm text-gray-600">Konseling keluarga, parenting, dan terapi relasi</p>
          </div>

          <div class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer text-center">
            <div class="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-4 mx-auto">
              <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="font-semibold text-base lg:text-lg text-gray-900 mb-2">CPMI & Pekerja Migran</h3>
            <p class="text-sm text-gray-600">Asesmen kesehatan mental dan persiapan keberangkatan</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
