import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";
import { Header } from "../components/header/header";
import { SideBar } from "../components/sideBar/sideBar";
import { SecondaryP } from "../components/styles/secondaryP";
import { sideBar } from "../generalData/sideBarList";
import { rootStore } from "../store/rootStore";
import { Container, Footer, Main, Wrapper } from "./mainLayoutStyles";

export function MainLayout() {
  return (
    <Provider store={rootStore}>
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
    </Provider>
  );
}
