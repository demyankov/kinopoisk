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
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { signInUserSelector } from "../../store/signIn/signIn.selector";

export function Header(): JSX.Element {
  const { refOpen } = useOutside();
  const url = useLocation();
  const user = useSelector(signInUserSelector);

  return (
    <HeaderWrapper>
      <Input id="mainInput" placeholder="Search">
        {url.pathname === AppRoute.Main ? (
          <OpenFilter>
            <img ref={refOpen} src={Svg} alt="Filter" />
          </OpenFilter>
        ) : null}
      </Input>
      {user.username ? (
        <UserName>{user.username}</UserName>
      ) : (
        <SignInLink to={AppRoute.Auth}>Войти</SignInLink>
      )}
    </HeaderWrapper>
  );
}
