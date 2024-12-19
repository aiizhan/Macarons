import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../../features/api/api';

export const createPopularSets = createAsyncThunk(
  'products/createPopularSets',
  async (productData, { rejectWithValue }) => {
    try {
      const response = await api.createPopularSets(productData);
      console.log(response.data);
      
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const popularSetsSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createPopularSets.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPopularSets.fulfilled, (state, action) => {
        state.loading = false;
        state.products.push(action.payload);
      })
      .addCase(createPopularSets.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectPopularSets = (state) => state.products.products;
export const selectLoading = (state) => state.products.loading;
export const selectError = (state) => state.products.error;

export default popularSetsSlice.reducer;
