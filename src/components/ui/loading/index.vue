<template>
  <ui-overlay :visible="visibleOverlay">
    <transition
      enter-active-class="transition-all ease duration-500"
      leave-active-class="transition-all ease duration-500"
      enterFromClass="opacity-0 translate-y-[-30px]"
      enterToClass="opacity-100"
      leaveFromClass="opacity-100"
      leaveToClass="opacity-0 translate-y-[-30px]"
      @before-enter="visibleOverlay = true"
      @after-leave="visibleOverlay = false"
    >
      <div
        v-if="store.visible"
        class="relative w-full h-full flex justify-center"
      >
        <div
          class="absolute top-[100px] flex flex-col gap-2 rounded-lg p-2 justify-center items-center w-[260px] h-[180px] bg-white shadow-[0_4px_12px_0_#00000029]"
        >
          <div class="relative flex w-full h-full justify-center items-center">
            <div
              class="absolute w-16 h-16 font-icon m-auto loading"
              :data-icon="icon"
            />
            <img
              class="w-16 h-16 border-2 border-gray-300 rounded-full"
              src="/loading.png"
              alt="wei-yuu"
            />
          </div>
          <p class="text-2xl">{{ store.message }}</p>
        </div>
      </div>
    </transition>
  </ui-overlay>
</template>
<script setup lang="ts">
import { useLoadingStore } from '@/stores/ui/loading-store';
import { computed, ref } from 'vue';

const store = useLoadingStore();

const visibleOverlay = ref(false);

const icon = computed(() => {
  return store.icon ?? 'search';
});
</script>

<style lang="scss" scoped>
.loading {
  animation: rotation 3s infinite linear;
  &::before {
    content: attr(data-icon);
    position: absolute;
    left: -15px;
    top: -15px;
    font-size: 24px;
    animation: reverse-rotation 3s infinite linear;
  }
}

@keyframes reverse-rotation {
  from {
    transform: rotate(0) translateZ(0);
  }
  to {
    transform: rotate(-360deg) translateZ(0);
  }
}

@keyframes rotation {
  from {
    transform: rotate(0) translateZ(0);
  }
  to {
    transform: rotate(360deg) translateZ(0);
  }
}
</style>
