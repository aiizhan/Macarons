import { createAsyncThunk } from '@reduxjs/toolkit';
import {api} from './../../api/api.js';
import axios from "axios";

export const createOrder = createAsyncThunk(
    'orders/createOrder',
    async (orderData, { rejectWithValue }) => {
        try {
            const response = await api.createOrder(orderData);
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
