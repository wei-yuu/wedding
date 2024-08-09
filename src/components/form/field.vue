<template>
  <div
    class="relative flex h-[calc(100vh-117px)] w-full flex-col flex-wrap items-center justify-center"
  >
    <span class="w-full text-center">
      <slot name="question">
        <span class="font-chenYu text-4xl">{{ question }}</span>
      </slot>
    </span>
    <div class="flex h-[90%] w-4/5 flex-wrap items-center justify-evenly">
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
