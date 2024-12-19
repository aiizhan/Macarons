import { createSlice } from "@reduxjs/toolkit";
import { createNews } from "./action.js"; // Импортируем твой action

export const Status = {
    LOADING: "loading",
    ERROR: "error",
    SUCCESS: "success",
};

const newsSlice = createSlice({
    name: "news",
    initialState: {
        newsSet: [],
        status: Status.LOADING,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(createNews.pending, (state) => {
                state.status = Status.LOADING;
            })
            .addCase(createNews.fulfilled, (state, { payload }) => {
                state.newsSet = (payload)
                state.status = Status.SUCCESS;
            })
            .addCase(createNews.rejected, (state, { payload }) => {
                state.status = Status.ERROR;
                state.error = payload;
            });
    },
});

export default newsSlice.reducer;
