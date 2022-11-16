import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
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
import themeReducer from "./theme/themeSlice";

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
const authPersistedReducer = persistReducer(authPersistConfig, authReducer);

const rootPersistConfig = {
  key: "root",
  storage,
  whitelist: ['theme', 'lang'],
};

const rootReducer = combineReducers({
  auth: authPersistedReducer,
  transactions: transactionsReduser,
  transactionCategories: transactionCategoriesReduser,
  global: globalReducer,
  trSummary: trSummaryReducer,
  lang: langReducer,
  theme: themeReducer,
});

const rootPersistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const  store = configureStore({
  reducer: rootPersistedReducer,
  middleware,
});

export const persistor = persistStore(store);
