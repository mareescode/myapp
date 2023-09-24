import { configureStore } from '@reduxjs/toolkit'
import productslice from './productslice';
import cartSlice from './cartslice';
import userslice from './userslice';

const store = configureStore({
  reducer: {
     products:productslice,
     cart:cartSlice,
     users:userslice
  }
})

export default store;