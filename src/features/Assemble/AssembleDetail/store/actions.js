import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../api/api";

export const getChooseItems = createAsyncThunk(
    "chooseItem/getChooseItems",
    async (_, { rejectWithValue }) => {
      try {
        const { data } = await api.getChoose();
        return data;
      } catch (error) {
        return rejectWithValue(error.response ? error.response.data : error.message);
      }
    }
  );
  
  export const getAdditionallyItems = createAsyncThunk(
    "additional/getAdditionallyItems",
    async (_, { rejectWithValue }) => {
      try {
        const { data } = await api.fetchAssemblesetById(); // вызов к вашему API
        return data;
      } catch (error) {
        return rejectWithValue(
          error.response ? error.response.data : error.message
        );
      }
    }
  );