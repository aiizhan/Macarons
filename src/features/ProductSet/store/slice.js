// src/features/readykits/store/slice.js
import { createSlice } from "@reduxjs/toolkit";
import { getReadykits } from "./actions";

export const Status = {
  LOADING: "loading",
  ERROR: "error",
  SUCCESS: "success",
};

const initialState = {
  readykits: [],
  status: Status.LOADING,
  error: null,
};

const readykitsSlice = createSlice({
  name: "ready",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getReadykits.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(getReadykits.fulfilled, (state, { payload }) => {
        state.readykits = payload;
        state.status = Status.SUCCESS;
      })
      .addCase(getReadykits.rejected, (state, { payload }) => {
        state.status = Status.ERROR;
        state.error = payload;
      });
  },
});

export default readykitsSlice.reducer;
