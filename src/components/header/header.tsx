import { AppRoute } from "../../enums/AppRoute";
import { Input } from "../input/input";
import {
  HeaderWrapper,
  OpenFilter,
  SignInLink,
  UserName,
} from "./headerStyles";
import Svg from "../images/openFilter.svg";
import { useOutside } from "../../utils/useOutside";

export function Header(): JSX.Element {
  const { refOpen } = useOutside();

  const isSignIn = false;
  return (
    <HeaderWrapper>
      <Input id="mainInput" placeholder="Search">
        <OpenFilter>
          <img ref={refOpen} src={Svg} alt="Filter" />
        </OpenFilter>
      </Input>
      {isSignIn ? (
        <UserName>Demyankov</UserName>
      ) : (
        <SignInLink to={AppRoute.Auth}>Войти</SignInLink>
      )}
    </HeaderWrapper>
  );
}
