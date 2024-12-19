// import { createAsyncThunk } from "@reduxjs/toolkit";
// import { api } from "../../api/api";

// export const giftsetBlock = createAsyncThunk(
//   "gift/giftsetBlock",
//   async (_, { rejectWithValue }) => {
//     try {
//       const { data } = await api.getSets();
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.response ? error.response.data : error.message);
//     }
//   }
// );
