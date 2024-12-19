import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

export const WeddingSetGet = createAsyncThunk(
  "weddings/getWeddingsBlock",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.getWeddings();
      return data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);
