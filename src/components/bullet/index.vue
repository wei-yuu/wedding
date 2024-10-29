<template>
  <div class="overflow-hidden">
    <transition
      enterActiveClass="transition-all ease-linear"
      enterFromClass="translate-x-[100vw]"
      enterToClass="translate-x-[-100%]"
      @afterEnter="visible = false"
      @beforeLeave="$emit('hide')"
      :style="{
        'transition-duration': `${duration}ms`,
      }"
    >
      <p
        v-if="visible"
        class="font-yozai text-white text-4xl text-nowrap message inline-block"
      >
        {{ bullet.message }}
      </p>
    </transition>
  </div>
</template>

<script setup lang="ts">
import type { Message } from '@/types/message.type';
import { computed, onMounted, ref, watch } from 'vue';

const props = defineProps<{
  bullet: Message;
}>();

defineEmits<{
  (e: 'hide'): void;
}>();

const visible = ref(false);

const duration = computed(() => {
  if (visible.value) {
    if (props.bullet.message.length > 60) return 45000;
    if (props.bullet.message.length > 40)
      return Math.floor(Math.random() * 5 + 30) * 1000;
    if (props.bullet.message.length > 20)
      return Math.floor(Math.random() * 10 + 15) * 1000;
    return Math.floor(Math.random() * 5 + 10) * 1000;
  }
  return 0;
});

watch(
  () => props.bullet,
  () => (visible.value = true),
);
onMounted(() => {
  visible.value = true;
});
</script>

<style scoped lang="scss">
.message {
  text-shadow: 1px 1px 5px black;
}
</style>
