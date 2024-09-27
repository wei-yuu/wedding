import { useGetPhotos } from '@/composables/story/use-get-photos';
import { useGetStories } from '@/composables/story/use-get-stories';
import type { Story } from '@/types/story.type';
import dayjs from 'dayjs';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStoryStore = defineStore('story', () => {
  const getStories = useGetStories();
  const getPhotos = useGetPhotos();

  const stories = ref<Story[]>([]);

  const loadStories = async () => {
    const photos = await getPhotos.fetch();
    const storyList = await getStories.fetch();

    storyList.value?.map((story) => {
      const [date, title, description, photoName, majorEvent, color] = story;
      const photoId = photos.value?.find(
        (photo) => photoName === photo.name.split('.')[0],
      )?.id;

      stories.value.push({
        year: String(dayjs(date).year()),
        month: String(dayjs(date).month() + 1),
        title,
        description,
        photo:
          photoId &&
          `https://drive.google.com/thumbnail?id=${photoId}&sz=w1366`,
        majorEvent: majorEvent === 'TRUE',
        color,
      });
    });
  };

  return {
    stories,
    loadStories,
  };
});
