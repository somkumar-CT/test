import axios, { AxiosError, AxiosResponse } from 'axios';

const withAuth = () => {
  const defaultOptions = {
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:4000',
    timeout: 150000,
  };

  const instance = axios.create(defaultOptions);
  instance.interceptors.request.use(async (config) => {
    // const cookie = Cookies.get('qid');
    // if (cookie) {
    //   if (config.headers) config.headers.Authorization = `Bearer ${cookie}`;
    // }
    return config;
  });

  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    (error) => {
      console.error(error);
      throw new AxiosError(error.response.data);
    }
  );

  return instance;
};

export const api = axios.create();
export const apiClient = withAuth();
