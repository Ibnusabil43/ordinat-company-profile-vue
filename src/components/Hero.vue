<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref } from 'vue'

// Three.js scene is lazy-loaded (own chunk) and only mounted on capable, motion-friendly clients.
// The inline SVG line-art below is a STATIC FALLBACK only — for prefers-reduced-motion or a WebGL
// init failure — never shown as a loading placeholder while the 3D scene is being fetched/built.
const HeroScene3D = defineAsyncComponent(() => import('./HeroScene3D.vue'))
const show3D = ref(false)
const sceneReady = ref(false)
const showStaticFallback = ref(false)

onMounted(() => {
  // Visual panel is hidden below the lg breakpoint (see template) — skip loading
  // the Three.js chunk and running the renderer entirely on mobile/tablet.
  if (window.innerWidth < 1024) return
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    showStaticFallback.value = true
    return
  }
  const start = () => { show3D.value = true }
  if ('requestIdleCallback' in window) {
    requestIdleCallback(start, { timeout: 1500 })
  } else {
    setTimeout(start, 300)
  }
})

function onSceneFailed() {
  show3D.value = false
  showStaticFallback.value = true
}

const badges = [
  'Psikotes Sekolah TK – Perguruan Tinggi',
  'Rekrutmen & Assessment Karyawan hingga Level Direksi',
  'Unit Khusus Psikotes CPMI melalui Dimensi Cakrawala'
]
</script>

