import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

export const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    getProduct: (state, action) => {
      state.data = action.payload;
    },
    addProduct: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { getProduct, addProduct } = productSlice.actions;

export default productSlice.reducer;