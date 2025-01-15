<template>
  <ui-dialog
    v-model:visible="visible"
    header-classes="justify-center"
    footer-classes="flex justify-center gap-2"
    title="留言給我們 (σ′▽‵)′▽‵)σ"
    show-close
  >
    <template #default>
      <div class="w-96 grid gap-8">
        <div class="grid gap-2 text-2xl">
          <span>如何稱呼：</span>
          <input
            class="w-full"
            :class="{
              '!border-b-red-500': noName,
            }"
            type="text"
            v-model="name"
          />
          <p v-if="noName" class="text-red-500">
            請不要害羞，讓我們知道怎麼稱呼你🥺
          </p>
        </div>
        <div class="grid gap-2 text-2xl">
          <span>想對我們說：</span>
          <input
            class="w-full"
            :class="{
              '!border-b-red-500': noMessage,
            }"
            type="text"
            v-model="message"
          />
          <p v-if="noMessage" class="text-red-500">
            等等！你沒有話要跟我們說嗎？😮
          </p>
        </div>
      </div>
    </template>
    <template #footer>
      <ui-button color="blue" @click="submit">(๑•̀ω•́)ノ [發送 !!]</ui-button>
    </template>
  </ui-dialog>
</template>

<script setup lang="ts">
import { useCreateMessages } from '@/composables/message/use-create-message';
import { appLoading } from '@/plugins/app-loading';
import { appNotify } from '@/plugins/app-notify';
import { ref } from 'vue';

const { fetch } = useCreateMessages();

const visible = defineModel('visible', { default: false });

const name = ref('');
const message = ref('');
const noName = ref(false);
const noMessage = ref(false);

const submit = async () => {
  noName.value = false;
  noMessage.value = false;

  if (!name.value) {
    noName.value = true;
    return;
  }

  if (!message.value) {
    noMessage.value = true;
    return;
  }

  appLoading.start('正在紀錄你的祝福～～～', 'edit');
  visible.value = false;

  await fetch({
    name: name.value,
    message: message.value,
  })
    .then(() => {
      appNotify.confirm({
        title: `感謝 ${name.value} 的留言`,
        message: '再留一則或繼續看大家的祝福～',
        options: {
          cancelButton: {
            text: '還有話想說～',
            color: 'pink',
            callback: () => {
              message.value = '';
              visible.value = true;
            },
          },
          confirmButton: {
            text: '看祝福！',
            color: 'blue',
            callback: () => {
              name.value = '';
              message.value = '';
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
            callback: () => {
              visible.value = true;
            },
          },
        },
      });
    })
    .finally(() => appLoading.stop());
};
</script>
