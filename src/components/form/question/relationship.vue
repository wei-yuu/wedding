<template>
  <form-field :question="`您與${form.friendship}的關係？`">
    <div class="relative flex w-2/3 justify-center">
      <input
        ref="input"
        type="text"
        class="font-cursive w-full border-b-2 pb-2 text-3xl outline-none focus:border-b-black"
        placeholder=""
        v-model="modelValue"
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
            v-for="(option, index) in filterOptions"
            :key="index"
            @click="modelValue = option"
          >
            {{ option }}
          </span>
        </div>
      </transition>
    </div>
  </form-field>
</template>

<script setup lang="ts">
import { useFormStore } from '@/stores/form-store';
import { computed, ref } from 'vue';

const modelValue = defineModel({ required: true, default: '' });

const { form } = useFormStore();

const options = [
  '家人/親戚',
  '國小同學',
  '國中同學',
  '高中同窗',
  '大學同窗',
  '同事',
  '超越以上關係的至親好友',
];

const showOption = ref(false);
const input = ref<HTMLElement>();
const dropdownMargin = computed(() => {
  return input.value?.clientHeight ?? 0;
});
const filterOptions = computed(() => {
  if (!modelValue.value) return options;

  return options.filter((option) => {
    return option.includes(modelValue.value ?? '');
  });
});
</script>
