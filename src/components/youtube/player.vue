<template>
  <teleport to="body">
    <div
      id="player"
      :class="{
        hidden: !visible,
        visible: visible,
      }"
    />
  </teleport>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const props = defineProps<{
  id: string;
  visible?: boolean;
  host?: string;
}>();

const player = ref<YT.Player>();

const onPlayerReady = () => {
  player.value?.setShuffle(true);
  player.value?.playVideoAt(0);
};

const onYouTubeIframeAPIReady = () => {
  player.value = new YT.Player('player', {
    videoId: props.id,
    playerVars: {
      autoplay: 0,
      controls: 0,
      enablejsapi: 1,
      loop: 1,
      list: /^PL/.test(props.id) ? props.id : undefined,
    },
    events: {
      onReady: onPlayerReady,
    },
    host: props.host,
  });
};

onMounted(() => {
  onYouTubeIframeAPIReady();
});
</script>
