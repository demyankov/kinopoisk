import { Outlet } from "react-router-dom";
import { Header } from "../components/header/header";
import { sideBar } from "../components/images/iconComponents";
import { SideBar } from "../components/sideBar/sideBar";
import { Container, Wrapper } from "./mainLayoutStyles";

export function MainLayout() {
  return (
    <Wrapper>
      <Container>
        <SideBar links={sideBar}></SideBar>
        <Header></Header>
        <main>
          <Outlet />
        </main>
      </Container>
    </Wrapper>
  );
}
