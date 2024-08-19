import { useSentForm } from '@/composables/form/use-sent-form';
import type { Form } from '@/types/store/form.type';
import { defineStore } from 'pinia';
import { computed, readonly, ref } from 'vue';

export const useFormStore = defineStore('form', () => {
  const sentForm = useSentForm();
  const form = ref<Form>({
    name: '',
    phone: '',
    friendship: '',
    relationship: '',
    attend: '',
    attendance: '',
    childSeat: {
      value: '',
    },
    eatingHabits: '',
    invitationType: {
      value: '',
      address: '',
      email: '',
    },
    message: '',
  });
  const action = ref('next');
  const step = ref(0);
  const tail = ref(Object.keys(form.value).length - 1);

  const current = computed(() => {
    const formNames = ref(Object.keys(form.value));

    return formNames.value[step.value] as keyof Form;
  });

  const previous = () => {
    action.value = 'previous';

    if (
      current.value === 'invitationType' &&
      (form.value.attend === '禮到人不到' || form.value.attend === '否')
    ) {
      step.value -= 4;
    } else {
      step.value -= 1;
    }
  };

  const next = () => {
    action.value = 'next';

    if (
      current.value === 'attend' &&
      (form.value.attend === '禮到人不到' || form.value.attend === '否')
    ) {
      step.value += 4;
    } else {
      step.value += 1;
    }
  };

  const submit = async () => {
    await sentForm.fetch(form.value);
  };

  return {
    form,
    action: readonly(action),
    current: readonly(current),
    tail: readonly(tail),
    step: readonly(step),
    previous,
    next,
    submit,
  };
});
