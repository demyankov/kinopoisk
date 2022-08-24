import { createSlice, SerializedError } from "@reduxjs/toolkit";
import { LocalStorage } from "../../enums/localStorage";
import { UserType } from "../../types/userType";
import { signInAction } from "./signIn.actions";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {} as UserType,
    loadingState: "idle" as "idle" | "pending" | "fulfilled" | "rejected",
    error: null as SerializedError | null,
  },
  reducers: {
    exitFromAccount: (state) => {
      state.user = {} as UserType;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(signInAction.pending, (state, action) => {
        state.loadingState = action.meta.requestStatus;
        state.user = {} as UserType;
        state.error = null;
      })
      .addCase(signInAction.fulfilled, (state, action) => {
        state.loadingState = action.meta.requestStatus;
        console.log(action);
        if (action.payload.username) {
          state.user = action.payload;
        }
      })
      .addCase(signInAction.rejected, (state, action) => {
        state.loadingState = action.meta.requestStatus;
        state.error = action.error;
      });
  },
});

export const {
  reducer: signInReducer,
  actions: { exitFromAccount },
} = authSlice;
