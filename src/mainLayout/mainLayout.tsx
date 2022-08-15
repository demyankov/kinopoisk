import { Outlet } from "react-router-dom";
import { Header } from "../components/header/header";
import { SideBar } from "../components/sideBar/sideBar";
import { SecondaryP } from "../components/styles/secondaryP";
import { sideBar } from "../generalData/sideBarList";
import { Container, Footer, Main, Wrapper } from "./mainLayoutStyles";

export function MainLayout() {
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
