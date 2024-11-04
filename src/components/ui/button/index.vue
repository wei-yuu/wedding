<template>
  <button
    class="relative flex justify-center items-center px-6 py-1 rounded text-2xl shadow-button"
    :class="{
      'bg-transparent text-transparent': hovering,
      [buttonClass]: !hovering,
    }"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
    @click="emits('click')"
  >
    <transition name="border">
      <span v-show="hovering" :class="[beforeClass, afterClass]" />
    </transition>
    <span
      class="bg-clip-text"
      :class="[
        {
          'drop-shadow-[2px_2px_2px_rgba(0,0,0,0.5)]': hovering,
        },
        textClass,
      ]"
    >
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
import { ButtonColor } from '@/types/components/ui/button.type';
import { computed, ref } from 'vue';

const props = withDefaults(
  defineProps<{
    color?: ButtonColor | `${ButtonColor}`;
  }>(),
  {
    color: ButtonColor.Gradient,
  },
);

const emits = defineEmits<(e: 'click') => void>();

const hovering = ref(false);

const beforeClass = computed(() => {
  const before = [
    'before:absolute',
    'before:top-0',
    'before:left-0',
    'before:h-full',
    'before:w-full',
    'before:rounded',
    'before:border-t-2',
    'before:border-l-2',
    'before:drop-shadow-button',
  ];

  switch (props.color) {
    case ButtonColor.Gray:
      before.push('before:border-gray-500');
      break;
    case ButtonColor.Pink:
      before.push('before:border-[rgba(253,89,207,0.645)]');
      break;
    case ButtonColor.Blue:
    case ButtonColor.Gradient:
    default:
      before.push('before:border-[rgba(2,156,251,0.572)]');
      break;
  }
  return before;
});

const afterClass = computed(() => {
  const after = [
    'after:absolute',
    ' after:bottom-0',
    'after:right-0',
    'after:h-full',
    'after:w-full',
    'after:rounded',
    'after:border-b-2',
    'after:border-r-2',
    'after:drop-shadow-button',
  ];

  switch (props.color) {
    case ButtonColor.Gray:
      after.push('after:border-gray-500');
      break;
    case ButtonColor.Blue:
      after.push('after:border-[rgba(2,156,251,0.572)]');
      break;
    case ButtonColor.Gradient:
    case ButtonColor.Pink:
    default:
      after.push('after:border-[rgba(253,89,207,0.645)]');
      break;
  }
  return after;
});

const buttonClass = computed(() => {
  switch (props.color) {
    case ButtonColor.Blue:
      return 'bg-[rgba(2,156,251,0.572)]';
    case ButtonColor.Gray:
      return 'bg-gray-300';
    case ButtonColor.Pink:
      return 'bg-[rgba(253,89,207,0.645)]';
    case ButtonColor.Gradient:
    default:
      return 'bg-hydrangeas';
  }
});

const textClass = computed(() => {
  switch (props.color) {
    case ButtonColor.Blue:
      return 'bg-[rgba(2,156,251,0.572)]';
    case ButtonColor.Gray:
      return 'bg-gray-500';
    case ButtonColor.Pink:
      return 'bg-[rgba(253,89,207,0.645)]';
    case ButtonColor.Gradient:
    default:
      return 'bg-hydrangeas-t';
  }
});
</script>

<style lang="scss" scoped>
.border-enter-active,
.border-leave-active {
  transition: 0.3s ease-in-out;
  &::before,
  &::after {
    transition: 0.3s;
  }
}

.border-enter-from,
.border-leave-to {
  &::before {
    width: 0%;
    height: 0%;
  }

  &::after {
    width: 0%;
    height: 0%;
  }
}

.border-enter-to,
.border-leave-from {
  &::before {
    width: 100%;
    height: 100%;
  }

  &::after {
    width: 100%;
    height: 100%;
  }
}
</style>
