import { Method } from 'axios';
import { axiosInstance } from './axiosInstance';

interface MakeRequestParams {
  method: Method;
  url?: string;
  baseURL?: string;
  headers?: any;
  params?: any;
  data?: any;
}

const DEFAULT_ERROR_TOKEN = 'SOMETHING_WENT_WRONG';

export const makeRequest = async (params: MakeRequestParams) => {
  try {
    const { data } = await axiosInstance.request(params);
    return { data, error: null };
  } catch (err) {
    let error = { ...err };
    if (error.response) {
      const { message, token } = error?.response?.data?.error || {};
      error = {
        message,
        token,
      };
    }
    return {
      data: null,
      error: {
        message: DEFAULT_ERROR_TOKEN,
        token: error.token || DEFAULT_ERROR_TOKEN,
      },
    };
  }
};
