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
        v-if="visible"
        class="relative m-auto px-6 bg-white rounded-lg max-w-[800px]"
      >
        <!-- Header -->
        <div
          v-if="slots.header || title"
          class="flex items-center gap-8 h-[56px] py-8 pr-3 pl-5 font-medium text-gray-900 md:text-4xl text-2xl"
          :class="[
            {
              'justify-between': !(
                headerClasses && /justify/.test(headerClasses)
              ),
            },
            headerClasses,
          ]"
        >
          <slot name="header">
            {{ title }}
          </slot>
          <slot name="header-action" :close="close">
            <div
              v-if="showClose"
              class="absolute right-12 font-icon text-xl cursor-pointer"
              @click="close"
            >
              close
            </div>
          </slot>
        </div>
        <!-- Content -->
        <div
          v-if="slots.default"
          class="px-5 pt-4 pb-6 border-y border-y-gray-200"
          :class="[contentClasses]"
        >
          <slot></slot>
        </div>
        <!-- Footer(Buttons) -->
        <div
          v-if="slots.footer"
          class="h-[58px] px-5 py-3"
          :class="[footerClasses]"
        >
          <slot name="footer"></slot>
        </div>
      </div>
    </transition>
  </ui-overlay>
</template>
<script setup lang="ts">
import { ref, useSlots } from 'vue';

withDefaults(
  defineProps<{
    title?: string;
    headerClasses?: string;
    contentClasses?: string;
    footerClasses?: string;
    showClose?: boolean;
  }>(),
  {
    showClose: true,
  },
);

const visible = defineModel('visible', { default: false });
const slots = useSlots();

const visibleOverlay = ref(false);

const close = () => {
  visible.value = false;
};
</script>
