import api, { apiKey } from '..';

export default async <T>({
  sheetId,
  range,
  majorDimension,
  values,
}: {
  sheetId: string;
  range: string;
  majorDimension?: 'ROWS' | 'COLUMNS';
  values: Array<T>;
}) => {
  await api.post<{
    spreadsheetId: string;
    tableRange: string;
    updates: {};
  }>(
    `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}:append`,
    {
      params: {
        key: apiKey,
      },
      range,
      majorDimension,
      values,
    },
  );
};
