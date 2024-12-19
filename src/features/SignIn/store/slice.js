import { createSlice } from "@reduxjs/toolkit";
import {
  signup,
  login,
  requestPasswordReset,
  resetPasswordVerify,
  resendActivationCode,
} from "./action";
const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    email: localStorage.getItem("email") || null,
    status: "idle",
    error: null,
    isActivated: false,
    activationCodeResent: false,
  },
  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
      localStorage.setItem("email", action.payload);
    },
    resetError: (state) => {
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.email = null;
      localStorage.removeItem("email");
    },
    resetActivationCodeStatus: (state) => {
      state.activationCodeResent = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(signup.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.response;
        state.email = action.payload.email; 
        localStorage.setItem("email", action.payload.email); 
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.error = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(requestPasswordReset.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(requestPasswordReset.fulfilled, (state) => {
        state.status = "succeeded";
        state.passwordResetRequested = true;
        state.error = null;
      })
      .addCase(requestPasswordReset.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(resetPasswordVerify.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(resetPasswordVerify.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(resetPasswordVerify.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(resendActivationCode.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(resendActivationCode.fulfilled, (state) => {
        state.status = "succeeded";
        state.activationCodeResent = true;
        state.error = null;
      })
      .addCase(resendActivationCode.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});
export const { esetEmail, resetError, logout } = authSlice.actions;
export default authSlice.reducer;