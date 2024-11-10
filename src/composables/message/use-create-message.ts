import appendSheetApi from '@/api/sheet/append.api';
import { useApiCall } from '../use-api-call';

export const useCreateMessages = () => {
  return useApiCall(
    async (
      values: string[],
      options?: {
        majorDimension?: 'ROWS' | 'COLUMNS';
      },
    ) => {
      const sheetId = '1J4nMChqEgfE6XgD4C-AgTsyBGGFGkrTSrrZp0q7Ppbw';
      const range = 'Messages!A2:B';

      return await appendSheetApi({
        sheetId,
        range,
        values,
        majorDimension: options?.majorDimension,
      });
    },
  );
};
