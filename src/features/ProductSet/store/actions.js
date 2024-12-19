// src/features/readykits/store/actions.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

// Асинхронное действие для получения готовых наборов
export const getReadykits = createAsyncThunk(
  "ready/getReadykits",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.getReadyk();
      console.log("Полученные данные:", data); // Проверка данных в консоли
      return data;
    } catch (error) {
      console.error("Ошибка запроса:", error);
      return rejectWithValue(error.response ? error.response.data : error.message);
    }
  }
);
