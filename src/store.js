

import { configureStore } from '@reduxjs/toolkit';
import productSlice from './redux/productSlice';

const store = configureStore({
  reducer: {
    products: productSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['productSlice/addProduct'],
        ignoredPaths: ['products.data.image'],
      },
    }),
});

export default store;