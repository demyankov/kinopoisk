import { AppRoute } from "../../enums/AppRoute";
import { Input } from "../Input/Input";
import { useUpdateEffect } from "react-use";
import {
  HeaderWrapper,
  ImageWrapper,
  OpenFilter,
  SignLink,
  SignLinkwrapper,
  UserName,
} from "./headerStyles";
import logo from "../Images/pixema.svg";
import SvgOpenFilter from "../Images/openFilter.svg";
import SvgOpenFilterDefault from "../Images/openFilterDefault.svg";
import { useOutside } from "../../utils/useOutside";
import { useLocation, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { signInUserSelector } from "../../store/auth/signIn.selector";
import { removeTokensFromLocalStorage } from "../../utils/localStorage";
import { useAppDispatch } from "../../store/rootStore";
import { exitFromAccount } from "../../store/auth/auth.slice";
import { useNavigate } from "react-router-dom";
import { BurgerButton } from "../BurgerButton/BurgerButton";
import { sideBarAction } from "../../store/sideBar/sideBar.slice";
import {
  filterConfigureSelector,
  setMainInputValue,
} from "../../store/filter/filter.selector";
import { isFilterChanged } from "../../utils/isFilterChanged/isFilterChanged";
import debounce from "lodash.debounce";
import { useCallback, useEffect } from "react";
import {
  filterActions,
  FilterConfigureType,
} from "../../store/filter/filter.slice";
import { setAppSearchParams } from "../../utils/setAppSearchParams";
import BurgerIcon from "../Images/burgerIcon.svg";

export function Header(): JSX.Element {
  const { refOpen } = useOutside();
  const url = useLocation();
  const user = useSelector(signInUserSelector);
  const filterConfigure = useSelector(filterConfigureSelector);
  const movieName = useSelector(setMainInputValue);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const formattedMovieName = movieName.trim();

  const location = useLocation();
  useEffect(() => {
    if (location.pathname.length > 1) {
      dispatch(filterActions.setMainInputValue(""));
    }
  }, [location.pathname, dispatch]);

  const debouncedMovie = useCallback(
    debounce((filter: FilterConfigureType) => {
      if (filter.movieName) {
        dispatch(filterActions.clearMovies());
        dispatch(filterActions.setIsLoading(true));
        dispatch(filterActions.setCurrentPage(1));
        setAppSearchParams(setSearchParams, filter);
        dispatch(filterActions.changeFilter(filter));
      }
    }, 1000),
    []
  );

  useUpdateEffect(() => {
    if (filterConfigure.movieName !== movieName) {
      debouncedMovie({ ...filterConfigure, movieName: formattedMovieName });
    }
  }, [formattedMovieName]);

  return (
    <HeaderWrapper>
      <ImageWrapper>
        <img
          src={logo}
          alt="Logotype Pixema"
          onClick={() => navigate(AppRoute.Main)}
        />
      </ImageWrapper>
      <Input
        value={movieName}
        id="mainInput"
        placeholder="Search"
        autoComplete="off"
        onChange={({ target: { value } }) =>
          dispatch(filterActions.setMainInputValue(value))
        }
      >
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
        <img src={BurgerIcon} alt="Burger menu" />
      </BurgerButton>
      <SignLinkwrapper>
        {user.username ? (
          <>
            <UserName>{user.username}</UserName>
            <SignLink
              onClick={() => {
                removeTokensFromLocalStorage();
                dispatch(exitFromAccount());
              }}
            >
              Logout
            </SignLink>
          </>
        ) : (
          <SignLink onClick={() => navigate(AppRoute.Auth)}>SignIn</SignLink>
        )}
      </SignLinkwrapper>
    </HeaderWrapper>
  );
}
