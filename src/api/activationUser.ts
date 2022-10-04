import axios, { AxiosResponse } from "axios";

const apiPath = `${process.env.REACT_APP_API_AUTH}/auth/users/activation/`;

interface ActivateUsertype {
  uid: string;
  token: string;
}

export async function ActivateUser(
  querryParams: ActivateUsertype
): Promise<AxiosResponse> {
  return await axios.post(apiPath, querryParams);
}
