import { createSlice, SerializedError } from "@reduxjs/toolkit";
import { LocalStorage } from "../../enums/localStorage";
import { UserType } from "../../types/userType";
import { signInAction } from "./signIn.actions";

export const signInSlice = createSlice({
  name: "signIn",
  initialState: {
    user: {} as UserType,
    loadingState: "idle" as "idle" | "pending" | "fulfilled" | "rejected",
    error: null as SerializedError | null,
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(signInAction.pending, (state, action) => {
        state.loadingState = action.meta.requestStatus;
        state.user = {} as UserType;
        state.error = null;
      })
      .addCase(signInAction.fulfilled, (state, action) => {
        state.loadingState = action.meta.requestStatus;
        state.user = action.payload;
      })
      .addCase(signInAction.rejected, (state, action) => {
        state.loadingState = action.meta.requestStatus;
        state.error = action.error;
      });
  },
});

export const { reducer: signInReducer } = signInSlice;
