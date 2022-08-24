import axios from "axios";
import { LocalStorage } from "../enums/localStorage";

const apiToken = `${process.env.REACT_APP_API_AUTH}/auth/jwt/create/`;

interface QuerryParamsType {
  email: string;
  password: string;
}

interface TokensType {
  access: string;
  refresh: string;
}

export async function getTokens(
  querryParams: QuerryParamsType
): Promise<TokensType> {
  const tokens: TokensType = await axios
    .post(apiToken, querryParams)
    .then((response) => response.data);

  localStorage.setItem(LocalStorage.AccessToken, tokens.access);
  localStorage.setItem(LocalStorage.RefreshToken, tokens.refresh);

  return tokens;
}
