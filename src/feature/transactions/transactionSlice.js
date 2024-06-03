import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import transactionService from "./transactionService";
import { toast } from "sonner";

let initialState = {
  isSuccess: false,
  isLoading: false,
  isError: false,
  message: "",
  transactions: null,
  monthsTransaction: null,
  info: null,
};

export const getAllTransaction = createAsyncThunk(
  "transaction/get",
  async (thunkAPI) => {
    try {
      const response = await transactionService.getAllTransaction();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const addTransaction = createAsyncThunk(
  "transaction/add",
  async (data, thunkAPI) => {
    try {
      const response = await transactionService.addTransaction(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const removeTransaction = createAsyncThunk(
  "transaction/remove",
  async (data, thunkAPI) => {
    try {
      const response = await transactionService.removeTransaction(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const monthsTransaction = createAsyncThunk(
  "transaction/months",
  async (thunkAPI) => {
    try {
      const response = await transactionService.monthTransaction();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

export const transactionInfo = createAsyncThunk(
  "transaction/info",
  async (thunkAPI) => {
    try {
      const response = await transactionService.transactionInfo();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTransaction.fulfilled, (state, action) => {
      state.isSuccess = true;
      state.isLoading = false;
      state.message = action.payload.message;
      state.transactions = action.payload;
    }),
      builder.addCase(getAllTransaction.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      });
    builder.addCase(getAllTransaction.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
    });
    builder.addCase(addTransaction.fulfilled, (state, action) => {
      state.isSuccess = true;
      state.isLoading = false;
      toast.success(action.payload.message);
      state.message = action.payload.message;
    }),
      builder.addCase(addTransaction.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      });
    builder.addCase(addTransaction.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      toast.error(action.payload);
      state.message = action.payload;
    });
    builder.addCase(removeTransaction.fulfilled, (state, action) => {
      state.isSuccess = true;
      state.isLoading = false;
      toast.success(action.payload.message);
      state.message = action.payload.message;
    }),
      builder.addCase(removeTransaction.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      });
    builder.addCase(removeTransaction.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      toast.error(action.payload);
      state.message = action.payload;
    });
    builder.addCase(monthsTransaction.fulfilled, (state, action) => {
      state.isSuccess = true;
      state.isLoading = false;
      state.message = action.payload.message;
      state.monthsTransaction = action.payload;
    }),
      builder.addCase(monthsTransaction.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      });
    builder.addCase(monthsTransaction.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
    });
    builder.addCase(transactionInfo.fulfilled, (state, action) => {
      state.isSuccess = true;
      state.isLoading = false;
      state.message = action.payload.message;
      state.info = action.payload;
    }),
      builder.addCase(transactionInfo.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
      });
    builder.addCase(transactionInfo.rejected, (state, action) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = true;
      state.message = action.payload;
    });
  },
});

export default transactionSlice.reducer;
