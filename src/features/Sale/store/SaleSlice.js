import { createSlice } from "@reduxjs/toolkit";
import { getProduct } from "./actions";

export const Status = {
  LOADING: "loading",
  ERROR: "error",
  SUCCESS: "success",
};

const saleSlice = createSlice({
    name: "sales",
    initialState: {
        sale: [],  // Changed from giftSet to items
  status: Status.LOADING,
  error: null,
    },
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(getProduct.fulfilled, (state, { payload }) => {
        state.sale = payload;  // Ensure this matches with API response structure
        state.status = Status.SUCCESS;
      })
      .addCase(getProduct.rejected, (state, { payload }) => {
        state.status = Status.ERROR;
        state.error = payload;
      })
      
      
  },
});

export default saleSlice.reducer;
