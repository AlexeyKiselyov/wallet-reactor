import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://wallet.goit.ua/';

//----------------  это врменно, пока не работала логинизация

// const token =
//   'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiIyZjAxNjA4MC1jNzczLTRhZDAtYjBkYi02NmJiOWM3ZGM3YjEiLCJpYXQiOjE2NjgxNzYyMzgsImV4cCI6MTAwMDAwMDE2NjgxNzYyMzh9.d09_Cizenyyxs0CXazwXrluO0d8QJ1eXtIi99oJAd8U';
// axios.defaults.headers.common.Authorization = `Bearer ${token}`;

const loginData = {
  // username: 'abrakadabraqwe',
  email: 'abrakadabraqwe@ukr.net',
  password: 'abrakadabraqwe@ukr.net',
};

// временно для логинизации
export const login = async () => {
  try {
    const { data } = await axios.post('/api/auth/sign-in', loginData);
    return data;
  } catch (error) {
    return error.message;
  }
};
//-----------------------------------------------------------------

//вытягивает все транзакции - для таблицы
export const fetchTransactions = createAsyncThunk(
  'transactions/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios('/transactions');

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

//добавляет транзакцию
export const addTransaction = createAsyncThunk(
  'transaction/addTransaction',
  async (transaction, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/transactions', transaction);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
