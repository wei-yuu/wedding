<template>
  <teleport to="body">
    <div
      v-show="visible"
      class="fixed top-0 bottom-0 left-0 right-0 z-30 flex overflow-hidden"
      :class="[bgColorClass, bgOpacityClass]"
    >
      <slot></slot>
    </div>
  </teleport>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    visible: boolean;
    bgColorClass?: string;
    bgOpacityClass?: string;
  }>(),
  {
    visible: false,
    bgColorClass: 'bg-black',
    bgOpacityClass: 'bg-opacity-50',
  },
);
</script>
