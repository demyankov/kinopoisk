import axios, { AxiosResponse } from "axios";

const apiPath = `${process.env.REACT_APP_API_AUTH}/auth/users/reset_password_confirm/`;

interface DataType {
  uid: string;
  token: string;
  new_password: string;
}

export async function resetPasswordConfirm<T extends DataType>({
  uid,
  token,
  new_password,
}: T): Promise<AxiosResponse<T>> {
  const { data } = await axios({
    url: apiPath,
    method: "post",
    data: { uid: uid, token: token, new_password: new_password },
  });

  return data;
}
