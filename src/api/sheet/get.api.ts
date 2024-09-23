import api from '..';

export default async ({
  sheetId,
  range,
}: {
  sheetId: string;
  range: string;
}): Promise<Array<string[]>> => {
  const apiKey = 'AIzaSyC6stZelR9O_ukD1xE4cXF52KLmvOB626g';

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
