import logger from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';

import { rootReducer } from './root-reducer';

// import { NODE_ENV } from '../utils/common.util';
const NODE_ENV = "development"

const middlewares = [];

if (NODE_ENV === 'development') {
	middlewares.push(logger);
}

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,middleware: middlewares
  })
export const persistor = persistStore(store);

export default store;


