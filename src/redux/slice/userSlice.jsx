import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('eshop'))
  ? JSON.parse(localStorage.getItem('eshop'))
  : false;

export const userDetailSlice = createSlice({
  name: 'userDetail',
  initialState: initialState,
  reducers: {
    addUserDetail(state, action) {
      localStorage.setItem('eshop', JSON.stringify({ ...action.payload }));
      return {
        ...state,
        ...action.payload
      };
    },
    logout() {
      localStorage.removeItem('eshop');
      return false;
    },
    addToCart(state, action) {
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    },
    removeFromCart(state, action) {
      return {
        ...state,
        cart: state.cart.filter((product) => product.id !== action.payload.id)
      };
    },
    addToWishlist(state, action) {
      return {
        ...state,
        wishlist: [...state.whishlist, action.payload]
      };
    },
    removeFromWishlist(state, action) {
      return {
        ...state,
        wishlist: state.wishlist.filter((product) => product.id !== action.payload.id)
      };
    }
  }
});

export const {
  addUserDetail,
  logout,
  addToCart,
  addToWishlist,
  removeFromWishlist,
  removeFromCart
} = userDetailSlice.actions;

export const getCart = (state) => state.userDetail.cart;
export const getWishlist = (state) => state.userDetail.wishlist;
