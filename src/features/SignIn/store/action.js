import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api/api";

export const signup = createAsyncThunk(
  "auth/signup",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.createUser(userData);
      console.log(response.data);
      
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
      return { email: userData.email, response: response.data };
    } catch (error) {
      const errorMessage = error.response?.data || error.message;
      console.error("Ошибка регистрации:", JSON.stringify(errorMessage));
      console.log(error,'errorr');
      
      return rejectWithValue(errorMessage || "Ошибка регистрации");
    }
  }
);
export const login = createAsyncThunk(
  "auth/login",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await api.loginUser(userData);
      console.log("Ответ сервера при входе:", response.data);
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data || error.message;
      console.error("Ошибка входа:", JSON.stringify(errorMessage));
      return rejectWithValue(errorMessage || "Ошибка входа");
    }
  }
);
export const requestPasswordReset = createAsyncThunk(
  "auth/requestPasswordReset",
  async (email, { rejectWithValue }) => {
    try {
      const response = await api.resetPassword(email);
      console.log("Ответ сервера для сброса пароля:", response.data);
      return response.data;
    } catch (error) {
      console.error(
        "Ошибка сброса пароля:",
        error.response?.data || error.message
      );
      return rejectWithValue(error.response?.data || "Ошибка сброса пароля");
    }
  }
);
export const resetPasswordVerify = createAsyncThunk(
  "user/resetPasswordVerify",
  async ({ reset_code }, { rejectWithValue }) => { 
    try {
      const response = await api.resetPasswordVerify({ reset_code }); 
      return { email: reset_code.email, response: response.data };
    } catch (error) {
      const errorMessage = error.response?.data || error.message || "Ошибка проверки сброса пароля";
      console.error("Ошибка проверки сброса пароля:", errorMessage);
      return rejectWithValue(errorMessage);
    }
  }
);
export const resetPasswordVerifyCode = createAsyncThunk(
  "user/resetPassword",
  async (email, { rejectWithValue }) => {
    try {
      const response = await api.resetPasswordVerifyCode(email);
      console.log(email, "userData.email");
      return response.data;
    } catch (error) {
      console.error("Ошибка при повторной отправке кода:", error);
      return rejectWithValue(
        error.response?.data || "Ошибка при повторной отправке кода"
      );
    }
  }
);
export const resendActivationCode = createAsyncThunk(
  "user/resendActivationCode",
  async (email, { rejectWithValue }) => {
    try {
      const response = await api.resendActivationCode(email);
      console.log(email, "userData.email");
      return response.data;
    } catch (error) {
      console.error("Ошибка при повторной отправке кода:", error);
      return rejectWithValue(
        error.response?.data || "Ошибка при повторной отправке кода"
      );
    }
  }
);

export const setNewPassword = createAsyncThunk(
  "auth/setNewPassword",
  async ({ reset_code, password, confirm_password }, { rejectWithValue }) => {
    try {
      const response = await api.setNewPassword({ reset_code, password, confirm_password });
      console.log("Ответ сервера при установке нового пароля:", response.data);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data || error.message;
      console.error("Ошибка при установке нового пароля:", errorMessage);
      return rejectWithValue(errorMessage || "Ошибка при установке нового пароля");
    }
  }
);