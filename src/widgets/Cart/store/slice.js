import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.products.find((item) => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.products.find((item) => item.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const existingProduct = state.products.find((item) => item.id === action.payload.id);
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
        } else {
          state.products = state.products.filter((item) => item.id !== action.payload.id);
        }
      }
    },
    setCart: (state, action) => {
      state.products = action.payload;
    },
    clearCart: (state) => {
      state.products = [];
    },
  },
});

// Селектор для расчета общей стоимости товаров в корзине
export const selectTotalPrice = (state) => {
  return state.cart.products.reduce((total, product) => {
    return total + product.price * product.quantity; // Учитываем цену и количество
  }, 0);
};

export const { addToCart, increaseQuantity, decreaseQuantity, setCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
