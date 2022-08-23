import { Provider } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../../components/images/pixema.svg";
import { AppRoute } from "../../enums/AppRoute";
import { rootStore } from "../../store/rootStore";
import { Header, Main, Wrapper } from "./authPageStyles";

export function Auth() {
  const navigate = useNavigate();

  return (
    <Provider store={rootStore}>
      <Wrapper>
        <Header>
          <img
            src={logo}
            alt="Logotype Pixema"
            onClick={() => navigate(AppRoute.Main)}
          />
        </Header>
        <Main>
          <Outlet />
        </Main>
        <footer>
          <p>© All Rights Reserved</p>
        </footer>
      </Wrapper>
    </Provider>
  );
}
