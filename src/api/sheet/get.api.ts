import api, { apiKey } from '..';

export default async ({
  sheetId,
  range,
}: {
  sheetId: string;
  range: string;
}): Promise<Array<string[]>> => {
  return await api
    .get<{
      majorDimension: 'ROWS' | 'COLUMNS';
      range: string;
      values: Array<string[]>;
    }>(
      `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}`,
      {
        params: {
          key: apiKey,
        },
      },
    )
    .then(({ data }) => {
      return data.values;
    });
};
