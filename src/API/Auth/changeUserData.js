import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastSuccess, toastError } from '../../services/notification';

axios.defaults.baseURL = `https://tracker-of-water-oqqk.onrender.com/api/`;

export const changeUserAvatarAPI = createAsyncThunk(
  'auth/changeUserAvatarAPI',
  async (formData, { rejectWithValue }) => {
    try {
      const {
        data: { avatarURL },
      } = await axios.patch('/user/avatars', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toastSuccess('Avatar changed successful ');
      return avatarURL;
    } catch (error) {
      toastError('Something went wrong');
      return rejectWithValue('Something went wrong');
    }
  }
);

export const changeUserSettingsAPI = createAsyncThunk(
  'auth/changeUserData',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch('/user', user);
      toastSuccess('User info changed successful ');
      return data;
    } catch (error) {
      toastError('Something went wrong');
      return rejectWithValue('Something went wrong');
    }
  }
);
