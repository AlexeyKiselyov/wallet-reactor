import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import transactionsReduser from './transactions/transactionsSlice';
import transactionCategoriesReduser from './transactionCategories/transactionCategoriesSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from './auth';
import { globalReducer } from './global/global-slice';
import { trSummaryReducer } from './transactionSumController/transactionSumControllerSlice';
import langReducer from "./lang/langSlice";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    transactions: transactionsReduser,
    transactionCategories: transactionCategoriesReduser,
    global: globalReducer,
    trSummary: trSummaryReducer,
    lang: langReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
