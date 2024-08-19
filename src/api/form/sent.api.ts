import type { GoogleForm } from '@/types/form.type';
import api from '..';

export default (form: GoogleForm) => {
  return api.post(
    '/forms/d/e/1FAIpQLSdzkZ4TYA0-K5KlI5LTuNNkWi-CS3OZLKMuJr8-fJ0fzQxRAg/formResponse',
    {
      data: form,
    },
  );
};
