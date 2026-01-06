<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50/30">
    <RouterView v-slot="{ Component, route }">
      <transition
        :name="route.meta.transition || 'fade-slide'"
        mode="out-in"
        @before-enter="onBeforeEnter"
        @after-leave="onAfterLeave"
      >
        <component :is="Component" :key="route.path" />
      </transition>
    </RouterView>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    onBeforeEnter() {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
    },
    onAfterLeave() {
      // Optional: cleanup after transition
    }
  }
}
</script>

<style scoped>
/* Fade + Slide Page Transition */
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease-out;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Alternative: Simple Fade */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Reduced motion support */
@media (prefers-reduced-motion: reduce) {
  .fade-slide-enter-active,
  .fade-slide-leave-active,
  .fade-enter-active,
  .fade-leave-active {
    transition: none;
  }
  
  .fade-slide-enter-from,
  .fade-slide-leave-to {
    transform: none;
  }
}
</style>
