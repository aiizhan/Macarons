import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../features/api/api";

export const createProduct = createAsyncThunk(
    'product/createProduct',
    async (productData, { rejectWithValue }) => {
        try {
            const response = await api.createProduct(productData);
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
