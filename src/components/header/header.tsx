import { AppRoute } from "../../enums/AppRoute";
import { Input } from "../input/input";
import {
  HeaderWrapper,
  ImageWrapper,
  OpenFilter,
  SignInLink,
  SignOutLink,
  UserName,
} from "./headerStyles";
import logo from "../images/pixema.svg";
import SvgOpenFilter from "../images/openFilter.svg";
import SvgOpenFilterDefault from "../images/openFilterDefault.svg";
import { useOutside } from "../../utils/useOutside";
import { useLocation, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { signInUserSelector } from "../../store/auth/signIn.selector";
import { removeTokensFromLocalStorage } from "../../utils/localStorage";
import { useAppDispatch } from "../../store/rootStore";
import { exitFromAccount } from "../../store/auth/auth.slice";
import { useNavigate } from "react-router-dom";
import { BurgerButton } from "../burgerButton/burgerButton";
import { sideBarAction } from "../../store/sideBar/sideBar.slice";
import { filterConfigureSelector } from "../../store/filter/filter.selector";
import { isFilterChanged } from "../../utils/isFilterChanged";

export function Header(): JSX.Element {
  const { refOpen } = useOutside();
  const url = useLocation();
  const user = useSelector(signInUserSelector);
  const filterConfigure = useSelector(filterConfigureSelector);
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
            {isFilterChanged(filterConfigure) ? (
              <img ref={refOpen} src={SvgOpenFilter} alt="Filter" />
            ) : (
              <img ref={refOpen} src={SvgOpenFilterDefault} alt="Filter" />
            )}
          </OpenFilter>
        ) : null}
      </Input>
      <BurgerButton onClick={() => dispatch(sideBarAction.toggleSideBar())}>
        ХХХ
      </BurgerButton>
      {user.username ? (
        <>
          <UserName>{user.username}</UserName>
          <SignOutLink
            onClick={() => {
              removeTokensFromLocalStorage();
              dispatch(exitFromAccount());
            }}
          >
            Выйти
          </SignOutLink>
        </>
      ) : (
        <SignInLink to={AppRoute.Auth}>Войти</SignInLink>
      )}
    </HeaderWrapper>
  );
}
