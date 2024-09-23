import api from '..';

export default async ({
  sheetId,
  range,
}: {
  sheetId: string;
  range: string;
}): Promise<Array<string[]>> => {
  const apiKey = 'AIzaSyBOC04rDSCD3hJpld3mEpsCfhkupmzITeU';

  return await api
    .get<{
      majorDimension: 'ROWS' | 'COLUMNS';
      range: string;
      values: Array<string[]>;
    }>(
      `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`,
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
