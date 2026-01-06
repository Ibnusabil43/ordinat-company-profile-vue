import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'

// Check for reduced motion preference
function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function useNavbar() {
  const isVisible = ref(true)
  const lastScrollY = ref(0)
  const navbarEl = ref<HTMLElement | null>(null)
  const ticking = ref(false)

  const handleScroll = () => {
    if (prefersReducedMotion()) return

    if (!ticking.value) {
      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY

        if (currentScrollY < 10) {
          isVisible.value = true
          if (navbarEl.value) {
            gsap.to(navbarEl.value, {
              y: 0,
              duration: 0.3,
              ease: 'power2.inOut'
            })
          }
        } else if (currentScrollY > lastScrollY.value && currentScrollY > 100) {
          // Scrolling down
          isVisible.value = false
          if (navbarEl.value) {
            gsap.to(navbarEl.value, {
              y: -100,
              duration: 0.3,
              ease: 'power2.inOut'
            })
          }
        } else if (currentScrollY < lastScrollY.value) {
          // Scrolling up
          isVisible.value = true
          if (navbarEl.value) {
            gsap.to(navbarEl.value, {
              y: 0,
              duration: 0.3,
              ease: 'power2.inOut'
            })
          }
        }

        lastScrollY.value = currentScrollY
        ticking.value = false
      })
      ticking.value = true
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    isVisible,
    navbarEl
  }
}

export function useMobileMenu() {
  const isOpen = ref(false)

  const toggle = () => {
    isOpen.value = !isOpen.value
    
    // Lock body scroll when menu is open
    if (isOpen.value) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }

  const close = () => {
    isOpen.value = false
    document.body.style.overflow = ''
  }

  // Cleanup on unmount
  onUnmounted(() => {
    document.body.style.overflow = ''
  })

  return {
    isOpen,
    toggle,
    close
  }
}
