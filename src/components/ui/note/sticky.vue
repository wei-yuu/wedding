<template>
  <div
    class="relative w-32 h-32 grid grid-cols-4 grid-rows-4 drop-shadow-lg cursor-pointer"
    @click="$emit('click')"
  >
    <div class="row-span-3 w-32 h-24 bg-yellow-200" />
    <div
      class="z-20 row-start-4 w-8 h-8 border-t-[32px] border-t-yellow-200 border-l-[32px] border-l-transparent [box-shadow:_3px_-3px_rgba(0,0,0,0.3)] rounded"
    />
    <div class="row-start-4 w-24 h-8 bg-yellow-200" />
    <p class="absolute justify-self-center self-center col-span-4 text-3xl">
      <slot>{{ text }}</slot>
    </p>
  </div>
</template>
<script setup lang="ts">
defineProps<{
  text?: string;
}>();

defineEmits<(e: 'click') => void>();
</script>
