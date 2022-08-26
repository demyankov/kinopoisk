import axios, { AxiosResponse } from "axios";
import { authAxiosInstance } from "./authAxiosInstance";

const apiPath = `${process.env.REACT_APP_API_AUTH}/auth/users/set_password/`;

export interface SetPasswordType {
  new_password?: string;
  current_password?: string;
}

export async function setPassword<T extends SetPasswordType>({
  new_password,
  current_password,
}: T): Promise<AxiosResponse> {
  return await authAxiosInstance({
    url: apiPath,
    method: "post",
    data: {
      new_password: new_password,
      current_password: current_password,
    },
  });
}
