import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: null,
  title: null,
  minPrice: null,
  maxPrice: null
};

export const filters = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    addFilters(state, action) {
      return {
        ...state,
        categoryId: action.payload.categoryId,
        title: action.payload.title,
        minPrice: action.payload.minPrice,
        maxPrice: action.payload.maxPrice
      };
    },
    resetFilters() {
      return initialState;
    }
  }
});

export const { addFilters, resetFilters } = filters.actions;
