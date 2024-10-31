import getFileListApi from '@/api/drive/get-file-list.api';
import { useApiCall } from '../use-api-call';

export const useGetBackgrounds = () => {
  return useApiCall(async () => {
    const folderId = '1O20EMGMomt5mokbWGJbxQy6LnViXWxcs';

    return await getFileListApi(folderId);
  });
};
