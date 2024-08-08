<template>
  <header class="sticky top-0 flex items-center justify-center">
    <nav class="flex w-[90%] items-center justify-between px-6 py-3">
      <router-link to="/">
        <div class="flex w-16 flex-wrap items-center justify-center">
          <img class="w-full" src="/wei-yuu.png" alt="wei-yuu" />
          <span class="font-dance">W & Y</span>
        </div>
      </router-link>
      <div class="flex flex-1 justify-end">
        <router-link
          v-for="(menu, index) in menus"
          :key="index"
          :to="menu.link"
          class="relative mx-2 flex items-center justify-center rounded px-6 py-3 text-lg"
          :class="{
            'bg-gradient-to-b from-[#FAEAB1]': menu.link === current,
          }"
          @mouseenter="menu.show = true"
          @mouseleave="menu.show = false"
        >
          <transition name="border">
            <div v-show="menu.show" :class="[afterClass, beforeClass]" />
          </transition>
          <span>{{ menu.name }}</span>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import type { Menu } from '@/types/components/nav-bar.type';
import { computed, ref } from 'vue';
import router from '@/router';

const beforeClass =
  'before:absolute before:top-0 before:left-0 before:h-3/5 before:w-3/5 before:rounded before:border-t-2 before:border-l-2 before:border-[#E5BA73]';
const afterClass =
  'after:absolute after:bottom-0 after:right-0 after:h-3/5 after:w-3/5 after:rounded after:border-b-2 after:border-r-2 after:border-[#C58940]';

const menus = ref<Menu[]>([
  {
    name: 'Our Story',
    link: '/our-story',
    show: false,
  },
  {
    name: 'RSVP',
    link: '/form',
    show: false,
  },
  {
    name: 'Event Detail',
    link: '/event-detail',
    show: false,
  },
]);

const current = computed(() => {
  return router.currentRoute.value.path;
});
</script>

<style lang="scss" scoped>
.border-enter-active,
.border-leave-active {
  transition: 0.7s ease-in-out;
  &::before,
  &::after {
    transition: 0.7s;
  }
}

.border-enter-from,
.border-leave-to {
  &::before {
    width: 0%;
    height: 0%;
  }

  &::after {
    width: 0%;
    height: 0%;
  }
}

.border-enter-to,
.border-leave-from {
  &::before {
    width: 60%;
    height: 60%;
  }

  &::after {
    width: 60%;
    height: 60%;
  }
}
</style>
