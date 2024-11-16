import getSheetApi from '@/api/sheet/get.api';
import { useApiCall } from '../use-api-call';

export const useGetMessages = () => {
  return useApiCall(async () => {
    const sheetId = '1J4nMChqEgfE6XgD4C-AgTsyBGGFGkrTSrrZp0q7Ppbw';
    const range = 'Messages!A2:B';

    return await getSheetApi({ sheetId, range });
  });
};
