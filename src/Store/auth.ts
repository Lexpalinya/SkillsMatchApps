import {createApi} from '@reduxjs/toolkit/query/react';
import axiosBaseQuery from '../Configs/axios/axiosBaseQuery';
import {Asset} from 'react-native-image-picker';

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
      query: data => ({
        url: '/users/register',
        method: 'POST',
        data,
      }),
    }),
    update: builder.mutation<
      unknown,
      {
        email?: string;
        phoneNumber?: string;
        username?: string;
        visible?: boolean;
      }
    >({
      query: data => ({
        url: '/users',
        method: 'PUT',
        data,
      }),
    }),

    updateProfile: builder.mutation<unknown, {img: Asset; url?: string}>({
      query: ({img, url}) => {
        const formData = new FormData();
        // formData.append('img', {
        //   uri: img.uri,
        //   name: img.fileName || 'upload.jpg',
        //   type: img.type || 'image/jpeg',
        // } as any);

        // if (url) {
        //   formData.append('url', url);
        // }
        return {
          url: 'users/profile',
          method: 'PUT',
          data: {
            img: {
              uri: img.uri,
              name: img.fileName || 'upload.jpg',
              type: img.type || 'image/jpeg',
            } as any,
          },
        };
      },
    }),

    updateBackground: builder.mutation<unknown, {img: Asset; url?: string}>({
      query: ({img, url}) => {
        const formData = new FormData();
        formData.append('img', {
          uri: img.uri,
          name: img.fileName || 'upload.jpg',
          type: img.type || 'image/jpeg',
        } as any);

        if (url) {
          formData.append('url', url);
        }
        return {
          url: '/users/blackground',
          method: 'PUT',
          data: formData,
        };
      },
    }),

    refreshToken: builder.mutation({
      query: () => ({
        url: '/users/refreshToken',
        method: 'POST',
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useRefreshTokenMutation,
  useLogoutMutation,
  useUpdateMutation,
  useUpdateBackgroundMutation,
  useUpdateProfileMutation,
} = userSlice;
export default userSlice;
