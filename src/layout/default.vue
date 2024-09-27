<template>
  <div
    :class="{
      'bg-flower bg-cover bg-center': isHomePage,
    }"
  >
    <nav-bar />
    <div class="max-h-[calc(100vh-124px)] overflow-y-scroll scroll-bar">
      <router-view />
      <custom-footer />
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router';
import { computed } from 'vue';

const isHomePage = computed(() => {
  return router.currentRoute.value.path === '/';
});
</script>

<style lang="scss">
.scroll-bar {
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
