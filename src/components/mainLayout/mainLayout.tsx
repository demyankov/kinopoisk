import { MoviesPage } from "../../pages/movies/moviesPage";
import { Header } from "../header/header";
import { SideBar } from "../sideBar/sideBar";
import { Container, Main, Wrapper } from "./mainLayoutStyles";

export function MainLayout(): JSX.Element {
  return (
    <Wrapper>
      <Container>
        <SideBar></SideBar>
        <Header></Header>
        <Main>
          <MoviesPage />
        </Main>
      </Container>
    </Wrapper>
  );
}
