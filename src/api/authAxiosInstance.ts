import axios, { AxiosError } from "axios";
import { LocalStorage } from "../enums/localStorage";
import { refreshToken } from "./refreshToken";
let refreshQuerryCount = 0;
export const authAxiosInstance = axios.create();

authAxiosInstance.interceptors.request.use((requestConfigArgs) => {
  const requestConfig = requestConfigArgs;
  const accessToken = localStorage.getItem(LocalStorage.AccessToken);
  requestConfig.headers = requestConfig.headers || {};

  if (accessToken) {
    requestConfig.headers.Authorization = `Bearer ${accessToken}`;
  }
  return requestConfig;
});

authAxiosInstance.interceptors.response.use(undefined, (error: AxiosError) => {
  if (error.response) {
    const { status, config } = error.response;
    if (status === 401 && refreshQuerryCount < 3) {
      refreshToken();
      refreshQuerryCount += 1;
      return authAxiosInstance(config);
    }
    return error.response;
  }
  if (error.request) {
    return error.request;
  }
  throw error;
});
