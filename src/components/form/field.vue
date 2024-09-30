<template>
  <div
    class="relative flex h-[calc(100vh-117px)] w-full md:w-[80vw] flex-col items-center justify-center"
  >
    <span class="w-full text-center">
      <slot name="question">
        <span class="font-cursive text-4xl">{{ question }}</span>
      </slot>
    </span>
    <div
      class="flex gap-2 max-h-[90%] w-full items-center justify-evenly py-8"
      @keypress.enter="nextQuestion()"
    >
      <button
        v-if="showChevrons"
        class="z-10 font-icon text-5xl hidden md:block"
        :class="{
          invisible: step === 0,
        }"
        @click="previous"
      >
        chevron_left
      </button>
      <div class="w-full px-6 flex justify-center gap-4">
        <slot>
          <slot name="content" :data="data"></slot>
        </slot>
      </div>
      <button
        v-if="showChevrons"
        class="z-10 font-icon text-5xl hidden md:block"
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
          v-if="showChevrons"
          class="w-32 border-2 py-1 border-black rounded text-xl disabled:text-gray-300 disabled:border-gray-300"
          :class="{
            'hover:bg-black hover:text-white': !disableButton,
          }"
          :disabled="disableButton"
          @click="nextQuestion()"
        >
          {{ step === tail ? '寫完嚕！' : '下一題' }}
        </button>
      </slot>
    </span>
  </div>
</template>

<script setup lang="ts" generic="T">
import { useFormStore } from '@/stores/form-store';

withDefaults(
  defineProps<{
    data?: T;
    question?: string;
    disableButton?: boolean;
    showChevrons?: boolean;
  }>(),
  {
    showChevrons: true,
  },
);

const { previous, next, submit, step, tail } = useFormStore();

const nextQuestion = () => {
  if (step === tail) submit();
  else next();
};
</script>
