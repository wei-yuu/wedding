import type { DriveFile } from '@/types/story.type';
import api, { apiKey } from '..';

export default async (folderId: string): Promise<DriveFile[]> => {
  return await api
    .get<{
      nextPageToken?: string;
      kind: string;
      incompleteSearch: boolean;
      files: DriveFile[];
    }>(`https://www.googleapis.com/drive/v3/files`, {
      params: {
        key: apiKey,
        q: `'${folderId}' in parents`,
      },
    })
    .then(({ data }) => {
      return data.files;
    });
};
