<script setup lang="ts">
import { ref } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const form = ref({
  nama: '',
  email: '',
  telepon: '',
  layanan: '',
  pesan: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
  // TODO: Implement form submission logic
  alert('Terima kasih! Pesan Anda telah diterima.')
}
</script>

<template>
  <DefaultLayout>
    <!-- Hero Header -->
    <section class="bg-gradient-to-br from-blue-600 to-purple-600 text-white py-12 sm:py-16">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Kontak & Lokasi</h1>
        <p class="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
          Siap Berkolaborasi dengan Sekolah, Organisasi, dan Lembaga Anda
        </p>
      </div>
    </section>

    <!-- Contact Info & Map -->
    <section class="py-12 sm:py-16 lg:py-20 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <!-- Contact Cards -->
          <div class="space-y-4 lg:space-y-6">
            <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 lg:p-8 shadow-lg">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg lg:text-xl font-bold text-gray-900 mb-2">Alamat</h3>
                  <p class="text-gray-700 leading-relaxed text-sm lg:text-base">
                    Jl. Raya Susukan No. 21, Susukan, Cirebon
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 lg:p-8 shadow-lg">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg lg:text-xl font-bold text-gray-900 mb-2">Telepon</h3>
                  <a href="tel:081223275646" class="text-gray-700 hover:text-blue-600 transition-colors text-sm lg:text-base">0812-2327-546</a>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 lg:p-8 shadow-lg">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg lg:text-xl font-bold text-gray-900 mb-2">Email</h3>
                  <a href="mailto:ordinat.consultan@gmail.com" class="text-gray-700 hover:text-blue-600 transition-colors text-sm lg:text-base break-all">
                    ordinat.consultan@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 lg:p-8 shadow-lg border-2 border-green-200 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-green-600 to-green-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6 lg:w-7 lg:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg lg:text-xl font-bold text-gray-900 mb-2">WhatsApp</h3>
                  <p class="text-gray-700 mb-4 text-sm lg:text-base">0812-2327-546</p>
                  <a
                    href="https://wa.me/6281223275646"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex items-center px-4 lg:px-6 py-2 lg:py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-all shadow-md text-sm lg:text-base"
                  >
                    <svg class="w-4 h-4 lg:w-5 lg:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Hubungi via WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Google Maps -->
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3961.5825!2d108.37677747191093!3d-6.632530909116124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMzcnNTcuMSJTIDEwOMKwMjInMzYuNCJF!5e0!3m2!1sen!2sid!4v1704542400000!5m2!1sen!2sid"
              width="100%"
              height="100%"
              style="border:0; min-height: 400px;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="w-full h-full"
              title="Lokasi Ordinat Cakrawala - Jl. Raya Susukan No. 21, Cirebon"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Form -->
    <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50/30">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8 lg:mb-12">
          <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Formulir Kontak
          </h2>
          <p class="text-base lg:text-lg text-gray-600">
            Kirim pesan kepada kami dan tim kami akan merespons segera
          </p>
        </div>

        <div class="bg-white rounded-2xl p-6 sm:p-8 lg:p-12 shadow-xl">
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-2">
                  Nama Lengkap *
                </label>
                <input
                  v-model="form.nama"
                  type="text"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="Masukkan nama lengkap"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-2">
                  Email *
                </label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-2">
                  Nomor Telepon *
                </label>
                <input
                  v-model="form.telepon"
                  type="tel"
                  required
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                  placeholder="08xx-xxxx-xxxx"
                />
              </div>
              <div>
                <label class="block text-sm font-semibold text-gray-900 mb-2">
                  Layanan yang Diminati
                </label>
                <select 
                  v-model="form.layanan"
                  class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all"
                >
                  <option value="">Pilih layanan</option>
                  <option>Psikotes & Assessment</option>
                  <option>Psikologi Pendidikan</option>
                  <option>Konseling</option>
                  <option>Training & Capacity Building</option>
                  <option>Outbound & Team Building</option>
                  <option>Unit CPMI</option>
                </select>
              </div>
            </div>

            <div>
              <label class="block text-sm font-semibold text-gray-900 mb-2">
                Pesan *
              </label>
              <textarea
                v-model="form.pesan"
                required
                rows="6"
                class="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-200 outline-none transition-all resize-none"
                placeholder="Tuliskan pesan atau pertanyaan Anda di sini..."
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full px-6 lg:px-8 py-3 lg:py-4 bg-gradient-to-br from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span>Kirim Pesan</span>
            </button>
          </form>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="text-base sm:text-lg lg:text-xl leading-relaxed max-w-4xl mx-auto">
          Untuk informasi lebih lanjut mengenai psikotes sekolah, asesmen karyawan, program CPMI, maupun kebutuhan konsultasi lainnya, silakan hubungi kami. Tim Ordinat Cakrawala siap membantu merancang solusi psikologi yang paling sesuai bagi lembaga Anda.
        </p>
      </div>
    </section>
  </DefaultLayout>
</template>
