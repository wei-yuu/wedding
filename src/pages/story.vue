<template>
  <ui-timeline align="center">
    <ui-timeline-item
      v-for="(story, index) in stories"
      :key="index"
      :index="index"
      :year="story.year"
      :month="story.month"
      :title="story.title"
      :content="story.content"
      :photo="story.photo"
    />
  </ui-timeline>
</template>

<script setup lang="ts">
import json from '@/../public/our-story.json';
import { ref } from 'vue';

const stories = ref<
  Array<{
    year: string;
    month: string;
    title: string;
    content: string;
    photo?: string;
  }>
>(json);
</script>
