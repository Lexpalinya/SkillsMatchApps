import {configureStore} from '@reduxjs/toolkit';
import userSlice from './auth';
import {getDefaultConfig} from '@react-native/metro-config';

const store = configureStore({
  reducer: {
    [userSlice.reducerPath]: userSlice.reducer,
  },
  middleware: getDefaultConfig =>
    getDefaultConfig().concat(userSlice.middleware).concat(),
});

export default store;
