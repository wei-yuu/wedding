<template>
  <div class="w-screen h-screen flex gap-16 justify-center items-center p-4">
    <div
      class="relative w-full h-full flex flex-col justify-center items-center text-center"
    >
      <p class="text-7xl">很無聊嗎？</p>
      <p class="text-7xl">
        快掃我留言給
        <span
          class="bg-clip-text bg-gradient-to-r from-blue/60 to-pink/60 text-transparent"
        >
          暐褕
        </span>
      </p>
      <p class="absolute bottom-[15%] text-4xl whitespace-pre">
        {{ '祝福完歡迎去逛逛我們的故事🍣\n等一下也許會用到！呵ʕ •ᴥ•ʔ' }}
      </p>
    </div>
    <img
      class="rounded shadow-lg max-w-[840px]"
      src="/public/qrcode.png"
      alt=""
      srcset=""
    />
  </div>
</template>
<script setup lang="ts"></script>
