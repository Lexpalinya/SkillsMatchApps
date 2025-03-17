import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export type UserProfile = {
  id: string;
  isActive: boolean;
  visible: boolean;
  username: string;
  email: string;
  phoneNumber: string;
  password: string;
  profile: string | null;
  blackground: string | null;
  role: 'jobber' | 'admin' | 'user';
  block: boolean;
  loginVersion: number;
  createdAt: string; // หรือ Date
  updatedAt: string; // หรือ Date
  accessToken: string;
  refreshToken: string;
};

// ✅ กำหนดให้ initialState เป็น UserProfile | null

const userSlice = createSlice({
  name: 'user',
  initialState: null as UserProfile | null,
  reducers: {
    setUserProfile: (
      _state: UserProfile | null,
      action: PayloadAction<UserProfile>,
    ) => {
      return action.payload;
    },
    clearUserProfile: () => null,
    updateUserProfile: (state, action: PayloadAction<Partial<UserProfile>>) => {
      if (!state || !action.payload) return; // เช็คว่า payload มีค่าหรือไม่
      return {...state, ...action.payload}; // ใช้ spread operator เพื่อสร้าง state ใหม่
    },
  },
});

// ✅ Export Actions และ Reducer
export const {setUserProfile, clearUserProfile, updateUserProfile} =
  userSlice.actions;
export default userSlice.reducer;
