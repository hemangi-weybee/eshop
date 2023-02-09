import { createSlice } from '@reduxjs/toolkit';

export const filterInitState = {
  categoryId: null,
  title: null,
  minPrice: 0,
  maxPrice: 100000
};

export const filters = createSlice({
  name: 'filters',
  initialState: filterInitState,
  reducers: {
    addFilters(state, action) {
      return {
        ...state,
        categoryId: Number(action.payload.categoryId),
        title: action.payload.title,
        minPrice: Number(action.payload.minPrice),
        maxPrice: Number(action.payload.maxPrice)
      };
    },
    resetFilters() {
      return { ...filterInitState };
    }
  }
});

export const { addFilters, resetFilters } = filters.actions;
