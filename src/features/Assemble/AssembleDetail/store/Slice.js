import { createSlice } from "@reduxjs/toolkit";
import { getChooseItems } from "./actions";

export const Status = {
  LOADING: "loading",
  ERROR: "error",
  SUCCESS: "success",
};

const initialState = {
    chooseItem: [],  
  status: Status.LOADING,
  error: null,
};

const chooseSlice = createSlice({
  name: "chooseItem",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getChooseItems.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(getChooseItems.fulfilled, (state, { payload }) => {
        state.chooseItem = payload || []; 
        state.status = Status.SUCCESS;
      })
      .addCase(getChooseItems.rejected, (state, { payload }) => {
        state.status = Status.ERROR;
        state.error = payload;
      });
  },
});

export default chooseSlice.reducer;
