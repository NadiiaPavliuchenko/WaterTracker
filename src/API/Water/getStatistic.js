import axios from 'axios';

export const getCurrentDateInfoAPI = async (date) => {
  const { data } = await axios.post('/water', date);
  return data;
};

export const getCurrentMonthAPI = async (date) => {
  const { data } = await axios.post('water/month', date);
  return data;
};

export const getMonthInfoAPI = async (month) => {
  const { data } = await axios.post('/water/month', month);
  return data;
};

export const getMonthDateInfoAPI = async (date) => {
  const { data } = await axios.post('water/month', date);
  return data;
};
