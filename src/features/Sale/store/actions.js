import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

export const getProduct = createAsyncThunk(
  "sales/getProduct",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.getSales();
      return data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);