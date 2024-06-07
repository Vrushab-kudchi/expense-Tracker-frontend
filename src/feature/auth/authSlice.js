import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authService from "./authService";
import { toast } from "sonner";

let initialState = {
  isLoggedIn: false,
  isSuccess: false,
  isLoading: false,
  isError: false,
  message: "",
  user: null,
  token: localStorage.getItem("token") || null,
};

export const userLogin = createAsyncThunk(
  "user/login",
  async (data, thunkAPI) => {
    try {
      const response = await authService.userLogin(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const userRegistration = createAsyncThunk(
  "user/register",
  async (data, thunkAPI) => {
    try {
      const response = await authService.userRegistration(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const getUserProfile = createAsyncThunk(
  "user/profile",
  async (thunkAPI) => {
    try {
      const response = await authService.getUserProfile();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const logout = createAsyncThunk("user/logout", async (thunkAPI) => {
  try {
    const response = await authService.logout();
    localStorage.removeItem("token");
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

const authSlice = createSlice({
  name: "login",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.isSuccess = true;
      state.isLoading = false;
      state.message = action.payload.message;
      toast.success(action.payload.message);
      state.token = localStorage.getItem("token");
    }),
      builder.addCase(userLogin.pending, (state) => {
        state.isLoading = true;
        state.isLoggedIn = false;
        state.isSuccess = false;
      });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
      toast.error(!action.payload ? "Server Error " : action.payload);
    });
    builder.addCase(userRegistration.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.isSuccess = true;
      state.isLoading = false;
      state.message = action.payload.message;
      state.token = localStorage.getItem("token");
      toast.success(action.payload.message);
    }),
      builder.addCase(userRegistration.pending, (state) => {
        state.isLoading = true;
        state.isLoggedIn = false;
        state.isSuccess = false;
      });
    builder.addCase(userRegistration.rejected, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
      toast.error(!action.payload ? "Server Error " : action.payload);
    });
    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.isSuccess = true;
      state.isLoading = false;
      state.user = action.payload.user;
    }),
      builder.addCase(getUserProfile.pending, (state) => {
        state.isLoading = true;
        state.isLoggedIn = false;
        state.isSuccess = false;
      });
    builder.addCase(getUserProfile.rejected, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
    });
    builder.addCase(logout.fulfilled, (state) => {
      state.isLoggedIn = false;
      state.isSuccess = false;
      state.isLoading = false;
      state.isError = false;
      state.message = "";
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    });
  },
});

export default authSlice.reducer;