<template>
  <section id="hero" class="relative overflow-hidden bg-paper">
    <!-- Warm ambient texture: soft organic shapes tied to the palette -->
    <div class="pointer-events-none absolute inset-0 -z-0" aria-hidden="true">
      <div class="absolute -top-24 -right-24 w-[42rem] h-[42rem] rounded-full bg-primary-50"></div>
      <div class="absolute top-1/2 -left-32 w-96 h-96 rounded-full bg-accent-50"></div>
      <div class="absolute -bottom-16 right-1/4 w-72 h-72 rounded-full bg-accent-50/70"></div>
    </div>

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16 md:py-20 lg:py-24">
      <div class="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
        <!-- Content -->
        <div class="lg:col-span-6 space-y-7 lg:space-y-8">
          <!-- Kicker -->
          <div class="flex items-center gap-3">
            <span class="h-px w-10 bg-accent-500" aria-hidden="true"></span>
            <span class="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
              Biro Konsultasi Psikologi &middot; Sejak 2006
            </span>
          </div>

          <h1 class="font-display text-4xl sm:text-5xl lg:text-[3.4rem] xl:text-6xl font-semibold leading-[1.05] text-ink text-balance">
            Membangun Sumber Daya Manusia yang
            <span class="text-primary-700"> Sehat</span> dan
            <span class="italic text-accent-600"> Berkualitas</span>
          </h1>

          <p class="text-base sm:text-lg text-ink-soft leading-relaxed max-w-xl border-l-2 border-accent-300 pl-5">
            Ordinat Cakrawala adalah biro konsultasi psikologi yang mendampingi sekolah, organisasi, dan calon pekerja migran Indonesia dalam mengenali potensi, mengelola tantangan, dan mengembangkan kualitas SDM secara menyeluruh.
          </p>

          <!-- CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <RouterLink
              to="/kontak"
              class="group px-6 sm:px-7 py-3.5 bg-accent-500 text-white font-semibold rounded-full transition-all hover:bg-accent-600 hover:shadow-lg hover:shadow-accent-500/20 active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <span>Konsultasi Bersama Kami</span>
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </RouterLink>
            <RouterLink
              to="/profil"
              class="px-6 sm:px-7 py-3.5 bg-transparent text-primary-700 font-semibold rounded-full transition-all border border-primary-300 hover:bg-primary-50 hover:border-primary-400 active:scale-[0.98] flex items-center justify-center"
            >
              Pelajari Profil Perusahaan
            </RouterLink>
          </div>

          <!-- Stats + Feature Badges: editorial strip -->
          <div class="pt-6 border-t border-ink/10 grid sm:grid-cols-[auto,1fr] gap-6 sm:gap-10 items-center">
            <div class="flex sm:flex-col gap-8 sm:gap-4">
              <div>
                <div class="font-display text-3xl font-semibold text-primary-700">2006</div>
                <div class="text-xs text-ink-muted font-medium uppercase tracking-wide mt-0.5">Sejak</div>
              </div>
              <div>
                <div class="font-display text-3xl font-semibold text-primary-700">95+</div>
                <div class="text-xs text-ink-muted font-medium uppercase tracking-wide mt-0.5">Klien</div>
              </div>
            </div>

            <div class="space-y-2.5 sm:border-l sm:border-ink/10 sm:pl-8">
              <div
                v-for="(badge, index) in badges"
                :key="index"
                class="flex items-start gap-3"
              >
                <svg class="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-sm sm:text-base text-ink-soft">{{ badge }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Visual — 3D consultation scene, desktop/tablet only (lg+); dropped on mobile
             rather than sitting below the text where it added scroll length without payoff -->
        <div class="hidden lg:block lg:col-span-6">
          <div class="relative aspect-square max-w-2xl mx-auto">
            <!-- Consultation line-art: static fallback only (reduced-motion or WebGL failure) —
                 not shown during the normal 3D-scene loading gap (paper-toned) -->
            <svg
              v-if="showStaticFallback"
              class="hero-scene absolute inset-0 w-full h-full"
              viewBox="0 0 400 480"
              fill="none"
              role="img"
              aria-label="Ilustrasi dua orang duduk berhadapan dalam sesi konsultasi psikologi"
              preserveAspectRatio="xMidYMid meet"
            >
              <!-- floor line -->
              <line x1="40" y1="392" x2="360" y2="392" stroke="#d9c8b4" stroke-width="1.5" stroke-opacity="0.8" />

              <!-- side table + plant (between them) -->
              <g stroke="#d9764a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none">
                <rect x="186" y="300" width="28" height="60" rx="4" stroke-opacity="0.9" />
                <path d="M200 300 v-26" stroke-opacity="0.9" />
                <path d="M200 274 c-14 -4 -18 -20 -8 -30 c6 12 14 10 8 30 Z" fill="#d9764a" fill-opacity="0.15" />
                <path d="M200 278 c12 -6 20 -18 10 -30 c-4 12 -12 12 -10 30 Z" fill="#d9764a" fill-opacity="0.15" />
              </g>

              <!-- Figure A (client) — left, angled right -->
              <g stroke="#2f635d" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
                <!-- armchair -->
                <path d="M60 300 q-16 0 -16 -22 v-40 q0 -20 20 -20 h44 q20 0 20 20 v62" stroke="#7ba8a1" />
                <path d="M52 300 v54 M120 300 v54" stroke="#7ba8a1" />
                <!-- body -->
                <path d="M72 300 q-8 -46 14 -74" />
                <path d="M118 300 q6 -40 -12 -70" />
                <!-- head -->
                <circle cx="96" cy="196" r="20" fill="#2f635d" fill-opacity="0.1" />
                <!-- arm gesturing toward center -->
                <path d="M112 236 q28 6 44 40" />
              </g>

              <!-- Figure B (psychologist) — right, angled left, holding notebook -->
              <g stroke="#d9764a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">
                <!-- armchair -->
                <path d="M340 300 q16 0 16 -22 v-40 q0 -20 -20 -20 h-44 q-20 0 -20 20 v62" stroke="#7ba8a1" />
                <path d="M348 300 v54 M280 300 v54" stroke="#7ba8a1" />
                <!-- body -->
                <path d="M328 300 q8 -46 -14 -74" />
                <path d="M282 300 q-6 -40 12 -70" />
                <!-- head -->
                <circle cx="304" cy="196" r="20" fill="#d9764a" fill-opacity="0.12" />
                <!-- notebook on lap -->
                <rect x="256" y="272" width="40" height="28" rx="3" transform="rotate(-8 276 286)" stroke-opacity="0.9" />
                <!-- arm toward notebook -->
                <path d="M288 240 q-14 14 -8 36" />
              </g>
            </svg>

            <!-- Three.js consultation scene: fades in from blank once rendering (no placeholder beforehand) -->
            <HeroScene3D
              v-if="show3D"
              class="absolute inset-0 transition-opacity duration-700"
              :class="sceneReady ? 'opacity-100' : 'opacity-0'"
              @ready="sceneReady = true"
              @failed="onSceneFailed"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-6 left-1/2 -translate-x-1/2 hidden lg:block">
      <div class="animate-bounce">
        <svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  </section>
</template>

<style scoped>
/* Gentle "breathing" drift on the poster illustration (replaced by the 3D scene once loaded) */
.hero-scene {
  transform-origin: center;
  animation: heroBreathe 7s ease-in-out infinite;
}

@keyframes heroBreathe {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-6px) scale(1.01);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero-scene {
    animation: none;
  }
}
</style>
