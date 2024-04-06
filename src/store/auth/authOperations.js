import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastError, toastSuccess } from '../../services/notification';

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

const setAuthHeader = (token = null) => {
  if (!token) axios.defaults.headers.common.Authorization = ``;
  else axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const getErrorMessage = (error) => {
  if (error.response && error.response.data) {
    return error.response.data.message || 'Unknown error';
  } else if (error.message) {
    return error.message;
  } else {
    return 'Unknown error';
  }
};

export const signUpAPI = createAsyncThunk(
  'signUp/signUpAPI',

  async (credentials) => {
    try {
      const res = await axios.post('auth/register', credentials);
      setAuthHeader(res.data.token);
      toastSuccess(
        'Registration successful. We send you an email with a link to activate your account'
      );
      return res.data;
    } catch (error) {
      toastError(
        `Something went wrong. Please try again or log in`,
        getErrorMessage(error)
      );

      throw error;
    }
  }
);

export const signInAPI = createAsyncThunk(
  'signIn/signInAPI',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('auth/login', credentials);
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
      await axios.post('auth/logout');
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
      const res = await axios.get('user/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Autorization error');
    }
  }
);

export const verificateUser = createAsyncThunk(
  'auth/verificateUser',
  async (token, thunkAPI) => {
    try {
      const { data } = await axios.patch(`auth/verify/${token}`);

      toastSuccess(data.message);

      return data;
    } catch (error) {
      toastError(getErrorMessage(error));
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);
//TODO: обработать post "/api/auth/verify" reVerificateUser body: {email}
export const reVerificateUser = createAsyncThunk(
  'auth/reVerificateUser',
  async (email, thunkAPI) => {
    try {
      const { data } = await axios.post('auth/verify', email);
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
      } = await axios.patch('user/avatars', formData, {
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
      const { data } = await axios.patch('user', user);
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
      const { data } = await axios.get('user/current');
      return data;
    } catch (error) {
      toastError('Something went wrong');
      return thunkAPI.rejectWithValue('Something went wrong');
    }
  }
);

// TODO опрацювати запит post    "/api/auth/recover-password"                       sendLetterForUserPAssworwRecovery        body: {email}

export const recoverUserPassword = createAsyncThunk(
  'auth/recoverUserPassword',
  async (email, thunkAPI) => {
    try {
      const { data } = await axios.post('auth/recover-password', email);
      toastSuccess(data.message);
      return data;
    } catch (error) {
      toastError(getErrorMessage(error));
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

// TODO patch    "/api/auth/recover-password/:passwordRecoveryToken"                          recoverUserPassword        body: {password}

export const recoverUserPasswordAPI = createAsyncThunk(
  'auth/recoverUserPasswordAPI',
  async (password, thunkAPI) => {
    try {
      const { data } = await axios.patch(
        'auth/recover-password/:passwordRecoveryToken',
        password
      );
      toastSuccess(data.message);
      return data;
    } catch (error) {
      toastError(getErrorMessage(error));
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);
