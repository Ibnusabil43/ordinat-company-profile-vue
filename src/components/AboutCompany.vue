<script setup lang="ts">
// No props needed
</script>

<template>
  <section id="about_company" class="py-14 sm:py-16 lg:py-24 bg-white">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <!-- Company Profile Text -->
        <div class="lg:sticky lg:top-28">
          <span class="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Tentang Kami</span>
          <h2 class="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight mt-3 mb-4">
            Tentang Ordinat Cakrawala
          </h2>
          <p class="text-lg sm:text-xl text-primary-700 font-medium mb-6">
            Biro Konsultasi Psikologi Profesional
          </p>
          <div class="space-y-4 lg:space-y-5 text-ink-soft leading-relaxed">
            <p class="text-base lg:text-lg">
              <span class="font-semibold text-ink">Ordinat Cakrawala</span> adalah biro konsultasi psikologi yang berfokus pada layanan profesional berbasis riset dan praktik terkini. Kami berkomitmen untuk memberikan solusi SDM yang tepat sasaran bagi berbagai kalangan—mulai dari institusi pendidikan, perusahaan, hingga individu yang memerlukan pendampingan psikologis.
            </p>
            <p class="text-base lg:text-lg">
              Dengan pendekatan yang terukur dan berbasis bukti ilmiah, kami membantu organisasi memaksimalkan potensi SDM mereka melalui asesmen psikologi, pelatihan, konseling, dan program pengembangan yang disesuaikan dengan kebutuhan spesifik.
            </p>
            <p class="text-base lg:text-lg">
              Didukung oleh tim psikolog berpengalaman dan bersertifikat, Ordinat Cakrawala hadir sebagai mitra terpercaya dalam perjalanan pengembangan individu dan organisasi Anda.
            </p>
          </div>
        </div>

        <!-- Specialization Cards -->
        <div class="grid sm:grid-cols-2 gap-4 lg:gap-5">
          <div class="group bg-paper rounded-2xl p-6 border border-paper-300 hover:border-primary-300 hover:shadow-md transition-all duration-300 h-full">
            <div class="w-11 h-11 rounded-lg flex items-center justify-center mb-4 bg-primary-100 text-primary-700 border border-primary-200 group-hover:bg-primary-700 group-hover:text-white transition-colors">
              <Icon name="briefcase" class="w-5 h-5" />
            </div>
            <h3 class="font-semibold text-base lg:text-lg text-ink mb-2">Psikologi Industri</h3>
            <p class="text-sm text-ink-soft leading-relaxed">Asesmen SDM, rekrutmen, dan pengembangan organisasi</p>
          </div>

          <div class="group bg-paper rounded-2xl p-6 border border-paper-300 hover:border-primary-300 hover:shadow-md transition-all duration-300 h-full">
            <div class="w-11 h-11 rounded-lg flex items-center justify-center mb-4 bg-primary-100 text-primary-700 border border-primary-200 group-hover:bg-primary-700 group-hover:text-white transition-colors">
              <Icon name="education" class="w-5 h-5" />
            </div>
            <h3 class="font-semibold text-base lg:text-lg text-ink mb-2">Psikologi Pendidikan</h3>
            <p class="text-sm text-ink-soft leading-relaxed">Asesmen siswa, bimbingan belajar, dan konsultasi akademik</p>
          </div>

          <div class="group bg-paper rounded-2xl p-6 border border-paper-300 hover:border-accent-300 hover:shadow-md transition-all duration-300 h-full">
            <div class="w-11 h-11 rounded-lg flex items-center justify-center mb-4 bg-accent-100 text-accent-600 border border-accent-200 group-hover:bg-accent-500 group-hover:text-white transition-colors">
              <Icon name="heart" class="w-5 h-5" />
            </div>
            <h3 class="font-semibold text-base lg:text-lg text-ink mb-2">Psikologi Keluarga</h3>
            <p class="text-sm text-ink-soft leading-relaxed">Konseling keluarga, parenting, dan terapi relasi</p>
          </div>

          <div class="group bg-paper rounded-2xl p-6 border border-paper-300 hover:border-accent-300 hover:shadow-md transition-all duration-300 h-full">
            <div class="w-11 h-11 rounded-lg flex items-center justify-center mb-4 bg-accent-100 text-accent-600 border border-accent-200 group-hover:bg-accent-500 group-hover:text-white transition-colors">
              <Icon name="compass" class="w-5 h-5" />
            </div>
            <h3 class="font-semibold text-base lg:text-lg text-ink mb-2">CPMI &amp; Pekerja Migran</h3>
            <p class="text-sm text-ink-soft leading-relaxed">Asesmen kesehatan mental dan persiapan keberangkatan</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
