import { createSlice } from "@reduxjs/toolkit";
import { assemblesetsProducts, fetchAssemblesetById } from "./actions";

const initialState = {
  assembles: [],
  selectedItem: null,
  status: "idle",
  error: null,
};

const assembleSetsSlice = createSlice({
  name: "assembleSets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Handle assemble sets
    builder
      .addCase(assemblesetsProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(assemblesetsProducts.fulfilled, (state, { payload }) => {
        state.assembles = payload; // Ensure this matches the API response structure
        state.status = "success";
      })
      .addCase(assemblesetsProducts.rejected, (state, { payload }) => {
        state.status = "error";
        state.error = payload;
      });

    // Handle fetchAssemblesetById
    builder
      .addCase(fetchAssemblesetById.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAssemblesetById.fulfilled, (state, { payload }) => {
        state.selectedItem = payload; // Save selected item
        state.status = "success";
      })
      .addCase(fetchAssemblesetById.rejected, (state, { payload }) => {
        state.status = "error";
        state.error = payload;
      });
  },
});

export default assembleSetsSlice.reducer;
