<template>
  <nav-bar />
  <div class="max-h-[calc(100vh-124px)] overflow-y-scroll scroll-bar">
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.scroll-bar {
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
