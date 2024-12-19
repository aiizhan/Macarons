import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../../features/api/api';

export const createNews = createAsyncThunk(
    'news/createNews',
    async (productData, { rejectWithValue }) => {
        try {
            const response = await api.createNewsForm(productData);
            console.log(response.data);

            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createNews.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createNews.fulfilled, (state, action) => {
                state.loading = false;
                state.products.push(action.payload);
            })
            .addCase(createNews.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export const selectNews = (state) => state.products.products;
export const selectLoading = (state) => state.products.loading;
export const selectError = (state) => state.products.error;

export default newsSlice.reducer;
