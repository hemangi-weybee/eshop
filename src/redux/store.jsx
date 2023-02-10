import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import { categoryApi } from './api/categoryApi';
import { productDetailApi } from './api/productDetailApi';
import { productsApi } from './api/productApi';
import { filterSlice } from './slice/filterSlice';
import { authenticateApi } from './api/authenticateApi';
import { userDetailSlice } from './slice/userSlice';

const reducer = {
  [productsApi.reducerPath]: productsApi.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
  [productDetailApi.reducerPath]: productDetailApi.reducer,
  [authenticateApi.reducerPath]: authenticateApi.reducer,
  [filterSlice.name]: filterSlice.reducer,
  [userDetailSlice.name]: userDetailSlice.reducer
};

const customMiddleware = [
  productsApi.middleware,
  categoryApi.middleware,
  productDetailApi.middleware,
  authenticateApi.middleware
];

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...customMiddleware)
});
