import appendMessageApi from '@/api/app-script/append-message.api';
import { useApiCall } from '../use-api-call';

export const useCreateMessages = () => {
  return useApiCall(
    async ({ name, message }: { name: string; message: string }) => {
      return await appendMessageApi({
        name,
        message,
      });
    },
  );
};
