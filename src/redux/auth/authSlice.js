import { createSlice } from '@reduxjs/toolkit';
import {
  logOutAPI,
  signInAPI,
  signUpAPI,
} from '../../API/Auth/authentificationUser';
import { fetchUserRefresh } from '../../API/Auth/fetchUserData';
import {
  changeUserAvatarAPI,
  changeUserSettingsAPI,
} from '../../API/Auth/changeUserData';

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
  isLoadingChangeAvatar: false,
  isDataUpdating: false,
  drinks: {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    change(state, action) {
      switch (action.payload.operation) {
        case 'changeBottleXY':
          state.bottleXY = action.payload.data;
          break;
        default:
          break;
      }
    },
  },

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
      .addCase(signUpAPI.fulfilled, (state) => {
        state.authIsLoading = false;
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

      .addCase(fetchUserRefresh.pending, (state) => {
        state.authIsLoading = true;
      })
      .addCase(fetchUserRefresh.fulfilled, (state, { payload }) => {
        state.authIsLoading = false;
        state.user = { ...payload.user };
      })
      .addCase(fetchUserRefresh.rejected, (state) => {
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
      });
  },
});
export const { change } = authSlice.actions;
export default authSlice.reducer;
