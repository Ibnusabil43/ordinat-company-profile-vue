<script setup lang="ts">
import logoImg from '@/assets/4d225eb20f2775c6ef864b06d8b5441eb4e805f8.png'

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <!-- Brand -->
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <img :src="logoImg" alt="Ordinat Cakrawala Logo" class="w-10 h-10 rounded-full" />
            <div>
              <h3 class="font-bold text-lg">Ordinat Cakrawala</h3>
            </div>
          </div>
          <p class="text-gray-400 text-sm">
            Biro Konsultasi Psikologi untuk Sekolah, Organisasi, dan CPMI
          </p>
        </div>

        <!-- Navigation -->
        <div>
          <h4 class="font-semibold mb-4">Navigasi</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li>
              <RouterLink to="/" class="hover:text-white transition-colors">
                Beranda
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/profil" class="hover:text-white transition-colors">
                Profil Perusahaan
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/layanan" class="hover:text-white transition-colors">
                Layanan
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/cpmi" class="hover:text-white transition-colors">
                Unit CPMI
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/tim" class="hover:text-white transition-colors">
                Tim
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/kontak" class="hover:text-white transition-colors">
                Kontak
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="font-semibold mb-4">Layanan</h4>
          <ul class="space-y-2 text-sm text-gray-400">
            <li>
              <RouterLink to="/layanan/psikotes-assessment" class="hover:text-white transition-colors">
                Psikotes & Assessment
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/layanan/psikologi-pendidikan" class="hover:text-white transition-colors">
                Psikologi Pendidikan
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/layanan/konseling" class="hover:text-white transition-colors">
                Konseling
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/layanan/training" class="hover:text-white transition-colors">
                Training
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/layanan/outbound" class="hover:text-white transition-colors">
                Outbound
              </RouterLink>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-semibold mb-4">Kontak</h4>
          <div class="space-y-3 text-sm text-gray-400">
            <div class="flex items-start space-x-2">
              <svg class="w-4 h-4 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Jl. Raya Susukan No. 21, Susukan, Cirebon</span>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+628122327546" class="hover:text-white transition-colors">
                0812-2327-546
              </a>
            </div>
            <div class="flex items-center space-x-2">
              <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:ordinat.consultan@gmail.com" class="hover:text-white transition-colors">
                ordinat.consultan@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
        <p>&copy; {{ currentYear }} Ordinat Cakrawala. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
