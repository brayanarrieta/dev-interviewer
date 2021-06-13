import { Method } from 'axios';
import { useState, useEffect } from 'react';
import { axiosInstance } from '../api/axiosInstance';

interface AxiosParams {
  method: Method;
  url?: string;
  baseURL?: string;
  headers?: any;
  params?: any;
  data?: any;
}

export const useAxios = (axiosParams: AxiosParams) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (params: AxiosParams) => {
    try {
      const result = await axiosInstance.request(params);
      setResponse(result.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, []);

  return { response, error, isLoading };
};
