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
      {email: string; phoneNumber: string; role: string; password: string}
    >({
      query: data => ({url: '/user/register', method: 'POST', data}),
    }),
  }),
});

export const {useLoginMutation, useRegisterMutation} = userSlice;

export default userSlice;
