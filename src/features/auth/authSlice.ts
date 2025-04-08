import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { login, logout } from "./authApi";
import { authTypes } from "@/types";
import { LoginFormInputs } from "@/hooks/useLoginForm";
import { RegisterFormInputs } from "@/hooks/useRegisterForm";

const initialState: authTypes.AuthState = {
  user: null,
  loading: false,
  error: null,
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (payload: RegisterFormInputs, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (payload.username && payload.email && payload.password) {
        return {
          id: "123",
          username: payload.username,
          email: payload.email,
        };
      } else {
        return rejectWithValue("Registration failed due to invalid input.");
      }
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (payload: LoginFormInputs, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (
        payload.email === "test@example.com" &&
        payload.password === "password"
      ) {
        return {
          id: "123",
          username: "testuser",
          email: payload.email,
        };
      } else {
        return rejectWithValue("Login failed: Incorrect email or password.");
      }
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message ||
          error.response?.data?.message ||
          "Login failed"
      );
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await logout();
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || "Logout failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetError(state) {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
      });
  },
});

export const { resetError } = authSlice.actions;

export default authSlice.reducer;
