import { useEffect } from "react";
import { Outlet, useLocation, useParams } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { SideBar } from "../components/SideBar/sideBar";
import { sideBar } from "../generalData/sideBarList";
import { useAppDispatch } from "../store/rootStore";
import { signInAction } from "../store/auth/signIn.actions";
import { Container, Main, Wrapper } from "./mainLayoutStyles";
import { filterActions } from "../store/filter/filter.slice";

export function MainLayout() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(signInAction());
  }, []);

  return (
    <Wrapper>
      <Container>
        <SideBar links={sideBar}></SideBar>
        <Header></Header>
        <Main>
          <Outlet />
        </Main>
      </Container>
    </Wrapper>
  );
}
