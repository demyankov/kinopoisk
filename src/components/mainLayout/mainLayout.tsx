import { Outlet } from "react-router-dom";
import { Header } from "../header/header";
import { sideBar } from "../images/iconComponents";
import { SideBar } from "../sideBar/sideBar";
import { Container, Main, Wrapper } from "./mainLayoutStyles";

export function MainLayout() {
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
