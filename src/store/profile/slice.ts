import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  name: 'User',
  visible: true,
  isAuth: false,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    toggleProfileVisible: (state) => {
      state.visible = !state.visible;
    },
    changeProfileName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    auth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const { toggleProfileVisible, changeProfileName, auth } =
  profileSlice.actions;
export const profileReducer = profileSlice.reducer;
