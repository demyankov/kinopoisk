import { LocalStorage } from "../enums/localStorage";
import { UserType } from "../types/userType";
import { authAxiosInstance } from "./authAxiosInstance";

const apiPath = `${process.env.REACT_APP_API_AUTH}/auth/users/me/`;

export async function signInRequest(): Promise<UserType> {
  const accessToken = localStorage.getItem(LocalStorage.AccessToken);
  return accessToken
    ? await authAxiosInstance.get(apiPath).then(({ data }) => data)
    : null;
}
