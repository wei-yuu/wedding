<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <div
      class="m-auto px-8 xl:w-[70vw] md:w-[80vw] w-[90vw] h-[65vh] bg-white/80 rounded-lg flex flex-col justify-center gap-10"
    >
      <div class="md:text-4xl text-3xl text-center">留言給我們 (σ′▽‵)′▽‵)σ</div>
      <div class="grid gap-2 text-2xl">
        <span>如何稱呼：</span>
        <input class="w-full" type="text" v-model="name" />
      </div>
      <div class="grid gap-2 text-2xl">
        <span>想對我們說：</span>
        <input class="w-full" type="text" v-model="message" />
      </div>
      <ui-button color="blue" @click="submit">發送～ (๑•̀ω•́)ノ</ui-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const message = ref('');

const submit = () => {};
</script>
