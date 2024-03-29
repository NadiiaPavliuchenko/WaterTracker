import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastError, toastSuccess } from '../../services/notification';

axios.defaults.baseURL = 'https://localhost:3001/api';

export const signUpAPI = createAsyncThunk(
  'signUp/signUpAPI',

  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/register', user);

      // write token to axios parameter
      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;

      toastSuccess(
        'We have sent email verification on your email. Please, check it'
      );
      return data;
    } catch (error) {
      toastError('Something went wrong. Please try again or log in');
      return rejectWithValue(error.message);
    }
  }
);

export const signInAPI = createAsyncThunk(
  'signIn/signInAPI',
  async (user, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/users/login', user);
      // write token to axios parameter
      axios.defaults.headers.common.Authorization = `Bearer ${data.token}`;

      toastSuccess('Log in successful. Welcome back ');
      return data;
    } catch (error) {
      toastError(error.response.data.message);
      return rejectWithValue('Not valid email or password. Please, try again');
    }
  }
);

export const logOutAPI = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout');
      axios.defaults.headers.common.Authorization = '';
      toastSuccess('Log out successful. Come back sooner');
    } catch (error) {
      axios.defaults.headers.common.Authorization = '';
      toastSuccess('Log out successful. Come back sooner');
      return rejectWithValue(error.message);
    }
  }
);
