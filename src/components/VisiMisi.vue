<script setup lang="ts">
// No props needed
</script>

<template>
  <section id="visi_misi" class="py-12 sm:py-16 lg:py-20 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-8 lg:mb-12">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Visi & Misi</h2>
        <p class="text-lg sm:text-xl text-blue-600 font-medium">Komitmen Kami untuk Masa Depan yang Lebih Baik</p>
      </div>

      <div class="grid lg:grid-cols-2 gap-6 lg:gap-8">
        <!-- Vision Card -->
        <div class="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-10 text-white shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 lg:w-14 lg:h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 class="text-2xl lg:text-3xl font-bold">Visi</h3>
          </div>
          <p class="text-base lg:text-lg leading-relaxed">
            Menjadi mitra terpercaya dalam optimalisasi sumber daya manusia, melalui layanan psikologi yang profesional, berbasis riset, dan berdampak positif bagi individu maupun organisasi di seluruh Indonesia.
          </p>
        </div>

        <!-- Mission Card -->
        <div class="bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
          <div class="flex items-center gap-4 mb-6">
            <div class="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 lg:w-7 lg:h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                />
              </svg>
            </div>
            <h3 class="text-2xl lg:text-3xl font-bold text-gray-900">Misi</h3>
          </div>
          <ul class="space-y-4">
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 lg:w-6 lg:h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-gray-700 text-sm lg:text-base">Menyediakan layanan asesmen psikologi yang valid, reliabel, dan berbasis standar profesional</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 lg:w-6 lg:h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-gray-700 text-sm lg:text-base">Memberikan konseling dan terapi yang empatik, etis, dan sesuai kebutuhan klien</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 lg:w-6 lg:h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-gray-700 text-sm lg:text-base">Menyelenggarakan pelatihan dan workshop yang aplikatif dan berdampak nyata</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 lg:w-6 lg:h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-gray-700 text-sm lg:text-base">Berkolaborasi dengan institusi pendidikan dan perusahaan untuk menciptakan ekosistem SDM yang sehat</span>
            </li>
            <li class="flex items-center gap-3">
              <svg class="w-5 h-5 lg:w-6 lg:h-6 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-gray-700 text-sm lg:text-base">Terus mengembangkan kompetensi tim melalui riset dan pelatihan berkelanjutan</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
