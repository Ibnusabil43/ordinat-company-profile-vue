import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/HomePage.vue')
    },
    {
      path: '/profil',
      name: 'profil',
      component: () => import('@/pages/ProfilPage.vue')
    },
    {
      path: '/layanan',
      name: 'layanan',
      component: () => import('@/pages/LayananPage.vue')
    },
    {
      path: '/layanan/psikotes-assessment',
      name: 'psikotes-assessment',
      component: () => import('@/pages/services/PsikotesAssessmentPage.vue')
    },
    {
      path: '/layanan/psikologi-pendidikan',
      name: 'psikologi-pendidikan',
      component: () => import('@/pages/services/PsikologiPendidikanPage.vue')
    },
    {
      path: '/layanan/konseling',
      name: 'konseling',
      component: () => import('@/pages/services/KonselingPage.vue')
    },
    {
      path: '/layanan/training',
      name: 'training',
      component: () => import('@/pages/services/TrainingPage.vue')
    },
    {
      path: '/layanan/outbound',
      name: 'outbound',
      component: () => import('@/pages/services/OutboundPage.vue')
    },
    {
      path: '/cpmi',
      name: 'cpmi',
      component: () => import('@/pages/CPMIPage.vue')
    },
    {
      path: '/tim',
      name: 'tim',
      component: () => import('@/pages/TimPage.vue')
    },
    {
      path: '/tim/irma-rosdiyanti',
      name: 'irma-profile',
      component: () => import('@/pages/profiles/IrmaProfilePage.vue')
    },
    {
      path: '/tim/it-staff',
      name: 'it-staff',
      component: () => import('@/pages/ITStaffPage.vue')
    },
    {
      path: '/rekanan',
      name: 'rekanan',
      component: () => import('@/pages/RekananPage.vue')
    },
    {
      path: '/kontak',
      name: 'kontak',
      component: () => import('@/pages/KontakPage.vue')
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router
