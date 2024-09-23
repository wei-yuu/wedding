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
import { useGetSheet } from '@/composables/story/use-get-stories';
import { onMounted } from 'vue';

const { data: stories, fetch } = useGetSheet();

onMounted(async () => {
  await fetch();
});
</script>
