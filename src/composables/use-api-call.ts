import { readonly, ref } from 'vue';

export const useApiCall = <T, R>(
  fetch: (...payload: R[]) => Promise<T> | T,
) => {
  const error = ref();
  const loading = ref<boolean>(false);
  const data = ref<T>();
  const wrappedFetch = async (...payload: R[]) => {
    loading.value = true;
    const response = await Promise.resolve(fetch(...payload))
      .catch((e) => {
        error.value = e;
        throw e;
      })
      .finally(() => {
        loading.value = false;
      });
    data.value = response;

    return data;
  };

  return {
    error: readonly(error),
    loading: readonly(loading),
    fetch: wrappedFetch,
    data,
  };
};
