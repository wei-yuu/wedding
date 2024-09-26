<template>
  <div
    :class="{
      'bg-flower bg-cover bg-center': isHomePage,
    }"
  >
    <nav-bar />
    <router-view />
    <CustomFooter />
  </div>
</template>

<script setup lang="ts">
import CustomFooter from '@/components/custom-footer.vue';
import router from '@/router';
import { computed } from 'vue';

const isHomePage = computed(() => {
  return router.currentRoute.value.path === '/';
});
</script>
