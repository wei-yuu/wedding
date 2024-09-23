import getSheetApi from '@/api/sheet/get.api';
import type { Story } from '@/types/story.type';
import dayjs from 'dayjs';
import { ref } from 'vue';
import { useApiCall } from '../use-api-call';

export const useGetSheet = () => {
  const data = ref<Story[]>([]);

  const { fetch } = useApiCall(async () => {
    const sheetId = '1J4nMChqEgfE6XgD4C-AgTsyBGGFGkrTSrrZp0q7Ppbw';
    const range = 'Stories';

    const rows = await getSheetApi({ sheetId, range });

    rows.forEach((row) => {
      const [date, title, content, photo] = row;

      data.value.push({
        year: String(dayjs(date).year()),
        month: String(dayjs(date).month() + 1),
        title,
        content,
        photo,
      });
    });
  });

  return {
    data,
    fetch,
  };
};
