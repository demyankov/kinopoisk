const apiPath = `${process.env.REACT_APP_API_PATH}/auth/users/`;
import axios from "axios";

export interface RegisterUserResponseType {
  username: string;
  email: string;
  id: number;
}

export interface RegisterUserType {
  username: string;
  email: string;
  password: string;
}

export interface RegisterUserErrors {
  username?: string[];
  email?: string[];
  password?: string[];
  global?: string[];
}

export async function registerUser(
  querryParams: RegisterUserType
): Promise<RegisterUserResponseType> {
  return axios.post(apiPath, querryParams);
}
