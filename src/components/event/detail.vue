<template>
  <div
    class="bg-border grid h-3/5 w-2/3 grid-cols-5 gap-2 rounded-lg bg-white/50 bg-top bg-no-repeat p-4 pt-12"
  >
    <section class="col-span-2 flex flex-wrap items-center justify-center">
      <img class="w-4/5" src="/wei-yuu.png" alt="wei-yuu" />
    </section>
    <section class="col-span-3 flex flex-wrap items-center justify-center">
      <h2 class="w-full text-center text-4xl">Information</h2>
      <div class="whitespace-pre text-xl">
        <div
          class="grid grid-cols-3"
          v-for="(info, index) in information"
          :key="index"
        >
          <label class="text-center">{{ info.label }}</label>
          <span class="col-span-2">{{ info.text }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const information = ref([
  {
    label: '日期：',
    text: '11/23',
  },
  {
    label: '時間：',
    text: '12:00 入席\n12:30 準時開席',
  },
  {
    label: '地點：',
    text: '成都雅宴',
  },
]);
</script>
