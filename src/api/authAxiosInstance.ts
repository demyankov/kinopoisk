import axios, { AxiosError } from "axios";
import { LocalStorage } from "../enums/localStorage";

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
    //   const { status, config } = error.response;
    //   if (status === 401) {
    //     return refreshAccessToken().then(() => authorizedAxiosInstance(config));
    //   }
    return error.response;
  }
  if (error.request) {
    return error.request;
  }
  throw error;
});
