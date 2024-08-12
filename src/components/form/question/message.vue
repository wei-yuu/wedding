<template>
  <form-field question="還有想說的話">
    <textarea
      ref="message"
      class="font-cursive w-2/3 resize-none overflow-hidden whitespace-pre-wrap border-2 border-x-transparent border-t-transparent pb-2 text-3xl shadow-none outline-none focus:border-b-black"
      placeholder="偷偷跟我們說"
      :style="{
        height: textareaHeight,
      }"
      v-model="modelValue"
    >
    </textarea>
  </form-field>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

const modelValue = defineModel<string>();
const message = ref<HTMLElement>();
const textareaHeight = ref('44px');

watch(
  () => modelValue.value,
  () => {
    message.value.style.height = '44px';
    textareaHeight.value = `${message.value.scrollHeight}px`;
  },
);
</script>
