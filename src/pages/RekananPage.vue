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
    icon: 'school',
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
    icon: 'book-open',
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

const iconPaths: Record<string, string> = {
  school:
    'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222',
  building: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
  'book-open':
    'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
};

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
    <section class="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-12 sm:py-16">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Sekolah & Lembaga Rekanan</h1>
        <p class="text-lg sm:text-xl text-blue-100 mb-6 max-w-3xl mx-auto">Dipercaya oleh Berbagai Sekolah dan Lembaga Pendidikan</p>

        <!-- Client Count Badge -->
        <div class="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/20">
          <div class="flex items-center justify-center w-12 h-12 bg-white/20 rounded-xl">
            <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </svg>
          </div>
          <div class="text-left">
            <div class="text-3xl font-bold text-white">95+</div>
            <div class="text-sm text-blue-100">Klien Terpercaya</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Description -->
    <section class="py-12 sm:py-16 lg:py-20 bg-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="space-y-4 lg:space-y-6 text-gray-700 leading-relaxed text-base lg:text-lg max-w-4xl mx-auto">
          <p>
            Ordinat Cakrawala telah menjalin kerja sama dengan berbagai sekolah menengah, madrasah, serta lembaga pendidikan di wilayah Cirebon, Indramayu, Kuningan, dan sekitarnya. Kolaborasi ini mencakup pelaksanaan psikotes klasikal,
            program penjurusan, serta berbagai kegiatan pengembangan potensi dan kesiapan siswa.
          </p>
          <p>
            Melalui pendekatan psikologi yang terstruktur dan berbasis ilmiah, kami mendukung institusi pendidikan dalam membantu siswa mengenali potensi diri, merencanakan jalur pendidikan yang sesuai, serta mempersiapkan diri menghadapi
            jenjang pendidikan dan tantangan masa depan.
          </p>
        </div>
      </div>
    </section>

    <!-- Partners Grid -->
    <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-3 gap-6 lg:gap-8">
          <div v-for="(category, index) in categories" :key="index" class="bg-white rounded-2xl p-6 lg:p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
            <!-- Icon -->
            <div class="flex justify-center mb-6">
              <div class="w-14 h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <svg class="w-7 h-7 lg:w-8 lg:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="iconPaths[category.icon]" />
                </svg>
              </div>
            </div>

            <!-- Title -->
            <h3 class="text-xl lg:text-2xl font-bold text-gray-900 mb-6 lg:mb-8 text-center">{{ category.title }}</h3>

            <!-- Partners List -->
            <ul class="space-y-2 lg:space-y-3 text-center max-h-96 overflow-y-auto">
              <li v-for="(example, idx) in category.examples" :key="idx" class="text-gray-700 text-xs lg:text-sm leading-relaxed">
                {{ example }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Documentation Section -->
    <section class="py-12 sm:py-16 lg:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 lg:mb-12">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Dokumentasi Kegiatan</h2>
          <p class="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">Jejak Kegiatan Psikotes, Pelatihan, dan Pendampingan</p>
        </div>

        <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 sm:p-8 lg:p-12 shadow-lg">
          <p class="text-gray-700 leading-relaxed mb-6 lg:mb-8 text-sm lg:text-base text-center">
            Galeri ini menampilkan berbagai aktivitas yang telah kami selenggarakan, mulai dari psikotes klasikal di sekolah, workshop pengembangan diri, pelatihan organisasi, hingga kegiatan assessment bagi CPMI.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            <div v-for="(item, index) in dokumentasi" :key="index" class="group cursor-pointer">
              <div class="aspect-video bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <img :src="item.src" :alt="item.alt" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">Bergabung Menjadi Rekanan</h2>
        <p class="text-base sm:text-lg text-blue-100 mb-6 lg:mb-8 max-w-3xl mx-auto">Kami terbuka untuk menjalin kerja sama dengan sekolah dan lembaga pendidikan lainnya. Hubungi kami untuk informasi lebih lanjut.</p>
        <RouterLink to="/kontak" class="inline-flex items-center px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 group">
          Hubungi Kami
          <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </RouterLink>
      </div>
    </section>
  </DefaultLayout>
</template>
