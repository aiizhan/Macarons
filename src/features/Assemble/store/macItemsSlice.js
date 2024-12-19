import { createSlice } from "@reduxjs/toolkit";
import { getMacItems } from "./actions";

export const Status = {
  LOADING: "loading",
  ERROR: "error",
  SUCCESS: "success",
};

const initialState = {
  macItems: [],
  status: Status.LOADING,
  error: null,
};

const macItemsSlice = createSlice({
  name: "macItems",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMacItems.pending, (state) => {
        state.status = Status.LOADING;
      })
      .addCase(getMacItems.fulfilled, (state, { payload }) => {
        state.macItems = payload || [];
        state.status = Status.SUCCESS;
      })
      .addCase(getMacItems.rejected, (state, { payload }) => {
        state.status = Status.ERROR;
        state.error = payload || "An error occurred while fetching mac items.";
      });
  },
});

export default macItemsSlice.reducer;
