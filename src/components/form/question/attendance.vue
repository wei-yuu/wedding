<template>
  <form-field question="當日出席的人數？" :disable-button="!modelValue">
    <div class="relative flex w-2/3 justify-center">
      <ui-dropdown
        v-model="showOption"
        :options="[1, 2, 3, 4, 5]"
        @click="number = $event"
      >
        <input
          type="number"
          min="1"
          class="w-full"
          placeholder="請自行輸入數字，也可從下方選擇！"
          v-model.number="number"
          @focus="showOption = true"
          @blur="showOption = false"
        />
      </ui-dropdown>
    </div>
  </form-field>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const modelValue = defineModel({ required: true, default: '' });

const showOption = ref(false);

const number = computed({
  get: () => {
    return parseInt(modelValue.value ?? '') || '';
  },
  set: (num) => {
    modelValue.value = num.toString();
  },
});
</script>
