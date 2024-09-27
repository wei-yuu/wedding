<template>
  <ui-timeline align="center">
    <ui-timeline-item
      v-for="(item, index) in timelineItems"
      :key="index"
      :index="index"
      :item="item"
      :full-dot="item.fullDot"
      :color="item.color"
    >
      <template #opposite="{ item: { year, month } }">
        <span class="text-2xl">{{ year }} 年 {{ month }} 月</span>
      </template>
      <template #default="{ item: { title, photo, description, color } }">
        <h2
          class="text-3xl px-4 pt-4 rounded-t-lg"
          :class="{
            'bg-pink/50': color === 'pink',
            'bg-blue/50': color === 'blue',
            'bg-gray-300/50': color === 'gray',
          }"
        >
          {{ title }}
        </h2>
        <div
          class="w-full text-2xl flex justify-evenly items-center p-4 bg-white/70 rounded-b-lg"
        >
          <span
            v-if="description"
            class="whitespace-pre text-wrap break-all w-1/4"
          >
            {{ description }}
          </span>
          <img v-if="photo" class="max-w-[70%]" :src="photo" />
        </div>
      </template>
    </ui-timeline-item>
  </ui-timeline>
</template>

<script setup lang="ts">
import type { Story } from '@/types/story.type';
import { computed } from 'vue';

const props = defineProps<{
  stories: Story[];
}>();

const timelineItems = computed(() => {
  return props.stories.map((story) => {
    return {
      year: story.year,
      month: story.month,
      title: story.title,
      description: story.description,
      photo: story.photo,
      fullDot: story.majorEvent,
      color: story.color,
    };
  });
});
</script>
