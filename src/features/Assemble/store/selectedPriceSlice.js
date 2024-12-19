import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPrice: 0,
};

const selectedPriceSlice = createSlice({
  name: "selectedPrice",
  initialState,
  reducers: {
    setSelectedPrice(state, action) {
      state.selectedPrice = action.payload; // Update the selected price
    },
  },
});

export const { setSelectedPrice } = selectedPriceSlice.actions;
export default selectedPriceSlice.reducer;
