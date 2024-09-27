<template>
  <div
    class="relative flex h-[calc(100vh-117px)] w-[80vw] flex-col flex-wrap items-center justify-center"
  >
    <span class="w-full text-center">
      <slot name="question">
        <span class="font-cursive text-4xl">{{ question }}</span>
      </slot>
    </span>
    <div
      class="flex gap-2 max-h-[90%] w-full flex-wrap items-center justify-evenly py-8"
    >
      <button
        class="z-10 font-icon text-5xl"
        :class="{
          invisible: step === 0,
        }"
        @click="previous"
      >
        chevron_left
      </button>
      <slot>
        <slot name="content" :data="data"></slot>
      </slot>
      <button
        class="z-10 font-icon text-5xl"
        :class="{
          'pointer-events-none text-gray-300': disableButton,
          invisible: step === tail,
        }"
        @click="next"
      >
        chevron_right
      </button>
    </div>
    <span class="w-full text-center">
      <slot name="button">
        <button
          class="w-32 border-2 py-1 border-black rounded text-xl disabled:text-gray-300 disabled:border-gray-300"
          :class="{
            'hover:bg-black hover:text-white': !disableButton,
          }"
          :disabled="disableButton"
          @click="step === tail ? submit() : next()"
        >
          {{ step === tail ? '寫完嚕！' : '下一題' }}
        </button>
      </slot>
    </span>
  </div>
</template>

<script setup lang="ts" generic="T">
import { useFormStore } from '@/stores/form-store';

defineProps<{
  data?: T;
  question?: string;
  disableButton?: boolean;
}>();

const { previous, next, submit, step, tail } = useFormStore();
</script>
