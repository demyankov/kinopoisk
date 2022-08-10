import { AppRoute } from "../../enums/AppRoute";
import { Input } from "../input/input";
import { HeaderWrapper, SignInLink, UserName } from "./headerStyles";

export function Header(): JSX.Element {
  const isSignIn = false;
  return (
    <HeaderWrapper>
      <Input id="mainInput" placeholder="Search" />
      {isSignIn ? (
        <UserName>Demyankov</UserName>
      ) : (
        <SignInLink to={AppRoute.Auth}>Войти</SignInLink>
      )}
    </HeaderWrapper>
  );
}
