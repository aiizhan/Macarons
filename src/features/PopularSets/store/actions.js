import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";


export const giftsetsProduct = createAsyncThunk(
  "gift/giftsetsProduct",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.getSets();
      return data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

export const fetchGiftsetById = createAsyncThunk(
  "gift/fetchGiftsetById",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.getSetById(id);  
      return data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

