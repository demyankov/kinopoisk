import axios, { AxiosResponse } from "axios";
import { UserType } from "../types/userType";
import { authAxiosInstance } from "./authAxiosInstance";

const apiPath = `${process.env.REACT_APP_API_AUTH}/auth/users/`;

export async function ActivateUser(
  userId: UserType["id"]
): Promise<AxiosResponse> {
  return await authAxiosInstance.delete(apiPath, userId);
}
