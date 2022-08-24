import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/header/header";
import { SideBar } from "../components/sideBar/sideBar";
import { SecondaryP } from "../components/styles/secondaryP";
import { sideBar } from "../generalData/sideBarList";
import { useAppDispatch } from "../store/rootStore";
import { signInAction } from "../store/signIn/signIn.actions";
import { Container, Footer, Main, Wrapper } from "./mainLayoutStyles";

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
        <Footer>
          <SecondaryP>© All Rights Reserved</SecondaryP>
        </Footer>
      </Container>
    </Wrapper>
  );
}
