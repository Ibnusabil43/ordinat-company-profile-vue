<script setup lang="ts">
defineProps<{
  name: string
}>()
</script>

<template>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <!-- assessment: seal + check — psikotes, assessment, verified quality -->
    <template v-if="name === 'assessment'">
      <circle cx="12" cy="12" r="8" />
      <path d="M8.5 12.3l2.4 2.4 4.6-5" />
    </template>

    <!-- education: open book — psikologi pendidikan, sekolah, LPK -->
    <template v-else-if="name === 'education'">
      <path d="M12 6v13" />
      <path d="M12 6.5L4 8.5v10.5l8-2" />
      <path d="M12 6.5l8 2v10.5l-8-2" />
    </template>

    <!-- people: overlapping circles — konseling, tim, komunitas -->
    <template v-else-if="name === 'people'">
      <circle cx="9" cy="12" r="5.5" />
      <circle cx="15" cy="12" r="5.5" />
    </template>

    <!-- profile: single person — tentang, about -->
    <template v-else-if="name === 'profile'">
      <circle cx="12" cy="8.2" r="3.7" />
      <path d="M5 20c0-3.6 3.1-6.5 7-6.5s7 2.9 7 6.5" />
    </template>

    <!-- growth: ascending marks — training, pengembangan, motivasi kerja -->
    <template v-else-if="name === 'growth'">
      <path d="M5 18v-4.5" />
      <path d="M12 18v-8.5" />
      <path d="M19 18V6" />
    </template>

    <!-- trail: peaks + marker — outbound, petualangan -->
    <template v-else-if="name === 'trail'">
      <path d="M3 18l4.5-8 3.5 4.5 2.5-3.5 5.5 7" />
      <circle cx="15" cy="9" r="1.1" fill="currentColor" stroke="none" />
    </template>

    <!-- briefcase: professional / industri / bidang keahlian -->
    <template v-else-if="name === 'briefcase'">
      <rect x="4" y="8.5" width="16" height="10.5" rx="1.5" />
      <path d="M9 8.5V6.8a2 2 0 012-2h2a2 2 0 012 2v1.7" />
    </template>

    <!-- building: profil perusahaan -->
    <template v-else-if="name === 'building'">
      <rect x="4.5" y="10" width="6" height="9" />
      <rect x="13.5" y="5" width="6" height="14" />
    </template>

    <!-- target: bullseye — standar, tujuan, fokus asesmen -->
    <template v-else-if="name === 'target'">
      <circle cx="12" cy="12" r="7.5" />
      <circle cx="12" cy="12" r="3.8" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" stroke="none" />
    </template>

    <!-- mind: brain / intelektual -->
    <template v-else-if="name === 'mind'">
      <circle cx="12" cy="12" r="7.5" />
      <path d="M12 4.8v14.4" />
      <path d="M8 9l1.6 1.5L8 12l1.6 1.5L8 15" />
    </template>

    <!-- spark: motivasi / energi kerja -->
    <template v-else-if="name === 'spark'">
      <path d="M13 3L6.5 13.5H11L10 21l6.5-10.5H12z" fill="currentColor" stroke="none" />
    </template>

    <!-- idea: bulb — gaya belajar -->
    <template v-else-if="name === 'idea'">
      <circle cx="12" cy="10.5" r="5" />
      <path d="M12 15.5v2.7" />
      <path d="M9.6 21h4.8" />
      <path d="M12 3v1.4" />
      <path d="M6.3 6.3l1 1" />
      <path d="M17.7 6.3l-1 1" />
    </template>

    <!-- heart: kepribadian / keluarga / empati -->
    <template v-else-if="name === 'heart'">
      <circle cx="8.7" cy="9" r="3.4" />
      <circle cx="15.3" cy="9" r="3.4" />
      <path d="M5.4 11.3L12 19.5l6.6-8.2" />
    </template>

    <!-- shield: standar / legal / keamanan data -->
    <template v-else-if="name === 'shield'">
      <path d="M12 3.2l6.8 2.7v5.6c0 4.6-2.8 7.5-6.8 8.3-4-.8-6.8-3.7-6.8-8.3V5.9L12 3.2z" />
      <path d="M9 12l2 2 4-4.2" />
    </template>

    <!-- compass: arah / bakat minat / pendampingan -->
    <template v-else-if="name === 'compass'">
      <circle cx="12" cy="12" r="8" />
      <path d="M14.8 9.2l-1.6 4.4-4.4 1.6 1.6-4.4z" />
    </template>

    <!-- device: platform web / online -->
    <template v-else-if="name === 'device'">
      <rect x="4" y="5" width="16" height="11" rx="1.5" />
      <path d="M9 20h6" />
      <path d="M12 16v4" />
    </template>

    <!-- layers: data / LPK-BLK / stack terstruktur -->
    <template v-else-if="name === 'layers'">
      <path d="M12 4.2l8 4-8 4-8-4z" />
      <path d="M4 12.6l8 4 8-4" />
    </template>

    <!-- document: registrasi / legal (STR) -->
    <template v-else-if="name === 'document'">
      <path d="M7 3.5h7l3.5 3.5V20a.8.8 0 01-.8.8H7a.8.8 0 01-.8-.8V4.3a.8.8 0 01.8-.8z" />
      <path d="M14 3.5V7h3.5" />
      <path d="M9 12.5h6" />
      <path d="M9 15.8h6" />
    </template>

    <!-- mobile: smartphone / responsif -->
    <template v-else-if="name === 'mobile'">
      <rect x="7" y="3" width="10" height="18" rx="2" />
      <path d="M11 18h2" />
    </template>
  </svg>
</template>
