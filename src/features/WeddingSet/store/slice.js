import { createSlice } from "@reduxjs/toolkit";
import { WeddingSetGet } from "./actions";

export const Status = {
  LOADING: "loading",
  ERROR: "error",
  SUCCESS: "success",
};

const initialState = {
  WeddingSet: [],
  status: Status.LOADING,
  error: null,
};

const WeddingSetSlice = createSlice({
  name: "WeddingItem",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(WeddingSetGet.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(WeddingSetGet.fulfilled, (state, { payload }) => {
        state.WeddingSet = payload;
        state.status = Status.SUCCESS;
      })
      .addCase(WeddingSetGet.rejected, (state, { payload }) => {
        state.status = Status.ERROR;
        state.error = payload;
      });
  },
});

export default WeddingSetSlice.reducer;
