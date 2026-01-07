<script setup lang="ts">
const badges = [
  'Psikotes Sekolah TK – Perguruan Tinggi',
  'Rekrutmen & Assessment Karyawan hingga Level Direksi',
  'Unit Khusus Psikotes CPMI melalui Dimensi Cakrawala'
]
</script>

<template>
  <section id="hero" class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 text-white">
    <!-- Decorative background elements with animation -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-purple-300 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-32">
      <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <!-- Content -->
        <div class="space-y-6 lg:space-y-8">
          <h1 class="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-balance">
            Membangun Sumber Daya Manusia yang Sehat dan Berkualitas
          </h1>

          <p class="text-base sm:text-lg md:text-xl text-blue-100 leading-relaxed">
            Ordinat Cakrawala adalah biro konsultasi psikologi yang mendampingi sekolah, organisasi, dan calon pekerja migran Indonesia dalam mengenali potensi, mengelola tantangan, dan mengembangkan kualitas SDM secara menyeluruh.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <RouterLink
              to="/kontak"
              class="group px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
            >
              <span>Konsultasi Bersama Kami</span>
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </RouterLink>
            <RouterLink
              to="/profil"
              class="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl transition-all border-2 border-white/30 hover:bg-white/20 hover:border-white/50 hover:scale-105 active:scale-95 flex items-center justify-center"
            >
              Pelajari Profil Perusahaan
            </RouterLink>
          </div>

          <!-- Feature Badges -->
          <div class="space-y-3 pt-4">
            <div
              v-for="(badge, index) in badges"
              :key="index"
              class="flex items-start space-x-3 group"
            >
              <svg class="w-5 h-5 sm:w-6 sm:h-6 text-green-300 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span class="text-sm sm:text-base text-blue-100">{{ badge }}</span>
            </div>
          </div>
        </div>

        <!-- Decorative Card (Hidden on mobile, shown on desktop) -->
        <div class="hidden lg:block">
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-3xl transform rotate-3 opacity-50"></div>
            <div class="relative bg-white rounded-3xl shadow-2xl p-8 space-y-6 hover:shadow-3xl transition-shadow duration-300">
              <div class="space-y-4">
                <div class="h-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-3/4"></div>
                <div class="h-3 bg-gray-200 rounded-full w-full"></div>
                <div class="h-3 bg-gray-200 rounded-full w-5/6"></div>
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div class="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
                  <div class="text-3xl font-bold text-blue-600 mb-1">2006</div>
                  <div class="text-sm text-gray-600 font-medium">Sejak</div>
                </div>
                <div class="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default">
                  <div class="text-3xl font-bold text-purple-600 mb-1">95+</div>
                  <div class="text-sm text-gray-600 font-medium">Klien</div>
                </div>
              </div>
              <div class="space-y-2">
                <div class="h-3 bg-gray-200 rounded-full w-full"></div>
                <div class="h-3 bg-gray-200 rounded-full w-4/5"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block">
      <div class="animate-bounce">
        <svg class="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes floating {
  0%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

.floating {
  animation: floating 6s ease-in-out infinite;
}

@media (prefers-reduced-motion: reduce) {
  .floating {
    animation: none;
  }
}
</style>
