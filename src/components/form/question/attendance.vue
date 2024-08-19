<template>
  <form-field question="當日出席的人數？" :disable-button="!modelValue">
    <div class="relative flex w-2/3 justify-center">
      <input
        ref="input"
        type="number"
        min="1"
        class="font-cursive w-full border-b-2 pb-2 text-3xl outline-none focus:border-b-black"
        placeholder="請自行輸入數字，也可從下方選擇！"
        v-model.number="number"
        @focus="showOption = true"
        @blur="showOption = false"
      />
      <transition
        enterActiveClass="transition-opacity ease duration-500"
        leaveActiveClass="transition-opacity ease duration-500"
        enterFromClass="opacity-0"
        enterToClass="opacity-100"
        leaveFromClass="opacity-100"
        leaveToClass="opacity-0"
      >
        <div
          v-show="showOption"
          :style="{
            'margin-top': `${dropdownMargin + 12}px`,
          }"
          class="absolute mt-16 grid max-h-60 w-full gap-2 overflow-auto"
        >
          <span
            class="w-full cursor-pointer rounded-lg border-2 bg-gray-200 p-2"
            v-for="(option, index) in 5"
            :key="index"
            @click="number = option"
          >
            {{ option }}
          </span>
        </div>
      </transition>
    </div>
  </form-field>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const modelValue = defineModel({ required: true, default: '' });

const showOption = ref(false);
const input = ref<HTMLElement>();
const dropdownMargin = computed(() => {
  return input.value?.clientHeight ?? 0;
});
const number = computed({
  get: () => {
    return parseInt(modelValue.value ?? '') || '';
  },
  set: (num) => {
    modelValue.value = num.toString();
  },
});
</script>
