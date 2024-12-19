import { createSlice } from "@reduxjs/toolkit";
import {  fetchGiftsetById, giftsetsProduct } from "./actions";

export const Status = {
  LOADING: "loading",
  ERROR: "error",
  SUCCESS: "success",
};

const initialState = {
  items: [],  // Changed from giftSet to items
  status: Status.LOADING,
  error: null,
};

const giftSlice = createSlice({
  name: "gift",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(giftsetsProduct.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(giftsetsProduct.fulfilled, (state, { payload }) => {
        console.log("Fulfilled Payload:", payload);  // Debugging payload
        state.items = payload;  // Ensure this matches with API response structure
        state.status = Status.SUCCESS;
      })
      .addCase(giftsetsProduct.rejected, (state, { payload }) => {
        console.error("Rejected Payload:");  // Debugging error
        state.status = Status.ERROR;
        state.error = payload;
      })
      .addCase(fetchGiftsetById.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(fetchGiftsetById.fulfilled, (state, { payload }) => {
        state.selectedItem = payload;  // Make sure to handle this in your state
        state.status = Status.SUCCESS;
      })
      .addCase(fetchGiftsetById.rejected, (state, { payload }) => {
        state.status = Status.ERROR;
        state.error = payload;
      });
      
  },

  
  
});

export default giftSlice.reducer;
