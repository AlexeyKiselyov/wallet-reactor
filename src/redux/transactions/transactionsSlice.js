import { createSlice } from '@reduxjs/toolkit';
import { addTransaction, fetchTransactions } from './transactionsOperations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,

  extraReducers: {
    [fetchTransactions.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },
    [fetchTransactions.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchTransactions.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },

    [addTransaction.pending]: state => {
      state.isLoading = true;
    },
    [addTransaction.fulfilled]: (state, { payload }) => {
      state.items = [...state.items, payload];
      state.isLoading = false;
      state.error = null;
    },
    [addTransaction.rejected]: (state, { payload }) => {
      state.error = payload;
      state.isLoading = false;
    },
  },
});

export default transactionsSlice.reducer;
//export const transactionsReducer = transactionsSlice.reducer;
