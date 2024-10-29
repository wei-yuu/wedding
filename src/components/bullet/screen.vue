<template>
  <div class="grid gap-4 h-full items-center">
    <template v-for="(bullet, index) in bullets" :key="index">
      <bullet :bullet="bullet" @hide="fillBullet(index)" />
    </template>
  </div>
</template>
<script setup lang="ts">
import type { Message } from '@/types/message.type';
import { onMounted, ref } from 'vue';

const magazine = defineModel<Message[]>('magazine', { default: [] });

const props = defineProps<{
  quantity: number;
}>();

const bullets = ref<Message[]>([]);

const fillBullet = (index: number) => {
  const bullet = magazine.value.shift();
  if (bullet) {
    bullets.value.splice(index, 1, bullet);
  }
};

onMounted(() => {
  bullets.value = magazine.value.splice(0, props.quantity);
});
</script>
