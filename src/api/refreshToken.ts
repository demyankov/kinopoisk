import axios from "axios";
import { LocalStorage } from "../enums/localStorage";

const apiToken = `${process.env.REACT_APP_API_AUTH}/auth/jwt/refresh/`;

export function refreshToken(): void {
  const token = localStorage.getItem(LocalStorage.RefreshToken);

  if (token) {
    axios
      .post(apiToken, { refresh: token })
      .then(({ data }: { data: { access: string } }) => {
        localStorage.setItem(LocalStorage.AccessToken, data.access);
        console.log(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }
}
