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
      <ui-button color="blue" @click="submit">(๑•̀ω•́)ノ [發送 !!]</ui-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCreateMessages } from '@/composables/message/use-create-message';
import { appLoading } from '@/plugins/app-loading';
import { appNotify } from '@/plugins/app-notify';
import router from '@/router';
import { ref } from 'vue';

const { fetch } = useCreateMessages();

const name = ref('');
const message = ref('');

const submit = async () => {
  if (!name.value) {
    appNotify.alert({
      title: '請不要害羞，讓我們知道怎麼稱呼你🥺',
      options: {
        button: {
          color: 'blue',
        },
      },
    });
    return;
  }

  if (!message.value) {
    appNotify.alert({
      title: '等等！你沒有話要跟我們說嗎？😮',
      options: {
        button: {
          color: 'blue',
        },
      },
    });
    return;
  }

  appLoading.start('正在紀錄你的祝福～～～', 'edit');

  await fetch({
    name: name.value,
    message: message.value,
  })
    .then(() => {
      appNotify.confirm({
        title: `感謝 ${name.value} 的留言`,
        // message: '我們有收到你的祝福囉～請再關注大螢幕 ☺️',
        message: '再留一則或去看看我們的故事更了解暐褕吧🤭',
        options: {
          cancelButton: {
            text: '還有話想說～',
            color: 'pink',
            callback: () => {
              message.value = '';
            },
          },
          confirmButton: {
            text: '去看故事！',
            color: 'blue',
            callback: () => {
              name.value = '';
              message.value = '';
              router.push('/our-story');
            },
          },
        },
      });
    })
    .catch(() => {
      appNotify.alert({
        title: '噢...抱歉！出了點問題🥹',
        message: '請您再重新發送一次🙏',
        options: {
          button: {
            color: 'gray',
          },
        },
      });
    })
    .finally(() => appLoading.stop());
};
</script>
