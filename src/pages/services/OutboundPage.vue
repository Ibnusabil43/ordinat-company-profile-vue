<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue'

interface Benefit {
  number: number
  color: string
  title: string
  description: string
}

const benefits: Benefit[] = [
  {
    number: 1,
    color: 'blue-600 to-blue-700',
    title: 'Membangun Kepercayaan',
    description: 'Kegiatan outbound menumbuhkan rasa percaya antar anggota tim melalui aktivitas yang membutuhkan dukungan dan kerjasama erat.'
  },
  {
    number: 2,
    color: 'purple-600 to-purple-700',
    title: 'Kerja Sama Tim',
    description: 'Peserta belajar pentingnya kolaborasi, komunikasi, dan saling melengkapi untuk mencapai tujuan bersama.'
  },
  {
    number: 3,
    color: 'blue-500 to-purple-500',
    title: 'Kepemimpinan',
    description: 'Mengasah kemampuan memimpin, mengambil keputusan, dan mengarahkan tim dalam situasi yang penuh tantangan.'
  },
  {
    number: 4,
    color: 'purple-500 to-blue-500',
    title: 'Problem Solving',
    description: 'Melatih kemampuan berpikir kreatif dan mencari solusi terbaik dalam menghadapi berbagai tantangan di lapangan.'
  },
  {
    number: 5,
    color: 'blue-600 to-purple-600',
    title: 'Motivasi & Semangat',
    description: 'Membangkitkan antusiasme, semangat kerja, dan energi positif yang dapat terbawa ke lingkungan kerja sehari-hari.'
  },
  {
    number: 6,
    color: 'purple-600 to-blue-600',
    title: 'Refleksi & Pembelajaran',
    description: 'Setiap aktivitas diikuti dengan sesi refleksi untuk menarik makna dan mengaitkan pengalaman dengan situasi kerja nyata.'
  }
]
</script>

