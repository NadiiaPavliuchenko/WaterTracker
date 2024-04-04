import { createSlice } from '@reduxjs/toolkit';
import {
  logOutAPI,
  refreshUser,
  signInAPI,
  signUpAPI,
  changeUserAvatarAPI,
  changeUserSettingsAPI,
  fetchUserData,
  verificateUser,
} from './authOperations';

const initialState = {
  user: {
    name: null,
    email: null,
    avatarURL: null,
    norm: null,
    gender: null,
  },
  token: null,
  authIsLoading: false,
  startDay: null,
  isLoadingChangeAvatar: false,
  isDataUpdating: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  extraReducers: (builder) => {
    builder

      .addCase(signInAPI.pending, (state) => {
        state.authIsLoading = true;
      })
      .addCase(signInAPI.fulfilled, (state, { payload }) => {
        state.authIsLoading = false;
        state.user = { ...payload.user };
        state.token = payload.token;
      })
      .addCase(signInAPI.rejected, (state) => {
        state.authIsLoading = false;
      })

      .addCase(signUpAPI.pending, (state) => {
        state.authIsLoading = true;
      })
      .addCase(signUpAPI.fulfilled, (state, { payload }) => {
        state.authIsLoading = false;
        state.user = { ...payload.user };
      })
      .addCase(signUpAPI.rejected, (state) => {
        state.authIsLoading = false;
      })

      .addCase(logOutAPI.fulfilled, (state) => {
        state.authIsLoading = false;
        state.user = { ...initialState.user };
        state.token = null;
      })
      .addCase(logOutAPI.pending, (state) => {
        state.authIsLoading = true;
      })
      .addCase(logOutAPI.rejected, (state) => {
        state.authIsLoading = false;
        state.user = { ...initialState.user };
        state.token = null;
      })

      .addCase(refreshUser.pending, (state) => {
        state.authIsLoading = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.authIsLoading = false;
        state.user = { ...payload };
      })
      .addCase(refreshUser.rejected, (state) => {
        state.authIsLoading = false;
        state.user = { ...initialState.user };
        state.token = null;
      })

      .addCase(changeUserAvatarAPI.fulfilled, (state, { payload }) => {
        state.isLoadingChangeAvatar = false;
        state.user.avatarURL = payload;
      })
      .addCase(changeUserAvatarAPI.pending, (state) => {
        state.isLoadingChangeAvatar = true;
      })
      .addCase(changeUserAvatarAPI.rejected, (state) => {
        state.isLoadingChangeAvatar = false;
      })

      .addCase(changeUserSettingsAPI.pending, (state) => {
        state.isDataUpdating = true;
      })
      .addCase(changeUserSettingsAPI.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload.user };
        state.isDataUpdating = false;
      })
      .addCase(changeUserSettingsAPI.rejected, (state) => {
        state.isDataUpdating = false;
      })

      .addCase(fetchUserData.pending, (state) => {
        state.authIsLoading = true;
      })
      .addCase(fetchUserData.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload.user };
        state.token = payload.token;
      })
      .addCase(fetchUserData.rejected, (state) => {
        state.user = { ...initialState.user };
        state.token = null;
      })

      .addCase(verificateUser.pending, (state) => {
        state.authIsLoading = true;
      })
      .addCase(verificateUser.fulfilled, (state, { payload }) => {})
      .addCase(verificateUser.rejected, (state) => {
        state.authIsLoading = false;
      });
  },
});
export const { change } = authSlice.actions;
export default authSlice.reducer;
