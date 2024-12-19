import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../../features/api/api.js";

export const createNews = createAsyncThunk(
    "news/createNews",
    async (_, { rejectWithValue }) => {
        try {
            // Assuming you're making a POST request to create a news item
            const { data } = await api.getNews();
            return data;
        } catch (error) {
            // Handle errors properly
            return rejectWithValue(error.response ? error.response.data : error.message);
        }
    }
);
