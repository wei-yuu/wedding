import axios, {
  type AxiosError,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios';

interface ResponseData {
  error?: string;
  message?: string;
  path: string;
  status: number;
  timestamp: string;
}

const instance = axios.create({
  baseURL: import.meta.env.VITE_GOOGLE_API ?? 'https://docs.google.com',
});

instance.interceptors.request.use((request: InternalAxiosRequestConfig) => {
  return request;
});

instance.interceptors.response.use(
  async (response: AxiosResponse<{ code: string }>) => {
    if (response.status !== 200)
      return await Promise.reject(new Error('發生錯誤，請洽管理員'));
    return response;
  },
  (error: AxiosError) => {
    const responseData = error.response?.data as ResponseData;
    if (responseData === undefined) throw new Error(error.message);
    const message = responseData.error ?? responseData.message ?? '';
    throw new Error(message);
  },
);

export default instance;

export const apiKey = import.meta.env.VITE_API_KEY;
