import getSheetApi from '@/api/sheet/get.api';
import { useApiCall } from '../use-api-call';

export const useGetStories = () => {
  return useApiCall(async () => {
    const sheetId = '1J4nMChqEgfE6XgD4C-AgTsyBGGFGkrTSrrZp0q7Ppbw';
    const range = 'Stories';

    return await getSheetApi({ sheetId, range });
  });
};
