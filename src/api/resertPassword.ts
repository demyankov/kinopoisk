import axios from "axios";
import { UserType } from "../types/userType";

const apiPath = `${process.env.REACT_APP_API_AUTH}/auth/users/reset_password/`;

export async function resertPassword(
  email: UserType["email"]
): Promise<UserType["email"]> {
  const { data } = await axios({
    url: apiPath,
    method: "post",
    data: { email: email },
  });
  return data;
}
