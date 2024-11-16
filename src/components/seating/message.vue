<template>
  <div class="w-full min-h-12 text-3xl">
    <p v-if="seat">您的座位在： {{ seat?.table }}</p>
    <p v-if="notFound" class="text-red-400 whitespace-pre">
      {{ '找不到啦(／‵Д′)／~ ╧╧！\n請您再確認輸入的姓名' }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { Seating } from '@/types/seating.type';
import { inject } from 'vue';

const seat = inject<Seating>('seat');
const notFound = inject<boolean>('notFound');
</script>
