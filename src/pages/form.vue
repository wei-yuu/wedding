<template>
  <div class="flex items-center justify-evenly">
    <transition
      mode="out-in"
      enterActiveClass="transition-all ease duration-500"
      leaveActiveClass="transition-all ease duration-700"
      :enterFromClass="`opacity-0 ${enterFrom}`"
      :leaveToClass="`opacity-0 ${leaveTo}`"
    >
      <component
        v-model="form[store.current]"
        :is="formComponent[store.current]"
        :form="store.form"
      />
    </transition>
  </div>
</template>

<script setup lang="ts">
import * as formComponent from '@/components/form/question';
import { useFormStore } from '@/stores/form-store';
import { computed } from 'vue';

const store = useFormStore();

const form = computed(() => {
  return store.form;
});

const enterFrom = computed(() => {
  switch (store.action) {
    case 'previous':
      return 'translate-x-[-100%]';
    case 'next':
    default:
      return 'translate-x-full';
  }
});

const leaveTo = computed(() => {
  switch (store.action) {
    case 'previous':
      return 'translate-x-full';
    case 'next':
    default:
      return 'translate-x-[-100%]';
  }
});
</script>
