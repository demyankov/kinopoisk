import axios, { AxiosResponse } from "axios";
import {
  RegisterUserResponseType,
  RegisterUserType,
} from "../types/signUpTypes";

const apiPath = `${process.env.REACT_APP_API_AUTH}/auth/users/`;

export async function signUp({
  ...querryParams
}: RegisterUserType): Promise<RegisterUserResponseType> {
  const { data } = await axios.post<
    RegisterUserType,
    AxiosResponse<RegisterUserResponseType>
  >(apiPath, querryParams);

  return data;
}
