import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

export const getMacItems = createAsyncThunk(
  "macSets/getMacItems",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.getMac();
      return data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

export const assemblesetsProducts = createAsyncThunk(
  "assemble/assemblesetsProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.assemblesetsProduct();
      return data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);

export const fetchAssemblesetById = createAsyncThunk(
  "assemble/fetchAssemblesetById",
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await api.getSetById(id); // Убедитесь, что эта функция соответствует правильному имени
      return data;
    } catch (error) {
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);
