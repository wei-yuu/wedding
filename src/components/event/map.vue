<template>
  <event-card>
    <section
      class="col-span-full md:col-span-3 flex flex-wrap items-center justify-center"
    >
      <iframe
        class="min-h-[250px] h-[90%] w-11/12 shadow-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3637.0319898435546!2d120.5658747753127!3d24.275613168410697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3469137dd899aaf9%3A0xa0db76a95709900d!2z5oiQ6YO96ZuF5a605pmC5bCa5pyD6aSo!5e0!3m2!1szh-TW!2stw!4v1724147118904!5m2!1szh-TW!2stw"
        style="border: 0"
        allowfullscreen="true"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </section>
    <section
      class="md:row-start-1 col-span-full md:col-span-2 flex flex-wrap items-center justify-center"
    >
      <h2 class="w-full text-center text-4xl">Map</h2>
      <div class="whitespace-pre text-xl">
        <div
          class="grid grid-cols-4"
          v-for="(info, index) in information"
          :key="index"
        >
          <label class="col-span-4">{{ info.label }}</label>
          <span class="col-span-1" />
          <p class="col-span-3 whitespace-pre-line">{{ info.text }}</p>
        </div>
      </div>
    </section>
  </event-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const information = ref([
  {
    label: '會館資訊',
    text: '會館位於台中市清水區民享路117號。',
  },
  {
    label: '開車前往',
    text: '經由國道三號走沙鹿交流道。\n停車場入口位於會館後方。',
  },
  {
    label: '搭乘火車',
    text: '由清水車站轉乘 304 公車或計程車。',
  },
  {
    label: '搭乘客運',
    text: '由台中中港轉運站轉乘 304 公車或計程車。',
  },
]);
</script>
