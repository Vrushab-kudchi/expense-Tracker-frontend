import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../feature/auth/authSlice";
import transactionSlice from "../feature/transactions/transactionSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    transaction: transactionSlice,
  },
});
