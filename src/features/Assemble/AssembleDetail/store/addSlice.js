import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAdditionallyItems } from "./actions";

export const Status = {
  LOADING: "loading",
  ERROR: "error",
  SUCCESS: "success",
};


const initialState = {
  additionallyItems: [],
  status: Status.LOADING,
  error: null,
};

const addSlice = createSlice({
  name: "additional",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAdditionallyItems.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(getAdditionallyItems.fulfilled, (state, { payload }) => {
        state.additionallyItems = payload || [];
        state.status = Status.SUCCESS;
      })
      .addCase(getAdditionallyItems.rejected, (state, { payload }) => {
        state.status = Status.ERROR;
        state.error = payload;
      });
  },
});

export default addSlice.reducer;