<template>
  <DefaultLayout>
    <!-- Hero Header -->
    <section class="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-12 sm:py-16">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-4 mb-4 lg:mb-6">
          <div class="w-14 h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
            <svg class="w-7 h-7 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold">Outbound Training</h1>
        </div>
        <p class="text-lg sm:text-xl text-blue-100 mb-4 lg:mb-6">
          Membangun Tim yang Solid melalui Petualangan dan Tantangan
        </p>
        <p class="text-base lg:text-lg text-blue-50 leading-relaxed">
          Program outbound dari Ordinat Cakrawala dirancang untuk memperkuat kohesivitas tim, meningkatkan motivasi, dan membangun karakter kepemimpinan melalui serangkaian aktivitas outdoor yang menantang, menyenangkan, dan penuh makna.
        </p>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-12 sm:py-16 lg:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 lg:mb-12">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Manfaat Outbound Training
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <div v-for="benefit in benefits" :key="benefit.number" :class="`bg-gradient-to-br from-${benefit.color} text-white rounded-2xl p-6 lg:p-8 shadow-lg relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group`">
            <div class="absolute top-4 right-4 w-12 h-12 lg:w-14 lg:h-14 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-xl lg:text-2xl font-bold">
              {{ benefit.number }}
            </div>
            <h3 class="text-lg lg:text-xl font-bold mb-4 pr-16">{{ benefit.title }}</h3>
            <p class="text-sm lg:text-base text-white/90 leading-relaxed">{{ benefit.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Activity Types -->
    <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-purple-50/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 lg:mb-12">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Jenis Aktivitas
          </h2>
        </div>

        <div class="grid lg:grid-cols-2 gap-6 lg:gap-8">
          <!-- Low Impact Activities -->
          <div class="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg class="w-7 h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-xl lg:text-2xl font-bold text-gray-900">Low Impact Activities</h3>
            </div>
            <p class="text-sm lg:text-base text-gray-700 mb-6">
              Aktivitas dengan intensitas ringan, cocok untuk semua kalangan, menekankan komunikasi, kreativitas, dan kerja sama tim.
            </p>
            <ul class="space-y-3">
              <li class="flex items-center gap-3">
                <span class="text-blue-600 font-bold text-lg flex-shrink-0">•</span>
                <span class="text-sm lg:text-base text-gray-700">Ice breaking dan energizer</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="text-blue-600 font-bold text-lg flex-shrink-0">•</span>
                <span class="text-sm lg:text-base text-gray-700">Trust building games</span>
              </li>
              <li class="flex items-start gap-3">
                <span class="text-blue-600 font-bold text-lg mt-0.5">•</span>
                <span class="text-sm lg:text-base text-gray-700">Strategic games dan simulasi</span>
              </li>
            </ul>
          </div>

          <!-- High Impact Activities -->
          <div class="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-xl">
            <div class="flex items-center gap-4 mb-6">
              <div class="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-2xl flex items-center justify-center flex-shrink-0">
                <svg class="w-7 h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 class="text-xl lg:text-2xl font-bold text-gray-900">High Impact Activities</h3>
            </div>
            <p class="text-sm lg:text-base text-gray-700 mb-6">
              Aktivitas dengan intensitas tinggi yang menantang fisik dan mental, membangun keberanian, kepercayaan diri, dan solidaritas tim.
            </p>
            <ul class="space-y-3">
              <li class="flex items-center gap-3">
                <span class="text-purple-600 font-bold text-lg flex-shrink-0">•</span>
                <span class="text-sm lg:text-base text-gray-700">Flying fox dan rappelling</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="text-purple-600 font-bold text-lg flex-shrink-0">•</span>
                <span class="text-sm lg:text-base text-gray-700">High ropes dan obstacle course</span>
              </li>
              <li class="flex items-center gap-3">
                <span class="text-purple-600 font-bold text-lg flex-shrink-0">•</span>
                <span class="text-sm lg:text-base text-gray-700">Team challenge activities</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 lg:p-8">
          <p class="text-sm lg:text-base text-gray-700 leading-relaxed">
            <strong class="text-gray-900">Catatan:</strong> Semua aktivitas dirancang dan dipandu oleh fasilitator berpengalaman dengan standar keselamatan yang ketat. Kami menyesuaikan jenis dan intensitas aktivitas berdasarkan karakteristik peserta, tujuan program, dan kondisi kesehatan tim.
          </p>
        </div>
      </div>
    </section>

    <!-- Process Overview -->
    <section class="py-12 sm:py-16 lg:py-20 bg-white">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 lg:mb-12">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Alur Program Outbound
          </h2>
        </div>

        <div class="grid md:grid-cols-4 gap-4 lg:gap-6">
          <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center">
            <div class="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white text-xl lg:text-2xl font-bold">1</span>
            </div>
            <h3 class="font-bold text-gray-900 mb-2 text-sm lg:text-base">Pre-Assessment</h3>
            <p class="text-xs lg:text-sm text-gray-700">Analisis kebutuhan tim dan tujuan program</p>
          </div>

          <div class="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 text-center">
            <div class="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white text-xl lg:text-2xl font-bold">2</span>
            </div>
            <h3 class="font-bold text-gray-900 mb-2 text-sm lg:text-base">Design Program</h3>
            <p class="text-xs lg:text-sm text-gray-700">Merancang rangkaian aktivitas yang sesuai</p>
          </div>

          <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center">
            <div class="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white text-xl lg:text-2xl font-bold">3</span>
            </div>
            <h3 class="font-bold text-gray-900 mb-2 text-sm lg:text-base">Pelaksanaan</h3>
            <p class="text-xs lg:text-sm text-gray-700">Aktivitas outbound dipandu fasilitator</p>
          </div>

          <div class="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 text-center">
            <div class="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <span class="text-white text-xl lg:text-2xl font-bold">4</span>
            </div>
            <h3 class="font-bold text-gray-900 mb-2 text-sm lg:text-base">Evaluasi & Refleksi</h3>
            <p class="text-xs lg:text-sm text-gray-700">Pemaknaan pengalaman dan rekomendasi</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">Wujudkan Tim yang Kompak dan Solid</h2>
        <p class="text-base sm:text-lg text-blue-100 mb-6 lg:mb-8 max-w-3xl mx-auto">
          Hubungi kami untuk merancang program outbound training yang sesuai dengan kebutuhan tim dan organisasi Anda. Mari ciptakan pengalaman yang berkesan dan bermakna!
        </p>
        <RouterLink
          to="/kontak"
          class="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group"
        >
          Konsultasi Program Outbound
          <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </RouterLink>
      </div>
    </section>
  </DefaultLayout>
</template>
