import { createAsyncThunk } from "@reduxjs/toolkit";
import { signInRequest } from "../../api/signIn";

export const signInAction = createAsyncThunk<
  Awaited<ReturnType<typeof signInRequest>>
>("signIn/signInAction", (_, { rejectWithValue }: any) => {
  try {
    return signInRequest();
  } catch (erorr) {
    return rejectWithValue;
  }
});
