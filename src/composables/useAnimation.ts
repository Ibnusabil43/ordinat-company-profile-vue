import { onMounted, onUnmounted, ref } from 'vue'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

// Check for reduced motion preference
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Enhanced scroll reveal with IntersectionObserver fallback
 */
export function useScrollReveal() {
  const animateOnScroll = (selector: string, options = {}) => {
    if (prefersReducedMotion()) {
      return null
    }

    const defaultOptions = {
      opacity: 0,
      y: 30,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: selector,
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true
      },
      ...options
    }

    return gsap.from(selector, defaultOptions)
  }

  const animateSection = (element: HTMLElement, options = {}) => {
    if (prefersReducedMotion()) {
      return null
    }

    const defaultOptions = {
      opacity: 0,
      y: 40,
      duration: 0.7,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none',
        once: true
      },
      ...options
    }

    return gsap.from(element, defaultOptions)
  }

  return {
    animateOnScroll,
    animateSection
  }
}

/**
 * Button animation with press effect
 */
export function useButtonAnimation() {
  const onHover = (e: MouseEvent) => {
    if (prefersReducedMotion()) return
    
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  const onLeave = (e: MouseEvent) => {
    if (prefersReducedMotion()) return
    
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: 'power2.out'
    })
  }

  const onPress = (e: MouseEvent) => {
    if (prefersReducedMotion()) return
    
    gsap.timeline()
      .to(e.currentTarget, {
        scale: 0.95,
        duration: 0.1,
        ease: 'power2.in'
      })
      .to(e.currentTarget, {
        scale: 1,
        duration: 0.2,
        ease: 'back.out(2)'
      })
  }

  return {
    onHover,
    onLeave,
    onPress
  }
}

/**
 * Card hover animations with floating effect
 */
export function useCardAnimation() {
  const onCardHover = (e: MouseEvent, options = {}) => {
    if (prefersReducedMotion()) return
    
    const defaultOptions = {
      y: -8,
      scale: 1.02,
      duration: 0.4,
      ease: 'power2.out',
      ...options
    }
    
    gsap.to(e.currentTarget, defaultOptions)
  }

  const onCardLeave = (e: MouseEvent) => {
    if (prefersReducedMotion()) return
    
    gsap.to(e.currentTarget, {
      y: 0,
      scale: 1,
      duration: 0.4,
      ease: 'power2.out'
    })
  }

  const animateCardStagger = (selector: string, delay = 0.1) => {
    if (prefersReducedMotion()) return null
    
    return gsap.from(selector, {
      opacity: 0,
      y: 40,
      stagger: delay,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: selector,
        start: 'top 85%',
        toggleActions: 'play none none none',
        once: true
      }
    })
  }

  return {
    onCardHover,
    onCardLeave,
    animateCardStagger
  }
}

/**
 * Parallax effect with performance optimization
 */
export function useParallax(speed = 0.5) {
  const elementRef = ref<HTMLElement | null>(null)
  let ticking = false

  const handleScroll = () => {
    if (prefersReducedMotion() || !elementRef.value) return
    
    if (!ticking) {
      window.requestAnimationFrame(() => {
        const scrolled = window.pageYOffset
        const rate = scrolled * speed
        gsap.to(elementRef.value, {
          y: rate,
          ease: 'none',
          duration: 0,
          overwrite: true
        })
        ticking = false
      })
      ticking = true
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

  return {
    elementRef
  }
}

/**
 * Stagger animations for child elements
 */
export function useStaggerAnimation() {
  const staggerIn = (selector: string, options = {}) => {
    if (prefersReducedMotion()) return null
    
    const defaultOptions = {
      opacity: 0,
      y: 30,
      stagger: 0.15,
      duration: 0.6,
      ease: 'power2.out',
      ...options
    }
    
    return gsap.from(selector, defaultOptions)
  }

  const staggerChildren = (parent: HTMLElement, options = {}) => {
    if (prefersReducedMotion()) return null
    
    const children = parent.children
    const defaultOptions = {
      opacity: 0,
      y: 20,
      stagger: 0.1,
      duration: 0.5,
      ease: 'power2.out',
      ...options
    }
    
    return gsap.from(children, defaultOptions)
  }

  return {
    staggerIn,
    staggerChildren
  }
}

/**
 * Counter animation with IntersectionObserver
 */
export function useCountUp(target: number, duration = 2) {
  const hasAnimated = ref(false)
  const elementRef = ref<HTMLElement | null>(null)
  const obj = { value: 0 }
  
  const animate = (callback: (value: number) => void) => {
    if (prefersReducedMotion()) {
      callback(target)
      return
    }

    if (hasAnimated.value) return

    gsap.to(obj, {
      value: target,
      duration,
      ease: 'power1.inOut',
      onUpdate: () => callback(Math.round(obj.value))
    })
    hasAnimated.value = true
  }

  const startOnVisible = (callback: (value: number) => void) => {
    if (!elementRef.value) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.value) {
            animate(callback)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(elementRef.value)

    onUnmounted(() => {
      observer.disconnect()
    })
  }

  return {
    elementRef,
    animate,
    startOnVisible
  }
}
