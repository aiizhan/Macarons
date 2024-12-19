// import { createSlice } from "@reduxjs/toolkit";
// import { giftsetBlock } from "./actions"; // Ensure this is the correct path

// export const Status = {
//   LOADING: "loading",
//   ERROR: "error",
//   SUCCESS: "success",
// };

// const initialState = {
//   items: [],  
//   status: Status.LOADING,
//   error: null,
// };

// const giftSlice = createSlice({
//   name: "gift",
//   initialState,

//   extraReducers: (builder) => {
//     builder
//       .addCase(giftsetBlock.pending, (state) => {
//         state.status = Status.LOADING;
//       })
//       .addCase(giftsetBlock.fulfilled, (state, { payload }) => {
//         state.items = payload;  
//         state.status = Status.SUCCESS;
//       })
//       .addCase(giftsetBlock.rejected, (state, { payload }) => {
//         state.status = Status.ERROR;
//         state.error = payload;
//       });
//   },
// });

// export default giftSlice.reducer;
