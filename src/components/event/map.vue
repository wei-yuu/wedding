<template>
  <event-card>
    <section
      class="col-span-full md:col-span-3 flex flex-wrap items-center justify-center"
    >
      <iframe
        class="min-h-[250px] h-[90%] w-11/12 shadow-lg"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d911.6267320710962!2d120.93476706958957!3d23.942508098658738!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468d82e9e74da15%3A0xe07d7ebf4d86ab7!2zNTQ15Y2X5oqV57ij5Z-U6YeM6Y6u5qGD57Gz5be3MTPomZ8!5e0!3m2!1szh-TW!2stw!4v1736923435209!5m2!1szh-TW!2stw"
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
    label: '地點資訊',
    text: '南投縣埔里鎮桃米巷11號 (於地圖地標中左方黃色建築)',
  },
  {
    label: '開車前往',
    text: '經由國道六號走愛蘭交流道往日月潭方向。',
  },
  {
    label: '搭乘火車(高鐵)',
    text: '由台中火車站(台中高鐵站)轉乘往埔里國道客運，抵達埔里後轉搭計程車或租車前往。',
  },
]);
</script>
