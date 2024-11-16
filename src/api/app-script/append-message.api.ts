import api from '..';

export default async ({ name, message }: { name: string; message: string }) => {
  await api.post<{
    message: 'success';
    name: string;
  }>(
    'https://script.google.com/macros/s/AKfycbzfw21WAg_9QL-Q1iupDBS2MU-MkQQapUQQpBZeNYThXD-4RQIT2SUtWVGCg3xIAFnd/exec',
    JSON.stringify({ name, message }),
  );
};
