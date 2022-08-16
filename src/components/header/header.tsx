import { AppRoute } from "../../enums/AppRoute";
import { Input } from "../input/input";
import {
  HeaderWrapper,
  OpenFilter,
  SignInLink,
  UserName,
} from "./headerStyles";
import Svg from "../images/openFilter.svg";
import { filterSelector } from "../../store/isOpenedfFlter/filter.selector";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../store/rootStore";
import { filterActions } from "../../store/isOpenedfFlter/filter.slice";

export function Header(): JSX.Element {
  const isOpen = useSelector(filterSelector);
  const dispatch = useAppDispatch();

  const isSignIn = false;
  return (
    <HeaderWrapper>
      <Input id="mainInput" placeholder="Search">
        <OpenFilter
          src={Svg}
          onClick={() => {
            dispatch(filterActions.toggleOpen());
            console.log(isOpen);
          }}
        />
      </Input>
      {isSignIn ? (
        <UserName>Demyankov</UserName>
      ) : (
        <SignInLink to={AppRoute.Auth}>Войти</SignInLink>
      )}
    </HeaderWrapper>
  );
}
