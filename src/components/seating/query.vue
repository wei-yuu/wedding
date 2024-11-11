<template>
  <div class="min-w-[40%] flex flex-col justify-center items-center gap-16">
    <h2 class="text-5xl">查詢你的座位</h2>
    <div class="w-full flex flex-col">
      <label class="text-2xl w-full">你的姓名：</label>
      <div class="w-full grid grid-cols-7 gap-4">
        <input
          type="text"
          class="col-span-5"
          placeholder="請輸入完整的姓名"
          v-model="query"
          @keypress.enter="$emit('click', query)"
        />
        <ui-button
          class="col-span-2"
          color="blue"
          @click="$emit('click', query)"
        >
          搜尋
        </ui-button>
      </div>
    </div>
    <seating-message class="hidden md:block" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineEmits<(e: 'click', query: string) => void>();

const query = ref('');
</script>
