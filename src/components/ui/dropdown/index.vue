<template>
  <slot></slot>
  <transition
    enterActiveClass="transition-opacity ease duration-500"
    leaveActiveClass="transition-opacity ease duration-500"
    enterFromClass="opacity-0"
    enterToClass="opacity-100"
    leaveFromClass="opacity-100"
    leaveToClass="opacity-0"
  >
    <div
      v-show="modelValue"
      class="absolute mt-14 grid max-h-40 md:max-h-60 w-full p-2 gap-2 overflow-auto rounded bg-white/30"
    >
      <slot name="dropdown">
        <span
          class="w-full justify-self-center cursor-pointer rounded-lg border-2 bg-gray-200 p-2"
          v-for="(option, index) in options"
          :key="index"
          @click="$emit('click', option)"
        >
          {{ option }}
        </span>
      </slot>
    </div>
  </transition>
</template>

<script setup lang="ts" generic="T">
const modelValue = defineModel<boolean>({ default: false });

defineEmits<(e: 'click', value: T) => void>();

defineProps<{
  options: T[];
}>();
</script>
