<script setup lang="ts">
import { ref, watch } from 'vue'
import { useNavbar, useMobileMenu } from '@/composables/useNavbar'
import { useRoute } from 'vue-router'
import logoImg from '@/assets/4d225eb20f2775c6ef864b06d8b5441eb4e805f8.png'

const route = useRoute()
const { navbarEl } = useNavbar()
const { isOpen: mobileMenuOpen, toggle: toggleMenu, close: closeMenu } = useMobileMenu()
const layananDropdownOpen = ref(false)
const timDropdownOpen = ref(false)

const isActive = (path: string) => route.path === path
const isPathActive = (pathPrefix: string) => route.path.startsWith(pathPrefix)

const toggleLayanan = () => {
  layananDropdownOpen.value = !layananDropdownOpen.value
  timDropdownOpen.value = false
}

const toggleTim = () => {
  timDropdownOpen.value = !timDropdownOpen.value
  layananDropdownOpen.value = false
}

const handleMobileNavClick = () => {
  closeMenu()
  layananDropdownOpen.value = false
  timDropdownOpen.value = false
}

// Close mobile menu on route change
watch(() => route.path, () => {
  handleMobileNavClick()
})
</script>

<template>
  <nav ref="navbarEl" class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-md transition-shadow duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center py-3 sm:py-4">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center space-x-2 sm:space-x-3 hover:opacity-80 transition-opacity tap-target">
          <img :src="logoImg" alt="Ordinat Cakrawala Logo" class="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover" />
          <div class="min-w-0">
            <h1 class="font-bold text-base sm:text-lg text-gray-900 truncate">Ordinat Cakrawala</h1>
            <p class="text-xs text-gray-600 hidden sm:block">Biro Konsultasi Psikologi</p>
          </div>
        </RouterLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-1">
          <RouterLink
            to="/"
            :class="[
              'px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200',
              isActive('/') 
                ? 'text-blue-600 bg-blue-50 shadow-sm' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
            ]"
          >
            Beranda
          </RouterLink>

          <RouterLink
            to="/profil"
            :class="[
              'px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200',
              isActive('/profil') 
                ? 'text-blue-600 bg-blue-50 shadow-sm' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
            ]"
          >
            Profil Perusahaan
          </RouterLink>

          <!-- Layanan Dropdown -->
          <div class="relative group">
            <button
              :class="[
                'px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1',
                isPathActive('/layanan') 
                  ? 'text-blue-600 bg-blue-50 shadow-sm' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              ]"
            >
              Layanan
              <svg class="w-4 h-4 transition-transform group-hover:rotate-180 duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 -translate-y-2">
              <RouterLink
                to="/layanan"
                class="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 first:rounded-t-xl border-b border-gray-100 font-medium transition-colors"
              >
                Semua Layanan
              </RouterLink>
              <RouterLink
                to="/layanan/psikotes-assessment"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Psikotes & Assessment
              </RouterLink>
              <RouterLink
                to="/layanan/psikologi-pendidikan"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Psikologi Pendidikan
              </RouterLink>
              <RouterLink
                to="/layanan/konseling"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Konseling
              </RouterLink>
              <RouterLink
                to="/layanan/training"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Training & Capacity Building
              </RouterLink>
              <RouterLink
                to="/layanan/outbound"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 last:rounded-b-xl transition-colors"
              >
                Outbound & Team Building
              </RouterLink>
            </div>
          </div>

          <RouterLink
            to="/cpmi"
            :class="[
              'px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200',
              isActive('/cpmi') 
                ? 'text-blue-600 bg-blue-50 shadow-sm' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
            ]"
          >
            Unit CPMI
          </RouterLink>

          <!-- Tim Dropdown -->
          <div class="relative group">
            <button
              :class="[
                'px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 flex items-center gap-1',
                isPathActive('/tim') 
                  ? 'text-blue-600 bg-blue-50 shadow-sm' 
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
              ]"
            >
              Tim
              <svg class="w-4 h-4 transition-transform group-hover:rotate-180 duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div class="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 -translate-y-2">
              <RouterLink
                to="/tim"
                class="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 first:rounded-t-xl border-b border-gray-100 font-medium transition-colors"
              >
                Tim Psikolog & IT Staff
              </RouterLink>
              <RouterLink
                to="/tim/irma-rosdiyanti"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                Irma Rosdiyanti, S.Psi., Psikolog
              </RouterLink>
              <RouterLink
                to="/tim/it-staff"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 last:rounded-b-xl transition-colors"
              >
                IT Staff & Sistem Informasi
              </RouterLink>
            </div>
          </div>

          <RouterLink
            to="/rekanan"
            :class="[
              'px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200',
              isActive('/rekanan') 
                ? 'text-blue-600 bg-blue-50 shadow-sm' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
            ]"
          >
            Rekanan
          </RouterLink>

          <RouterLink
            to="/kontak"
            :class="[
              'px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200',
              isActive('/kontak') 
                ? 'text-blue-600 bg-blue-50 shadow-sm' 
                : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
            ]"
          >
            Kontak
          </RouterLink>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMenu"
          class="lg:hidden p-2 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-colors tap-target"
          aria-label="Toggle menu"
          :aria-expanded="mobileMenuOpen"
        >
          <svg 
            v-if="!mobileMenuOpen" 
            class="w-6 h-6 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg 
            v-else 
            class="w-6 h-6 transition-transform rotate-90" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="mobileMenuOpen" class="lg:hidden bg-white border-t overflow-y-auto max-h-[calc(100vh-80px)]">
        <!-- Mobile menu backdrop -->
        <div class="absolute inset-0 bg-black/5 backdrop-blur-sm pointer-events-none"></div>
        
        <div class="relative max-w-7xl mx-auto px-4 py-4 space-y-1">
          <RouterLink
            to="/"
            @click="handleMobileNavClick"
            :class="[
              'block px-4 py-3 rounded-lg transition-colors tap-target',
              isActive('/') 
                ? 'bg-blue-50 text-blue-600 font-medium' 
                : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
            ]"
          >
            Beranda
          </RouterLink>
          
          <RouterLink
            to="/profil"
            @click="handleMobileNavClick"
            :class="[
              'block px-4 py-3 rounded-lg transition-colors tap-target',
              isActive('/profil') 
                ? 'bg-blue-50 text-blue-600 font-medium' 
                : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
            ]"
          >
            Profil Perusahaan
          </RouterLink>

          <!-- Mobile Layanan Dropdown -->
          <div>
            <button
              @click="toggleLayanan"
              :class="[
                'w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors tap-target',
                isPathActive('/layanan') 
                  ? 'bg-blue-50 text-blue-600 font-medium' 
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              ]"
            >
              Layanan
              <svg
                :class="['w-5 h-5 transition-transform duration-200', layananDropdownOpen && 'rotate-180']"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 scale-95 -translate-y-2"
              enter-to-class="opacity-100 scale-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 scale-100 translate-y-0"
              leave-to-class="opacity-0 scale-95 -translate-y-2"
            >
              <div v-if="layananDropdownOpen" class="pl-4 space-y-1 mt-2 bg-slate-50/50 rounded-lg p-2">
                <RouterLink
                  to="/layanan"
                  @click="handleMobileNavClick"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                >
                  Semua Layanan
                </RouterLink>
                <RouterLink
                  to="/layanan/psikotes-assessment"
                  @click="handleMobileNavClick"
                  class="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                >
                  Psikotes & Assessment
                </RouterLink>
                <RouterLink
                  to="/layanan/psikologi-pendidikan"
                  @click="handleMobileNavClick"
                  class="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                >
                  Psikologi Pendidikan
                </RouterLink>
                <RouterLink
                  to="/layanan/konseling"
                  @click="handleMobileNavClick"
                  class="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                >
                  Konseling
                </RouterLink>
                <RouterLink
                  to="/layanan/training"
                  @click="handleMobileNavClick"
                  class="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                >
                  Training & Capacity Building
                </RouterLink>
                <RouterLink
                  to="/layanan/outbound"
                  @click="handleMobileNavClick"
                  class="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                >
                  Outbound & Team Building
                </RouterLink>
              </div>
            </transition>
          </div>

          <RouterLink
            to="/cpmi"
            @click="handleMobileNavClick"
            :class="[
              'block px-4 py-3 rounded-lg transition-colors tap-target',
              isActive('/cpmi') 
                ? 'bg-blue-50 text-blue-600 font-medium' 
                : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
            ]"
          >
            Unit CPMI
          </RouterLink>

          <!-- Mobile Tim Dropdown -->
          <div>
            <button
              @click="toggleTim"
              :class="[
                'w-full flex items-center justify-between px-4 py-3 rounded-lg transition-colors tap-target',
                isPathActive('/tim') 
                  ? 'bg-blue-50 text-blue-600 font-medium' 
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              ]"
            >
              Tim
              <svg
                :class="['w-5 h-5 transition-transform duration-200', timDropdownOpen && 'rotate-180']"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <transition
              enter-active-class="transition ease-out duration-200"
              enter-from-class="opacity-0 scale-95 -translate-y-2"
              enter-to-class="opacity-100 scale-100 translate-y-0"
              leave-active-class="transition ease-in duration-150"
              leave-from-class="opacity-100 scale-100 translate-y-0"
              leave-to-class="opacity-0 scale-95 -translate-y-2"
            >
              <div v-if="timDropdownOpen" class="pl-4 space-y-1 mt-2 bg-slate-50/50 rounded-lg p-2">
                <RouterLink
                  to="/tim"
                  @click="handleMobileNavClick"
                  class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors font-medium"
                >
                  Tim Psikolog & IT Staff
                </RouterLink>
                <RouterLink
                  to="/tim/irma-rosdiyanti"
                  @click="handleMobileNavClick"
                  class="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                >
                  Irma Rosdiyanti, S.Psi., Psikolog
                </RouterLink>
                <RouterLink
                  to="/tim/it-staff"
                  @click="handleMobileNavClick"
                  class="block px-4 py-2 text-sm text-gray-600 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors"
                >
                  IT Staff & Sistem Informasi
                </RouterLink>
              </div>
            </transition>
          </div>

          <RouterLink
            to="/rekanan"
            @click="handleMobileNavClick"
            :class="[
              'block px-4 py-3 rounded-lg transition-colors tap-target',
              isActive('/rekanan') 
                ? 'bg-blue-50 text-blue-600 font-medium' 
                : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
            ]"
          >
            Rekanan
          </RouterLink>
          
          <RouterLink
            to="/kontak"
            @click="handleMobileNavClick"
            :class="[
              'block px-4 py-3 rounded-lg transition-colors tap-target',
              isActive('/kontak') 
                ? 'bg-blue-50 text-blue-600 font-medium' 
                : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
            ]"
          >
            Kontak
          </RouterLink>
        </div>
      </div>
    </transition>
  </nav>
</template>

<style scoped>
/* Additional mobile menu backdrop blur */
@supports ((-webkit-backdrop-filter: blur(10px)) or (backdrop-filter: blur(10px))) {
  nav {
    -webkit-backdrop-filter: saturate(180%) blur(10px);
    backdrop-filter: saturate(180%) blur(10px);
  }
}
</style>
