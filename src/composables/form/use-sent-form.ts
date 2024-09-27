import sentApi from '@/api/form/sent.api';
import { FormKey, type GoogleForm } from '@/types/form.type';
import type { Form } from '@/types/store/form.type';
import { ref } from 'vue';
import { useApiCall } from '../use-api-call';

export const useSentForm = () => {
  return useApiCall(async (form: Form) => {
    const googleForm = ref<GoogleForm>({});

    Object.entries(form).forEach(([key, value]) => {
      switch (key) {
        case 'childSeat':
          googleForm.value[FormKey.childSeat] = value.value;
          googleForm.value[FormKey.childSeatNumber] = value.childSeatNumber;
          return;
        case 'invitationType':
          googleForm.value[FormKey.invitationType] = value.value;
          googleForm.value[FormKey.address] = value.address;
          googleForm.value[FormKey.email] = value.email;
          return;
        default:
          googleForm.value[FormKey[key as keyof typeof FormKey]] = value;
          return;
      }
    });

    return await sentApi(googleForm.value);
  });
};
