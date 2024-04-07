import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toastError, toastSuccess } from '../../services/notification';

axios.defaults.baseURL = import.meta.env.VITE_SERVER_URL;

//статистика за поточний місяць
export const getCurrentMonthInfoThunk = createAsyncThunk(
  'water/getMonth',
  async (date, thunkAPI) => {
    const { startDate, endDate } = date;
    try {
      const { data } = await axios.get('month', {
        params: {
          startDate,
          endDate,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//дані поточного дня
export const getCurrentDayInfoThunk = createAsyncThunk(
  'water/getDay',
  async (_, thunkAPI) => {
    try {
      const date = new Date().toISOString().split('T')[0];
      const { data } = await axios.get('today', {
        params: {
          date,
        },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//додавання води
export const addWaterThunk = createAsyncThunk(
  'water/add',
  async (data, thunkAPI) => {
    const { ml, time } = data;
    const date = new Date().toISOString().split('T')[0];
    try {
      const { data } = await axios.post(`water/${date}/`, { time, ml });
      toastSuccess('Drink has been added successful');
      return data;
    } catch (error) {
      toastError('Sorry, something went wrong. Please, try again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//видалення води
export const deleteDrinkThunk = createAsyncThunk(
  'water/delete',
  async (waterRecordId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`water/${waterRecordId}`);
      toastSuccess('Drink has been deleted successful');
      return data;
    } catch (error) {
      toastError('Sorry, something went wrong. Please, try again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//редагування води
export const editDrinkThunk = createAsyncThunk(
  'water/edit',
  async (waterRecirdId, thunkAPI) => {
    const { id, time, ml } = waterRecirdId;
    try {
      const { data } = await axios.put(`water/${id}`, { time, ml });
      toastSuccess('Drink has been edited successful');
      return data;
    } catch (error) {
      toastError('Sorry, something went wrong. Please, try again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//редагування денної норми
export const editDailyNorm = createAsyncThunk(
  'water/editDailyNorm',
  async (dailyWaterGoal, thunkAPI) => {
    try {
      const date = new Date().toISOString().split('T')[0];

      const { data } = await axios.patch(
        'waterrate',
        {
          dailyWaterGoal: dailyWaterGoal,
        },
        {
          params: {
            date,
          },
        }
      );

      toastSuccess('Edit successful');
      return data;
    } catch (error) {
      toastError(error.response.data.message);
      return thunkAPI.rejectWithValue(error);
    }
  }
);
