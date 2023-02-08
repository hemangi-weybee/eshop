import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';
import { categoryApi } from './api/categoryApi';
import { productDetailApi } from './api/productDetailApi';
import { productsApi } from './api/productApi';
import { filters } from './slice/filterSlice';

const reducer = {
  [productsApi.reducerPath]: productsApi.reducer,
  [categoryApi.reducerPath]: categoryApi.reducer,
  [productDetailApi.reducerPath]: productDetailApi.reducer,
  [filters.name]: filters.reducer
};

const customMiddleware = [
  productsApi.middleware,
  categoryApi.middleware,
  productDetailApi.middleware
];

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...customMiddleware)
});
