<template>
  <form-field
    :question="`您與${form.friendship}的關係？`"
    :disable-button="!modelValue"
  >
    <div class="relative flex w-2/3 justify-center">
      <ui-dropdown
        v-model="showOption"
        :options="filterOptions"
        @click="modelValue = $event"
      >
        <input
          type="text"
          class="w-full"
          placeholder="有些關係不可以說得太明白🤫"
          v-model="modelValue"
          @focus="showOption = true"
          @blur="showOption = false"
        />
      </ui-dropdown>
    </div>
  </form-field>
</template>

<script setup lang="ts">
import type { Form } from '@/types/store/form.type';
import { computed, ref } from 'vue';

const modelValue = defineModel({ required: true, default: '' });
defineProps<{
  form: Form;
}>();

const options = [
  '親戚/家人',
  '國小同學',
  '國中同學',
  '高中同窗',
  '大學同窗',
  '同事',
  '超越以上關係的至親好友',
];

const showOption = ref(false);

const filterOptions = computed(() => {
  if (!modelValue.value) return options;

  return options.filter((option) => {
    return option.includes(modelValue.value ?? '');
  });
});
</script>
