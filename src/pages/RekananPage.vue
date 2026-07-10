<script setup lang="ts">
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import doc1 from '@/assets/Documentation/doc1.jpg';
import doc2 from '@/assets/Documentation/doc2.jpg';
import doc3 from '@/assets/Documentation/doc3.jpg';
import doc4 from '@/assets/Documentation/doc4.jpg';
import doc5 from '@/assets/Documentation/doc5.jpg';
import doc6 from '@/assets/Documentation/doc6.jpg';
import doc7 from '@/assets/Documentation/doc7.jpg';
import doc8 from '@/assets/Documentation/doc8.jpg';
import doc9 from '@/assets/Documentation/doc9.jpg';

interface Category {
  icon: string;
  title: string;
  examples: string[];
}

const categories: Category[] = [
  {
    icon: 'education',
    title: 'SEKOLAH',
    examples: [
      'SMAN 1 Cirebon',
      'SMAN 2 Cirebon',
      'SMAN 3 Cirebon',
      'SMAN 4 Cirebon',
      'SMAN 6 Cirebon',
      'SMAN 7 Cirebon',
      'SMAN 1 Babakan',
      'SMAN 1 Beber',
      'SMAN 1 Gegesik',
      'SMAN 1 Jamblang',
      'SMAN 1 Karangwareng',
      'SMAN 1 Kroya',
      'SMAN 1 Lemahabang',
      'SMAN 1 Losari',
      'SMAN 1 Palimanan',
      'SMAN 1 Plumbon',
      'SMAN 1 Sumber',
      'SMAN 1 Suranenggala',
      'SMAN 1 Tengah Tani',
      'SMAN 1 Waled',
      'SMAN 1 Arjawinangun',
      'SMA Negeri 1 Darma',
      'SMA Negeri 2 Cirebon',
      'SMA Plus NU Panguragan',
      'MAN 1 Cirebon',
      'MAN 5 Cirebon',
      'MTs Tunas Cendekia',
      'MAS Tunas Cendekia',
      'MTs Husnul Khotimah',
      'MA Husnul Khotimah',
      'Pesantren Al-Irsyad Tengaran 2',
      'SMAIT Al Multazam',
      'SMAIT Al Multazam 2',
      'SMAIT As-Syifa Jalancagak',
      'SMAIT As-Syifa Wanareja',
      'SMAIT As-Syifa Sagalaherang',
      'SMK Telkom Sekar Kemuning',
      'SMK Al Irsyad',
      'SMK Buana Bahari',
      'SMK Negeri 1 Luragung',
      'SMP Binaul Ummah',
    ],
  },
  {
    icon: 'building',
    title: 'PERUSAHAAN',
    examples: [
      'Rumah Sakit Pertamina Cirebon',
      'RSUD Indramayu',
      'Rumah Sakit Pertamina Balongan Indramayu',
      'RS Sentot Indramayu',
      'PT. BPR Mitra Harmoni Indramayiu',
      'PT. BPR Nusamba Sukaraja Sukabumi',
      'PT. BPR Nusamba Purwakarta',
      'PT. BPR Nusamba Sumedang',
      'PT. BPR Nusamba Tasikmalaya',
      'PT. BPR Nusamba Tanjung Sari',
      'PT. BPR Syariah Mitra Harmoni Bandung',
      'BPR Sumber Cirebon',
      'BPR Arjawinangun Cirebon',
      'BPR Babakan Cirebon',
      'BPR Ciwaringin Cirebon',
      'BPR Gegesik Cirebon',
      'BPR Cirebon Selatan',
      'Equity Finance Cirebon',
      'PT. Permodalan Nasional Madani Cirebon',
      'PT. Yolita Jaya Indonesia',
      'PT. Merapi Utama Pharma',
      'PT. Surya Donasin',
      'PT. Mitra Karya Prima Jemursari Surabaya',
      'PT. Pertamina Training & Consulting Jakarta',
      'PT. Kimia Farma Apotek',
      'PT. Jakarta Maju Bersama',
      'PT. Putra Jabung',
      'PT. Kalip',
      'PT. Mitra Sinergi Sukses',
      'PT. Pandu',
      'PT. Putri Mandiri',
      'PT. Wahana Berkah',
      'PT. Brata',
      'Seleksi Karyawan PLTU Sumur Adem Indramayu',
      'EP Pertamina Asset 3 JTB',
      'PT. Jamsostek Cab Tasikmalaya',
      'PT. Jamsostek Cab Cirebon',
    ],
  },
  {
    icon: 'layers',
    title: 'LPK / BLK',
    examples: [
      'LPK Bahasa Korea Soul Indramayu',
      'LPK Bahasa Korea Hanaman Indramayu',
      'LPK Bahasa Korea Mugunghwa Indramayu',
      'LPK Bahasa Korea GTC Indramayu',
      'LPK Bahasa Korea KLC Indramayu',
      'LPK Bahasa Korea KHI Indramayu',
      'LPK Bahasa Korea Yoboseo Indramayu',
      'LPK Bahasa Korea Mitra Indramayu',
      'LPK Bahasa Korea Bina Insan Mandiri Brebes',
      'BLK Kallian Jaya',
      'BLK Nanta',
    ],
  },
];


