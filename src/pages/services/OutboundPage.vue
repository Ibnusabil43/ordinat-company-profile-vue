<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';

interface Benefit {
  number: number;
  variant: 'primary' | 'accent';
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    number: 1,
    variant: 'primary',
    title: 'Membangun Kepercayaan',
    description: 'Kegiatan outbound menumbuhkan rasa percaya antar anggota tim melalui aktivitas yang membutuhkan dukungan dan kerjasama erat.',
  },
  {
    number: 2,
    variant: 'accent',
    title: 'Kerja Sama Tim',
    description: 'Peserta belajar pentingnya kolaborasi, komunikasi, dan saling melengkapi untuk mencapai tujuan bersama.',
  },
  {
    number: 3,
    variant: 'primary',
    title: 'Kepemimpinan',
    description: 'Mengasah kemampuan memimpin, mengambil keputusan, dan mengarahkan tim dalam situasi yang penuh tantangan.',
  },
  {
    number: 4,
    variant: 'accent',
    title: 'Problem Solving',
    description: 'Melatih kemampuan berpikir kreatif dan mencari solusi terbaik dalam menghadapi berbagai tantangan di lapangan.',
  },
  {
    number: 5,
    variant: 'primary',
    title: 'Motivasi & Semangat',
    description: 'Membangkitkan antusiasme, semangat kerja, dan energi positif yang dapat terbawa ke lingkungan kerja sehari-hari.',
  },
  {
    number: 6,
    variant: 'accent',
    title: 'Refleksi & Pembelajaran',
    description: 'Setiap aktivitas diikuti dengan sesi refleksi untuk menarik makna dan mengaitkan pengalaman dengan situasi kerja nyata.',
  },
];
</script>

