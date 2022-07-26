import axios, { AxiosResponse } from "axios";
import { UserType } from "../types/userType";
import { authAxiosInstance } from "./authAxiosInstance";

const apiPath = `${process.env.REACT_APP_API_AUTH}/auth/users/me/`;

export async function deleteUser(
  userId: UserType["id"]
): Promise<AxiosResponse> {
  return await authAxiosInstance({
    method: "delete",
    url: apiPath,
    data: { current_password: "demyan350" },
  });
}
