import { LocalStorage } from "../enums/localStorage";
import { UserType } from "../types/userType";
import { authAxiosInstance } from "./authAxiosInstance";

const apiToken = `${process.env.REACT_APP_API_AUTH}/auth/users/me/`;

export async function signInRequest(): Promise<UserType> {
  return await authAxiosInstance.get(apiToken).then(({ data }) => data);
}
