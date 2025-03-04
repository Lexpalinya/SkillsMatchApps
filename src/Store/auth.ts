import {createApi} from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '../Configs/axios/axiosBaseQuery';

const userSlice = createApi({
  reducerPath: 'UserSlice',
  baseQuery: axiosBaseQuery(),
  tagTypes: ['User'],
  endpoints: builder => ({
    login: builder.mutation<unknown, {phoneNumber: string; password: string}>({
      query: credentials => ({
        url: '/users/login',
        method: 'POST',
        data: credentials,
      }),
    }),
    register: builder.mutation<
      unknown,
      {
        email: string;
        phoneNumber: string;
        role: string;
        password: string;
        username?: string;
      }
    >({
      query: data => ({url: '/users/register', method: 'POST', data}),
    }),
    refreshToken: builder.mutation({
      query: () => ({
        url: '/users/refreshToken',
        method: 'POST',
      }),
    }),
  }),
});

export const {useLoginMutation, useRegisterMutation, useRefreshTokenMutation} =
  userSlice;
export default userSlice;
