import { Header } from "../header/header";
import { SideBar } from "../sideBar/sideBar";
import { Main, Wrapper } from "./mainLayoutStyles";

export function MainLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <Wrapper>
      <SideBar></SideBar>
      <Header></Header>
      <Main>{children}</Main>
    </Wrapper>
  );
}
