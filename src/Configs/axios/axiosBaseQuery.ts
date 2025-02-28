import {BaseQueryFn} from '@reduxjs/toolkit/query';
import axiosInstance from './axiosInstance';

const axiosBaseQuery =
  (): BaseQueryFn<
    {url: string; method?: string; data?: unknown; params?: unknown},
    unknown,
    unknown
  > =>
  async ({url, method = 'GET', data, params}) => {
    try {
      const result = await axiosInstance({url, method, data, params});
      return {data: result.data};
    } catch (error: any) {
      return {
        error: {
          status: error.response?.status,
          data: error.response?.data || error.message,
        },
      };
    }
  };

export default axiosBaseQuery;
