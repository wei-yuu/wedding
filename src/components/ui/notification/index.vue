<template>
  <ui-dialog
    :visible="store.visible"
    header-classes="justify-center"
    footer-classes="flex justify-center gap-2"
    :title="store.title"
    :show-close="false"
  >
    <template #default v-if="store.message">
      <p class="md:text-2xl text-lg text-center">{{ store.message }}</p>
    </template>
    <template #footer>
      <ui-button
        v-for="(button, index) in store.buttons"
        :key="index"
        :color="button.color"
        @click="button.callback"
      >
        {{ button.text }}
      </ui-button>
    </template>
  </ui-dialog>
</template>

<script setup lang="ts">
import { useNotifyStore } from '@/stores/ui/notify-store';

const store = useNotifyStore();
</script>
