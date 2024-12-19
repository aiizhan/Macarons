import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../features/api/api";

export const createNews = createAsyncThunk(
    'news/createNews',
    async (newsData, { rejectWithValue }) => {
        try {
            const response = await api.createNewsForm(newsData);
            console.log('Response:', response);
            if (response.status !== 201) {
                throw new Error('Не удалось создать продукт');
            }
            return response.data;
        } catch (error) {
            console.error('Error:', error);
            return rejectWithValue(error.response ? error.response.data : 'Ошибка сети');
        }
    }
);