import { AppRoute } from "../../enums/AppRoute";
import { Input } from "../input/input";
import {
  HeaderWrapper,
  ImageWrapper,
  OpenFilter,
  SignInLink,
  UserName,
} from "./headerStyles";
import logo from "../images/pixema.svg";
import Svg from "../images/openFilter.svg";
import { useOutside } from "../../utils/useOutside";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { signInUserSelector } from "../../store/auth/signIn.selector";
import { Button } from "../button/button";
import { removeTokensFromLocalStorage } from "../../utils/localStorage";
import { useAppDispatch } from "../../store/rootStore";
import { exitFromAccount } from "../../store/auth/auth.slice";
import { useNavigate } from "react-router-dom";

export function Header(): JSX.Element {
  const { refOpen } = useOutside();
  const url = useLocation();
  const user = useSelector(signInUserSelector);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <ImageWrapper>
        <img
          src={logo}
          alt="Logotype Pixema"
          onClick={() => navigate(AppRoute.Main)}
        />
      </ImageWrapper>
      <Input id="mainInput" placeholder="Search">
        {url.pathname === AppRoute.Main ? (
          <OpenFilter>
            <img ref={refOpen} src={Svg} alt="Filter" />
          </OpenFilter>
        ) : null}
      </Input>
      {user.username ? (
        <>
          <UserName>{user.username}</UserName>
          <Button
            onClick={() => {
              removeTokensFromLocalStorage();
              dispatch(exitFromAccount());
            }}
          >
            Выйти
          </Button>
        </>
      ) : (
        <SignInLink to={AppRoute.Auth}>Войти</SignInLink>
      )}
    </HeaderWrapper>
  );
}