<template>
  <DefaultLayout>
    <!-- Hero Header -->
    <section class="relative overflow-hidden bg-primary-800 text-white py-16 sm:py-20">
      <div class="pointer-events-none absolute -top-16 -right-10 w-80 h-80 rounded-full bg-primary-700/50" aria-hidden="true"></div>
      <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4 mb-4 lg:mb-6">
          <div class="w-14 h-14 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
            <Icon name="trail" class="w-7 h-7 lg:w-8 lg:h-8" />
          </div>
          <h1 class="font-display text-3xl sm:text-4xl lg:text-[3.25rem] font-semibold leading-tight">Outbound Training</h1>
        </div>
        <p class="text-lg sm:text-xl text-accent-300 mb-4 lg:mb-6 font-medium">Membangun Tim yang Solid melalui Petualangan dan Tantangan</p>
        <p class="text-base lg:text-lg text-primary-100 leading-relaxed">
          Program outbound dari Ordinat Cakrawala dirancang untuk memperkuat kohesivitas tim, meningkatkan motivasi, dan membangun karakter kepemimpinan melalui serangkaian aktivitas outdoor yang menantang, menyenangkan, dan penuh makna.
        </p>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-14 sm:py-16 lg:py-24 bg-paper">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-10 lg:mb-12">
          <span class="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Manfaat</span>
          <h2 class="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight mt-3">Manfaat Outbound Training</h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <div
            v-for="benefit in benefits"
            :key="benefit.number"
            :class="[
              'rounded-2xl p-6 lg:p-8 relative overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-white',
              benefit.variant === 'primary' ? 'bg-primary-700' : 'bg-accent-500'
            ]"
          >
            <div class="absolute top-4 right-4 w-12 h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center font-display text-lg lg:text-xl font-semibold">
              {{ benefit.number }}
            </div>
            <h3 class="text-lg lg:text-xl font-semibold mb-4 pr-16">{{ benefit.title }}</h3>
            <p class="text-sm lg:text-base text-white/90 leading-relaxed">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Activity Types -->
    <section class="py-14 sm:py-16 lg:py-24 bg-primary-50/40 border-y border-paper-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-10 lg:mb-12">
          <span class="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Aktivitas</span>
          <h2 class="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight mt-3">Jenis Aktivitas</h2>
        </div>

        <div class="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <!-- Low Impact Activities -->
          <div class="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-paper-300 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 bg-primary-100 text-primary-700 border border-primary-200">
                <Icon name="people" class="w-7 h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 class="text-xl lg:text-2xl font-semibold text-ink">Low Impact Activities</h3>
            </div>
            <p class="text-sm lg:text-base text-ink-soft mb-6">Aktivitas dengan intensitas ringan, cocok untuk semua kalangan, menekankan komunikasi, kreativitas, dan kerja sama tim.</p>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <span class="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                <span class="text-sm lg:text-base text-ink-soft">Ice breaking dan energizer</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                <span class="text-sm lg:text-base text-ink-soft">Trust building games</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                <span class="text-sm lg:text-base text-ink-soft">Strategic games dan simulasi</span>
              </li>
            </ul>
          </div>

          <!-- High Impact Activities -->
          <div class="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-paper-300 hover:border-accent-300 hover:shadow-lg transition-all duration-300">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center flex-shrink-0 bg-accent-100 text-accent-600 border border-accent-200">
                <Icon name="spark" class="w-7 h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 class="text-xl lg:text-2xl font-semibold text-ink">High Impact Activities</h3>
            </div>
            <p class="text-sm lg:text-base text-ink-soft mb-6">Aktivitas dengan intensitas tinggi yang menantang fisik dan mental, membangun keberanian, kepercayaan diri, dan solidaritas tim.</p>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <span class="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent-500"></span>
                <span class="text-sm lg:text-base text-ink-soft">Flying fox dan rappelling</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent-500"></span>
                <span class="text-sm lg:text-base text-ink-soft">High ropes dan obstacle course</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-accent-500"></span>
                <span class="text-sm lg:text-base text-ink-soft">Team challenge activities</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-6 lg:mt-8 bg-white rounded-2xl p-6 lg:p-8 border border-paper-300">
          <p class="text-sm lg:text-base text-ink-soft leading-relaxed">
            <strong class="text-ink">Catatan:</strong> Semua aktivitas dirancang dan dipandu oleh fasilitator berpengalaman dengan standar keselamatan yang ketat. Kami menyesuaikan jenis dan intensitas aktivitas berdasarkan
            karakteristik peserta, tujuan program, dan kondisi kesehatan tim.
          </p>
        </div>
      </div>
    </section>

    <!-- Process Overview -->
    <section class="py-14 sm:py-16 lg:py-24 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-10 lg:mb-12">
          <span class="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Alur</span>
          <h2 class="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight mt-3">Alur Program Outbound</h2>
        </div>

        <div class="grid md:grid-cols-4 gap-4 lg:gap-5">
          <div class="bg-paper rounded-xl p-6 text-center border border-paper-300 hover:border-primary-300 hover:shadow-md transition-all duration-300">
            <div class="font-display text-2xl font-semibold text-primary-300 mb-3">01</div>
            <h3 class="font-semibold text-ink mb-2 text-sm lg:text-base">Pre-Assessment</h3>
            <p class="text-xs lg:text-sm text-ink-soft">Analisis kebutuhan tim dan tujuan program</p>
          </div>

          <div class="bg-paper rounded-xl p-6 text-center border border-paper-300 hover:border-primary-300 hover:shadow-md transition-all duration-300">
            <div class="font-display text-2xl font-semibold text-primary-300 mb-3">02</div>
            <h3 class="font-semibold text-ink mb-2 text-sm lg:text-base">Design Program</h3>
            <p class="text-xs lg:text-sm text-ink-soft">Merancang rangkaian aktivitas yang sesuai</p>
          </div>

          <div class="bg-paper rounded-xl p-6 text-center border border-paper-300 hover:border-primary-300 hover:shadow-md transition-all duration-300">
            <div class="font-display text-2xl font-semibold text-primary-300 mb-3">03</div>
            <h3 class="font-semibold text-ink mb-2 text-sm lg:text-base">Pelaksanaan</h3>
            <p class="text-xs lg:text-sm text-ink-soft">Aktivitas outbound dipandu fasilitator</p>
          </div>

          <div class="bg-paper rounded-xl p-6 text-center border border-paper-300 hover:border-primary-300 hover:shadow-md transition-all duration-300">
            <div class="font-display text-2xl font-semibold text-primary-300 mb-3">04</div>
            <h3 class="font-semibold text-ink mb-2 text-sm lg:text-base">Evaluasi & Refleksi</h3>
            <p class="text-xs lg:text-sm text-ink-soft">Pemaknaan pengalaman dan rekomendasi</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative overflow-hidden bg-primary-800 text-white py-14 sm:py-16 lg:py-20">
      <div class="pointer-events-none absolute -bottom-20 -right-10 w-80 h-80 rounded-full bg-primary-700/50" aria-hidden="true"></div>
      <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 lg:mb-6">Wujudkan Tim yang Kompak dan Solid</h2>
        <p class="text-base sm:text-lg text-primary-100 mb-6 lg:mb-8 max-w-3xl mx-auto">
          Hubungi kami untuk merancang program outbound training yang sesuai dengan kebutuhan tim dan organisasi Anda. Mari ciptakan pengalaman yang berkesan dan bermakna!
        </p>
        <RouterLink to="/kontak" class="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-accent-500 text-white font-semibold rounded-full hover:bg-accent-400 transition-all shadow-lg active:scale-[0.98] group">
          Konsultasi Program Outbound
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </RouterLink>
      </div>
    </section>
  </DefaultLayout>
</template>
