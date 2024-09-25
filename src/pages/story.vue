<template>
  <story-timeline :stories="stories" />
</template>

<script setup lang="ts">
import { useStoryStore } from '@/stores/story-store';

const { stories, loadStories } = useStoryStore();

if (!stories.length) loadStories();
</script>
