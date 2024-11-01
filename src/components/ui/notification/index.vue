<template>
  <ui-dialog
    :visible="store.visible"
    header-classes="justify-center"
    footer-classes="flex justify-center gap-2"
    :title="store.title"
    :show-close="false"
  >
    <template #default v-if="store.message">
      <div>{{ store.message }}</div>
    </template>
    <template #footer>
      <button
        class="custom-btn btn-7"
        v-for="(button, index) in store.buttons"
        :key="index"
        @click="button.callback"
      >
        <span class="text-lg p-1">{{ button.text }}</span>
      </button>
    </template>
  </ui-dialog>
</template>

<script setup lang="ts">
import { useNotifyStore } from '@/stores/ui/notify-store';

const store = useNotifyStore();
</script>
