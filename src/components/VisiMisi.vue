<script setup lang="ts">
// No props needed
</script>

<template>
  <section id="visi_misi" class="py-14 sm:py-16 lg:py-24 bg-paper">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="max-w-2xl mb-10 lg:mb-14">
        <span class="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Arah &amp; Komitmen</span>
        <h2 class="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight mt-3 mb-4">Visi &amp; Misi</h2>
        <p class="text-lg sm:text-xl text-primary-700 font-medium">Komitmen Kami untuk Masa Depan yang Lebih Baik</p>
      </div>

      <div class="grid lg:grid-cols-5 gap-6 lg:gap-8 items-stretch">
        <!-- Vision — large serif pull-quote statement -->
        <div class="lg:col-span-2 relative bg-primary-800 text-white rounded-3xl p-8 lg:p-10 overflow-hidden flex flex-col">
          <div class="pointer-events-none absolute -top-10 -right-8 w-52 h-52 rounded-full bg-primary-700/50" aria-hidden="true"></div>
          <div class="relative">
            <span class="text-sm font-semibold uppercase tracking-[0.2em] text-accent-300">Visi</span>
            <!-- oversized quote mark -->
            <div class="font-display text-7xl leading-none text-accent-400/70 mt-2 mb-2 select-none" aria-hidden="true">&ldquo;</div>
          </div>
          <blockquote class="relative font-display text-xl lg:text-2xl leading-snug font-medium flex-grow">
            Menjadi mitra terpercaya dalam optimalisasi sumber daya manusia, melalui layanan psikologi yang profesional, berbasis riset, dan berdampak positif bagi individu maupun organisasi di seluruh Indonesia.
          </blockquote>
        </div>

        <!-- Mission — checklist -->
        <div class="lg:col-span-3 bg-white rounded-3xl p-8 lg:p-10 border border-paper-300">
          <div class="flex items-center gap-3 mb-6">
            <span class="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Misi</span>
            <span class="h-px flex-grow bg-paper-300"></span>
          </div>
          <ul class="space-y-4">
            <li class="flex items-start gap-3.5">
              <span class="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center">
                <svg class="w-3 h-3 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span class="text-ink-soft text-sm lg:text-base leading-relaxed">Menyediakan layanan asesmen psikologi yang valid, reliabel, dan berbasis standar profesional</span>
            </li>
            <li class="flex items-start gap-3.5">
              <span class="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center">
                <svg class="w-3 h-3 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span class="text-ink-soft text-sm lg:text-base leading-relaxed">Memberikan konseling dan terapi yang empatik, etis, dan sesuai kebutuhan klien</span>
            </li>
            <li class="flex items-start gap-3.5">
              <span class="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center">
                <svg class="w-3 h-3 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span class="text-ink-soft text-sm lg:text-base leading-relaxed">Menyelenggarakan pelatihan dan workshop yang aplikatif dan berdampak nyata</span>
            </li>
            <li class="flex items-start gap-3.5">
              <span class="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center">
                <svg class="w-3 h-3 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span class="text-ink-soft text-sm lg:text-base leading-relaxed">Berkolaborasi dengan institusi pendidikan dan perusahaan untuk menciptakan ekosistem SDM yang sehat</span>
            </li>
            <li class="flex items-start gap-3.5">
              <span class="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center">
                <svg class="w-3 h-3 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span class="text-ink-soft text-sm lg:text-base leading-relaxed">Terus mengembangkan kompetensi tim melalui riset dan pelatihan berkelanjutan</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
