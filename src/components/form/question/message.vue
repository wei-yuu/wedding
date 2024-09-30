<template>
  <form-field question="最後想告訴我們？" :disable-button="!modelValue">
    <textarea
      ref="message"
      class="w-full resize-none overflow-hidden whitespace-pre-wrap border-x-transparent border-t-transparent shadow-none"
      placeholder="開放大肆祝福唷～沒有就寫無🥹"
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

const modelValue = defineModel({ required: true, default: '' });
const message = ref<HTMLElement>();
const textareaHeight = ref('44px');

watch(
  () => modelValue.value,
  () => {
    if (message.value) {
      message.value.style.height = '44px';
      textareaHeight.value = `${message.value.scrollHeight}px`;
    }
  },
);
</script>
