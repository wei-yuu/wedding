<template>
  <event-card>
    <section
      class="col-span-2 md:col-span-3 flex flex-wrap items-center justify-center"
    >
      <img class="w-64" src="/wei-yuu.png" alt="wei-yuu" />
    </section>
    <section
      class="col-span-3 md:col-span-2 flex flex-wrap items-center justify-center"
    >
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
  </event-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const information = ref([
  {
    label: '日期：',
    text: '01 月 21 日',
  },
  {
    label: '時間：',
    text: '11:00 儀式\n12:00 準時開席',
  },
  {
    label: '地點：',
    text: '新郎家',
  },
]);
</script>