const dokumentasi = [
  { src: doc1, alt: 'Dokumentasi 1' },
  { src: doc2, alt: 'Dokumentasi 2' },
  { src: doc3, alt: 'Dokumentasi 3' },
  { src: doc4, alt: 'Dokumentasi 4' },
  { src: doc5, alt: 'Dokumentasi 5' },
  { src: doc6, alt: 'Dokumentasi 6' },
  { src: doc7, alt: 'Dokumentasi 7' },
  { src: doc8, alt: 'Dokumentasi 8' },
  { src: doc9, alt: 'Dokumentasi 9' },
];

// Count total clients
const totalClients = categories.reduce((sum, category) => sum + category.examples.length, 0);
</script>

<template>
  <DefaultLayout>
    <!-- Hero Header -->
    <section class="relative overflow-hidden bg-primary-800 text-white py-16 sm:py-20">
      <div class="pointer-events-none absolute -top-16 -right-10 w-80 h-80 rounded-full bg-primary-700/50" aria-hidden="true"></div>
      <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="font-display text-4xl sm:text-5xl lg:text-[3.25rem] font-semibold mb-4 leading-tight">Sekolah & Lembaga Rekanan</h1>
        <p class="text-lg sm:text-xl text-primary-100 mb-6 max-w-3xl mx-auto">Dipercaya oleh Berbagai Sekolah dan Lembaga Pendidikan</p>

        <!-- Client Count Badge -->
        <div class="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10">
          <div class="flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl">
            <Icon name="shield" class="w-6 h-6 text-white" />
          </div>
          <div class="text-left">
            <div class="font-display text-3xl font-semibold text-white">95+</div>
            <div class="text-sm text-primary-100">Klien Terpercaya</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Description -->
    <section class="py-14 sm:py-16 lg:py-20 bg-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p class="text-base lg:text-lg text-ink-soft leading-relaxed text-center max-w-4xl mx-auto">
          Ordinat Cakrawala telah bekerja sama dengan puluhan sekolah menengah, madrasah, dan lembaga pendidikan di wilayah Cirebon, Indramayu, Kuningan, dan sekitarnya untuk penyelenggaraan psikotes klasikal, penjurusan, serta program
          pengembangan siswa.
        </p>
      </div>
    </section>

    <!-- Partners Grid -->
    <section class="py-14 sm:py-16 lg:py-24 bg-primary-50/40 border-y border-paper-300">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-3 gap-5 lg:gap-6">
          <div v-for="(category, index) in categories" :key="index" class="bg-white rounded-2xl p-6 lg:p-8 border border-paper-300 hover:border-primary-300 hover:shadow-lg transition-all duration-300">
            <!-- Icon -->
            <div class="flex justify-center mb-6">
              <div class="w-14 h-14 lg:w-16 lg:h-16 rounded-2xl flex items-center justify-center bg-primary-100 text-primary-700 border border-primary-200">
                <Icon :name="category.icon" class="w-7 h-7 lg:w-8 lg:h-8" />
              </div>
            </div>

            <!-- Title -->
            <h3 class="text-xl lg:text-2xl font-semibold text-ink mb-6 lg:mb-8 text-center">{{ category.title }}</h3>

            <!-- Partners List -->
            <ul class="space-y-2 lg:space-y-3 text-center max-h-96 overflow-y-auto">
              <li v-for="(example, idx) in category.examples" :key="idx" class="text-ink-soft text-xs lg:text-sm leading-relaxed">
                {{ example }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Documentation Section -->
    <section class="py-14 sm:py-16 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mb-10 lg:mb-12">
          <span class="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">Galeri</span>
          <h2 class="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-semibold text-ink leading-tight mt-3 mb-4">Dokumentasi Kegiatan</h2>
          <p class="text-base lg:text-lg text-ink-soft">Jejak Kegiatan Psikotes, Pelatihan, dan Pendampingan</p>
        </div>

        <div class="bg-paper rounded-3xl p-6 sm:p-8 lg:p-12 border border-paper-300">
          <p class="text-ink-soft leading-relaxed mb-6 lg:mb-8 text-sm lg:text-base text-center max-w-3xl mx-auto">
            Galeri ini menampilkan berbagai aktivitas yang telah kami selenggarakan, mulai dari psikotes klasikal di sekolah, workshop pengembangan diri, pelatihan organisasi, hingga kegiatan assessment bagi CPMI.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            <div v-for="(item, index) in dokumentasi" :key="index" class="group cursor-pointer">
              <div class="aspect-video bg-white rounded-xl overflow-hidden border border-paper-300 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <img :src="item.src" :alt="item.alt" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="relative overflow-hidden bg-primary-800 text-white py-14 sm:py-16 lg:py-20">
      <div class="pointer-events-none absolute -bottom-20 -right-10 w-80 h-80 rounded-full bg-primary-700/50" aria-hidden="true"></div>
      <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="font-display text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 lg:mb-6">Bergabung Menjadi Rekanan</h2>
        <p class="text-base sm:text-lg text-primary-100 mb-6 lg:mb-8 max-w-3xl mx-auto">Kami terbuka untuk menjalin kerja sama dengan sekolah dan lembaga pendidikan lainnya. Hubungi kami untuk informasi lebih lanjut.</p>
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
