import { RootState } from "../rootStore";

export const signInUserSelector = (
  state: RootState
): RootState["signIn"]["user"] => {
  return state.signIn.user;
};

export const signInErrorSelector = (
  state: RootState
): RootState["signIn"]["error"] => {
  return state.signIn.error;
};
