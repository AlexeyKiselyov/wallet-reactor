import axios from 'axios';

// axios.defaults.baseURL = 'https://wallet.goit.ua/api';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWQiOiI4NmZmNzFmNi0wODNkLTQ5MzctYjQ5MC1jZDY0NGI1MjlmMGMiLCJpYXQiOjE2NjgxNjIwODQsImV4cCI6MTAwMDAwMDE2NjgxNjIwODR9.U6MAEiPu5NgrR5SItqKuYI-jepwgyflY0c1MANz20S8';

// axios.defaults.headers.common.Authorization = `Bearer ${token}`;

const registerData = {
  username: 'abrakadabraqwe',
  email: 'abrakadabraqwe@ukr.net',
  password: 'abrakadabraqwe@ukr.net',
};

const loginData = {
  email: 'abrakadabraqwe@ukr.net',
  password: 'abrakadabraqwe@ukr.net',
};

// Auth Controller
export const register = async () => {
  const { data } = await axios.post('/auth/sign-up', registerData);
  console.log(data);
};

export const login = async () => {
  const { data } = await axios.post('/auth/sign-in', loginData);
  console.log(data);
};

// Transactions Controller

// const transDataExpense = {
//   transactionDate: '2022-11-11',
//   type: 'EXPENSE',
//   categoryId: '27eb4b75-9a42-4991-a802-4aefe21ac3ce',
//   comment: 'Buy coffy',
//   amount: -1000,
// };
const transDataIncome = {
  transactionDate: '2022-11-11',
  type: 'INCOME',
  categoryId: '063f1132-ba5d-42b4-951d-44011ca46262',
  comment: 'Sallery',
  amount: 500,
};
  // Create new transaction
export const transactionsAdd = async () => {
  const { data } = await axios.post('/transactions', transDataIncome);
  console.log(data);
};
// Get all transactions
export const getTransactions = async () => {
  const { data } = await axios('/transactions');
  console.log(data);
};


// Transaction Categories
export const categoryTransactions = async () => {
  const { data } = await axios('/transaction-categories');
  console.log(data);
};