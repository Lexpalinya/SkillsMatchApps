import {configureStore} from '@reduxjs/toolkit';
import userSlice from './auth';
import userReducer from '../Store/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    [userSlice.reducerPath]: userSlice.reducer,
  },
  middleware: getDefaultConfig =>
    getDefaultConfig().concat(userSlice.middleware).concat(),
});

export default store;
