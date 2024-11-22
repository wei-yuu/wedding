<template>
  <div class="relative">
    <transition
      enterActiveClass="transition-all ease duration-900"
      leaveActiveClass="transition-all ease duration-900"
      enterFromClass="opacity-0 translate-y-[-100%]"
      leaveToClass="opacity-0 translate-y-[-100%]"
    >
      <nav-bar
        class="absolute top-0 w-full z-50"
        v-if="showNavbar"
        background-class="bg-white/70"
      />
    </transition>
    <router-view />
    <custom-footer class="absolute bottom-0 w-full" />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';

const showNavbar = ref(false);

const watchMouse = (e: MouseEvent) => {
  if (e.pageY < 124) showNavbar.value = true;
  else showNavbar.value = false;
};

onMounted(() => {
  window.addEventListener('mousemove', watchMouse);
});

onUnmounted(() => {
  window.addEventListener('mousemove', watchMouse);
});
</script>
