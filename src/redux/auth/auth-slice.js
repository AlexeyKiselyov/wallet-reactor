import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { username: null, email: null, balance: null, id: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  isRefreshing: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [authOperations.register.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authOperations.register.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    [authOperations.logIn.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },
    [authOperations.logIn.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    [authOperations.logOut.pending](state) {
      state.isLoading = true;
      state.error = null;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { username: null, email: null, balance: null, id: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    [authOperations.logOut.rejected](state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isRefreshing = true;
      state.isLoading = true;
      state.error = null;
    },
    [authOperations.fetchCurrentUser.pending](state) {
      state.isLoading = true;
      state.isRefreshing = true;
      state.error = null;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshing = false;
      state.isLoading = false;
    },
    [authOperations.fetchCurrentUser.rejected](state, action) {
      state.isRefreshing = false;
      state.token = null;
      state.error = action.payload;
      state.isLoading = false;
    },
  },
  reducers: {
    changeBalance(state, action) {
      state.user.balance = state.user.balance-action.payload;
    },
  },
});

export default authSlice.reducer;
export const { changeBalance } = authSlice.actions;
