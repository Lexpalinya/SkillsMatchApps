import { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, { AxiosError } from 'axios';
import axiosInstance from './axiosInstance';

const axiosBaseQuery =
  (): BaseQueryFn<
    { url: string; method?: string; data?: unknown; params?: unknown },
    unknown,
    { status?: number; data?: any; message?: string }
  > =>
  async ({ url, method = 'GET', data, params }) => {
    try {
      const result = await axiosInstance({ url, method, data, params });
      return { data: result.data };
    } catch (error) {
      const axiosError = error as AxiosError;
      return {
        error: {
          status: axiosError.response?.status,
          data: axiosError.response?.data,
          message: axiosError.message,
        },
      };
    }
  };

export default axiosBaseQuery;
