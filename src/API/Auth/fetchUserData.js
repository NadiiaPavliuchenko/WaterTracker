import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastError, toastSuccess } from 'services/notification';

axios.defaults.baseURL = 'https://localhost:3001/api';

export const fetchUserData = createAsyncThunk(
  'auth/userData',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/users/info');
      return data;
    } catch (error) {
      toastError('Something went wrong');
      return rejectWithValue('Something went wrong');
    }
  }
);

export const changeUserData = createAsyncThunk(
  'auth/changeUserData',
  async (user, { rejectWithValue }) => {
    try {
      await axios.patch('/users/info', user);
      toastSuccess('User info changed successful ');
      const { data } = await axios.get('/users/info');
      return data;
    } catch (error) {
      toastError('Invalid password');
      return rejectWithValue('Something went wrong');
    }
  }
);

export const fetchUserRefresh = createAsyncThunk(
  'auth/refresh',
  async (_, { getState, rejectWithValue }) => {
    const { token: currentToken } = getState().auth;

    if (currentToken === null) {
      return rejectWithValue('Without token');
    }

    axios.defaults.headers.common.Authorization = `Bearer ${currentToken}`;
    try {
      const { data: user } = await axios.get('/users/current');

      return user;
    } catch (error) {
      axios.defaults.headers.common.Authorization = '';
      toastError(
        'Auth state is old. Please enter to your personal cabinet again'
      );
      return rejectWithValue(
        'Auth state is old. Please enter to your personal cabinet again'
      );
    }
  }
);
