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
      console.log('error during sign up', getErrorMessage(error));
      toastError(getErrorMessage(error).toString());

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

/**
 * Thunk action for user verification.
 *
 * @param {String} token - The verification token associated with the user's account.
 * @param {Function} thunkAPI - The thunk API for dispatching actions and reading state.
 *
 * Sends a PATCH request to the server's verification endpoint with the provided token.
 *
 * This action is typically dispatched when a user attempts to verify their account using a token received via email.
 */

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

/**
 * Thunk action for user re-verification.
 *
 * @param {String} email - The email address of the user to be re-verified.
 * @param {Function} thunkAPI - The thunk API for dispatching actions and reading state.
 *
 * Sends a POST request to the server's email verification endpoint with the user's email.
 *
 * This action is typically dispatched when a user needs to re-verify their email address, possibly due to the initial verification link expiring.
 */

export const reVerificateUser = createAsyncThunk(
  'auth/reVerificateUser',
  async (email, thunkAPI) => {
    try {
      const { data } = await axios.post('auth/verify', email);

      return data;
    } catch (error) {
      toastError(getErrorMessage(error));
      return thunkAPI.rejectWithValue(getErrorMessage(error));
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

/**
 * Thunk action for sending a password recovery email.
 *
 * @param {String} email - The email address to which the recovery email will be sent.
 * @param {Function} thunkAPI - The thunk API for dispatching actions and reading state.
 *
 * Sends a POST request to the server's password recovery endpoint with the user's email.
 *
 * This action is typically dispatched when a user requests to recover their password, triggering an email with instructions on how to reset it.
 */

export const sendRecoveryEmail = createAsyncThunk(
  'auth/sendRecoveryEmail',
  async (email, thunkAPI) => {
    try {
      const { data } = await axios.post('auth/recover', email);

      toastSuccess(data.message);

      return data;
    } catch (error) {
      toastError(getErrorMessage(error));
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

/**
 * Thunk action for password recovery.
 *
 * @param {Object} payload - An object containing the verification token and new password.
 * @param {Function} thunkAPI - The thunk API for dispatching actions and reading state.
 *
 * Sends a PATCH request to the server's password verification endpoint with the token and new password.
 *
 * This action is typically dispatched when a user attempts to recover their password using a token received via email.
 */

export const recoverPassword = createAsyncThunk(
  'auth/recoverPassword',
  async ({ recoveryToken, password }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`auth/recover/${recoveryToken}`, {
        password,
      });

      toastSuccess(data.message);

      return data;
    } catch (error) {
      toastError(getErrorMessage(error));
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);

export const deleteUserAccount = createAsyncThunk(
  'auth/deleteUserAccount',
  async ({ id, password }, thunkAPI) => {
    try {
      const { data } = await axios.delete(`user/delete/${id}`, {
        password,
      });
      toastSuccess(data.message);
      return data;
    } catch (error) {
      toastError(getErrorMessage(error));
      return thunkAPI.rejectWithValue(getErrorMessage(error));
    }
  }
);
