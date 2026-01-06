import type { Directive } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// Check for reduced motion preference
function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * v-scroll-reveal directive
 * Usage: <div v-scroll-reveal="{ delay: 0.2, y: 50 }">Content</div>
 */
export const vScrollReveal: Directive = {
  mounted(el, binding) {
    if (prefersReducedMotion()) {
      return
    }

    const options = binding.value || {}
    const defaultOptions = {
      opacity: 0,
      y: 30,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true
      }
    }

    gsap.from(el, { ...defaultOptions, ...options })
  }
}

/**
 * v-fade-in directive
 * Usage: <div v-fade-in>Content</div>
 */
export const vFadeIn: Directive = {
  mounted(el, binding) {
    if (prefersReducedMotion()) {
      return
    }

    const delay = binding.value?.delay || 0

    gsap.from(el, {
      opacity: 0,
      duration: 0.6,
      delay,
      ease: 'power2.out'
    })
  }
}

/**
 * v-slide-in directive
 * Usage: <div v-slide-in="'left'">Content</div>
 */
export const vSlideIn: Directive = {
  mounted(el, binding) {
    if (prefersReducedMotion()) {
      return
    }

    const direction = binding.value || 'bottom'
    const distance = 50
    
    let fromProps: any = {
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out'
    }

    switch (direction) {
      case 'left':
        fromProps.x = -distance
        break
      case 'right':
        fromProps.x = distance
        break
      case 'top':
        fromProps.y = -distance
        break
      case 'bottom':
      default:
        fromProps.y = distance
        break
    }

    gsap.from(el, fromProps)
  }
}

/**
 * v-stagger-children directive
 * Animates all children with stagger effect
 * Usage: <div v-stagger-children="{ stagger: 0.1 }">
 */
export const vStaggerChildren: Directive = {
  mounted(el, binding) {
    if (prefersReducedMotion()) {
      return
    }

    const options = binding.value || {}
    const children = el.children

    if (children.length === 0) return

    gsap.from(children, {
      opacity: 0,
      y: 20,
      stagger: options.stagger || 0.1,
      duration: 0.5,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true
      }
    })
  }
}
