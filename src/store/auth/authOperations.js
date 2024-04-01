import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastError, toastSuccess } from '../../services/notification';

axios.defaults.baseURL = 'https://tracker-of-water-oqqk.onrender.com/api';
const setAuthHeader = (token = null) => {
  if (!token) axios.defaults.headers.common.Authorization = ``;
  else axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const signUpAPI = createAsyncThunk(
  'signUp/signUpAPI',

  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/register', credentials);
      setAuthHeader(res.data.token);
      toastSuccess(
        'Registration successful. We send you an email with a link to activate your account'
      );
      return res.data;
    } catch (error) {
      toastError('Something went wrong. Please try again or log in');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signInAPI = createAsyncThunk(
  'signIn/signInAPI',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/auth/login', credentials);
      setAuthHeader(res.data.token);
      toastSuccess('Login successful. Welcome!');
      return res.data;
    } catch (error) {
      toastError(error.response.data.message);
      return thunkAPI.rejectWithValue(
        'Not valid email or password. Please, try again'
      );
    }
  }
);

export const logOutAPI = createAsyncThunk(
  'auth/logout',
  async (_, thunkAPI) => {
    try {
      await axios.post('/auth/logout');
      setAuthHeader();
      toastSuccess('Log out successful. Come back sooner');
    } catch (error) {
      axios.defaults.headers.common.Authorization = '';
      toastSuccess('Log out successful. Come back sooner');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('No user');
    }
    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/user/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Autorization error');
    }
  }
);

//TODO: обработать get "/api/auth/verify/:verificationToken" verificateUser
export const verificateUser = createAsyncThunk(
  'auth/verificateUser',
  async (token, thunkAPI) => {
    try {
      const { data } = await axios.get(`/auth/verify/${token}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
//TODO: обработать post "/api/auth/verify" reVerificateUser body: {email}
export const reVerificateUser = createAsyncThunk(
  'auth/reVerificateUser',
  async (email, thunkAPI) => {
    try {
      const { data } = await axios.post('/auth/verify', email);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeUserAvatarAPI = createAsyncThunk(
  'auth/changeUserAvatarAPI',
  async (formData, thunkAPI) => {
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
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  }
);

export const changeUserSettingsAPI = createAsyncThunk(
  'auth/changeUserData',
  async (user, thunkAPI) => {
    try {
      const { data } = await axios.patch('/user', user);
      toastSuccess('User info changed successful ');
      return data;
    } catch (error) {
      toastError('Something went wrong');
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  }
);

export const fetchUserData = createAsyncThunk(
  'auth/userData',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/user/current');
      return data;
    } catch (error) {
      toastError('Something went wrong');
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  }
);