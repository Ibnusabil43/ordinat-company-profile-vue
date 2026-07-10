<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import irmaPhoto from '@/assets/IrmaRosdiyantiPhotos/IrmaRosdiyanti.jpeg';
</script>

<template>
  <DefaultLayout>
    <!-- Hero Header with Large Photo -->
    <section class="relative overflow-hidden bg-primary-800 text-white py-14 sm:py-16 lg:py-24">
      <div class="pointer-events-none absolute -top-16 -right-10 w-96 h-96 rounded-full bg-primary-700/50" aria-hidden="true"></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-4 lg:gap-6 items-center">
          <!-- Photo Section -->
          <div class="order-1 lg:order-1 flex justify-center lg:justify-start">
            <div class="relative">
              <div class="absolute inset-0 bg-accent-400/20 rounded-3xl blur-2xl transform translate-x-4 translate-y-4"></div>
              <img :src="irmaPhoto" alt="Irma Rosdiyanti, S.Psi., Psikolog" class="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl object-cover shadow-2xl ring-4 ring-white/10" />
            </div>
          </div>

          <!-- Text Section -->
          <div class="order-2 lg:order-2 text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4 lg:mb-6">
              <Icon name="shield" class="w-5 h-5" />
              <span class="text-sm font-semibold">Psikolog Klinis Bersertifikat</span>
            </div>
            <h1 class="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 lg:mb-6 leading-tight">Irma Rosdiyanti, S.Psi., Psikolog</h1>
            <p class="text-xl sm:text-2xl text-accent-300 mb-6 lg:mb-8 font-medium">Pendiri & Lead Psychologist</p>
            <div class="flex flex-wrap gap-3 justify-center lg:justify-start">
              <div class="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                <svg class="w-5 h-5 text-primary-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span class="text-sm font-medium">25+ Tahun Pengalaman</span>
              </div>
              <div class="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg">
                <Icon name="shield" class="w-5 h-5 text-primary-200" />
                <span class="text-sm font-medium">Terdaftar HIMPSI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Profile Overview -->
    <section class="py-14 sm:py-16 lg:py-20 bg-paper">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-3xl border border-paper-300 p-6 sm:p-8 lg:p-12">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-primary-100 text-primary-700 border border-primary-200">
              <Icon name="profile" class="w-6 h-6" />
            </div>
            <h2 class="font-display text-2xl lg:text-3xl font-semibold text-ink">Tentang</h2>
          </div>
          <p class="text-base lg:text-lg text-ink-soft leading-relaxed mb-6">
            Irma Rosdiyanti adalah psikolog klinis yang telah berpengalaman lebih dari 25 tahun dalam bidang psikologi klinis, industri-organisasi, dan pendidikan. Sebagai pendiri Ordinat Cakrawala, beliau memimpin tim psikolog profesional
            yang melayani kebutuhan asesmen, konseling, dan pengembangan SDM di berbagai sektor.
          </p>
          <p class="text-base lg:text-lg text-ink-soft leading-relaxed">
            Dengan latar belakang akademis yang kuat dan sertifikasi profesi yang lengkap, Irma berkomitmen untuk memberikan layanan psikologi yang berkualitas, etis, dan berdampak nyata bagi klien—baik individu, keluarga, maupun
            organisasi.
          </p>
        </div>
      </div>
    </section>

    <!-- HIMPSI Registration -->
    <section class="py-14 sm:py-16 lg:py-24 bg-primary-50/40 border-y border-paper-300">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-10 lg:mb-12">
          <span class="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Legalitas</span>
          <h2 class="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight mt-3 mb-4">Registrasi HIMPSI</h2>
          <p class="text-sm lg:text-base text-ink-soft">Terdaftar sebagai Psikolog Klinis di Himpunan Psikologi Indonesia</p>
        </div>

        <div class="grid md:grid-cols-2 gap-5 lg:gap-6 mb-8">
          <div class="bg-primary-700 text-white rounded-2xl p-6 lg:p-8">
            <div class="flex items-center gap-3 mb-4">
              <Icon name="document" class="w-8 h-8 lg:w-10 lg:h-10" />
              <h3 class="text-xl lg:text-2xl font-semibold">STR (Surat Tanda Registrasi)</h3>
            </div>
            <div class="font-display text-3xl lg:text-4xl font-semibold mb-2">20110293</div>
            <p class="text-primary-100 text-sm">Nomor Registrasi Psikolog</p>
          </div>

          <div class="bg-accent-500 text-white rounded-2xl p-6 lg:p-8">
            <div class="flex items-center gap-3 mb-4">
              <Icon name="shield" class="w-8 h-8 lg:w-10 lg:h-10" />
              <h3 class="text-xl lg:text-2xl font-semibold">SIPP (Surat Izin Praktik)</h3>
            </div>
            <div class="font-display text-2xl lg:text-3xl font-semibold mb-2">SIPP. 20110293-2021-02-0734</div>
            <p class="text-accent-100 text-sm">Izin Praktik Psikologi</p>
          </div>
        </div>

        <div class="text-center">
          <a
            href="https://himpsi.or.id/cari-psikolog/hasil?token=Oy8E"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-3 px-6 lg:px-8 py-3 lg:py-4 bg-white text-primary-700 font-semibold rounded-full hover:bg-primary-50 transition-all shadow-sm border border-primary-200"
          >
            <Icon name="document" class="w-5 h-5 lg:w-6 lg:h-6" />
            <span>Verifikasi di Website HIMPSI</span>
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.75" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>

    <!-- Expertise & Experience -->
    <section class="py-14 sm:py-16 lg:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <!-- Bidang Keahlian -->
          <div class="bg-paper rounded-2xl p-6 lg:p-8 border border-paper-300">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center bg-primary-100 text-primary-700 border border-primary-200">
                <Icon name="briefcase" class="w-6 h-6 lg:w-7 lg:h-7" />
              </div>
              <h3 class="text-xl lg:text-2xl font-semibold text-ink">Bidang Keahlian</h3>
            </div>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <span class="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg class="w-3 h-3 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span class="text-sm lg:text-base text-ink-soft">Psikologi Klinis</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg class="w-3 h-3 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span class="text-sm lg:text-base text-ink-soft">Assessment & Diagnosis Psikologi</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg class="w-3 h-3 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span class="text-sm lg:text-base text-ink-soft">Konseling & Psikoterapi</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg class="w-3 h-3 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span class="text-sm lg:text-base text-ink-soft">Psikologi Industri & Organisasi</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-primary-100 flex items-center justify-center">
                  <svg class="w-3 h-3 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span class="text-sm lg:text-base text-ink-soft">Psikologi Pendidikan</span>
              </li>
            </ul>
          </div>

          <!-- Pengalaman Praktik -->
          <div class="bg-paper rounded-2xl p-6 lg:p-8 border border-paper-300">
            <div class="flex items-center gap-3 mb-6">
              <div class="w-12 h-12 lg:w-14 lg:h-14 rounded-xl flex items-center justify-center bg-accent-100 text-accent-600 border border-accent-200">
                <Icon name="education" class="w-6 h-6 lg:w-7 lg:h-7" />
              </div>
              <h3 class="text-xl lg:text-2xl font-semibold text-ink">Pengalaman Praktik</h3>
            </div>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <span class="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-accent-100 flex items-center justify-center">
                  <svg class="w-3 h-3 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span class="text-sm lg:text-base text-ink-soft">Praktik sejak 1997</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-accent-100 flex items-center justify-center">
                  <svg class="w-3 h-3 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span class="text-sm lg:text-base text-ink-soft">Psikolog Klinis Madya - Lapas Narkotika Kelas IIA Cirebon</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-accent-100 flex items-center justify-center">
                  <svg class="w-3 h-3 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span class="text-sm lg:text-base text-ink-soft">Anggota Ikatan Psikologi Klinis Indonesia</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-accent-100 flex items-center justify-center">
                  <svg class="w-3 h-3 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span class="text-sm lg:text-base text-ink-soft">Memiliki Surat Izin Praktik Psikologi (SIPP)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Offered -->
    <section class="py-14 sm:py-16 lg:py-24 bg-primary-50/40 border-y border-paper-300">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="bg-white rounded-3xl border border-paper-300 p-6 sm:p-8 lg:p-12">
          <div class="flex items-center gap-4 mb-8">
            <div class="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center bg-primary-100 text-primary-700 border border-primary-200">
              <Icon name="heart" class="w-7 h-7 lg:w-8 lg:h-8" />
            </div>
            <h2 class="font-display text-2xl lg:text-3xl font-semibold text-ink">Layanan yang Ditawarkan</h2>
          </div>

          <div class="grid md:grid-cols-2 gap-5 lg:gap-6">
            <div class="bg-paper rounded-xl p-6 border border-paper-300">
              <h3 class="text-lg lg:text-xl font-semibold text-ink mb-4">Asesmen & Psikotes</h3>
              <ul class="space-y-2">
                <li class="flex items-start gap-2 text-sm lg:text-base text-ink-soft">
                  <span class="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                  <span>Psikotes untuk rekrutmen dan promosi karyawan</span>
                </li>
                <li class="flex items-start gap-2 text-sm lg:text-base text-ink-soft">
                  <span class="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                  <span>Asesmen potensi siswa dan penjurusan</span>
                </li>
                <li class="flex items-start gap-2 text-sm lg:text-base text-ink-soft">
                  <span class="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-400"></span>
                  <span>Assessment center untuk calon pemimpin</span>
                </li>
              </ul>
            </div>

            <div class="bg-paper rounded-xl p-6 border border-paper-300">
              <h3 class="text-lg lg:text-xl font-semibold text-ink mb-4">Konseling & Terapi</h3>
              <ul class="space-y-2">
                <li class="flex items-start gap-2 text-sm lg:text-base text-ink-soft">
                  <span class="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent-400"></span>
                  <span>Konseling individu, keluarga, dan kelompok</span>
                </li>
                <li class="flex items-start gap-2 text-sm lg:text-base text-ink-soft">
                  <span class="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent-400"></span>
                  <span>Terapi untuk masalah psikologis dan emosional</span>
                </li>
                <li class="flex items-start gap-2 text-sm lg:text-base text-ink-soft">
                  <span class="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent-400"></span>
                  <span>Konseling adiksi dan rehabilitasi psikologis</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative overflow-hidden bg-primary-800 text-white py-14 sm:py-16 lg:py-20">
      <div class="pointer-events-none absolute -bottom-20 -right-10 w-80 h-80 rounded-full bg-primary-700/50" aria-hidden="true"></div>
      <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 lg:mb-6">Konsultasi Psikologi</h2>
        <p class="text-base sm:text-lg text-primary-100 mb-6 lg:mb-8 max-w-3xl mx-auto">Untuk berkonsultasi atau membuat jadwal asesmen psikologi, silakan hubungi kami. Semua informasi dijaga kerahasiaannya sesuai kode etik psikolog.</p>
        <RouterLink to="/kontak" class="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-accent-500 text-white font-semibold rounded-full hover:bg-accent-400 transition-all shadow-lg active:scale-[0.98] group">
          Hubungi Kami
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </RouterLink>
      </div>
    </section>
  </DefaultLayout>
</template>
