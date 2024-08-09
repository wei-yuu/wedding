<template>
  <div
    class="relative flex h-[calc(100vh-117px)] w-full flex-col flex-wrap items-center justify-center"
  >
    <span class="w-full text-center">
      <slot name="question">
        <span class="font-cursive text-4xl">{{ question }}</span>
      </slot>
    </span>
    <div
      class="flex max-h-[90%] w-4/5 flex-wrap items-center justify-evenly py-8"
    >
      <slot>
        <slot name="content" :data="data"></slot>
      </slot>
    </div>
  </div>
</template>

<script setup lang="ts" generic="T">
defineProps<{
  data?: T;
  question?: string;
}>();
</script>
