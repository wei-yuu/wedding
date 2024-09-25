import getFileListApi from '@/api/drive/get-file-list.api';
import { useApiCall } from '../use-api-call';

export const useGetPhotos = () => {
  return useApiCall(async () => {
    const folderId = '16O-BwGriy2ITFfQ5zSsOm8jFbGCV83Dv';

    return await getFileListApi(folderId);
  });
};
