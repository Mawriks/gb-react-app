import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  name: 'User',
  visible: true,
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
  },
});

export const { toggleProfileVisible, changeProfileName } = profileSlice.actions;
export const profileReducer = profileSlice.reducer;
