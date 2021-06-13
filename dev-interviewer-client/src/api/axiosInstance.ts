import axios from 'axios';
import { BASE_URL } from './urls';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-type': 'application/json' },
});
