import React from "react";

import { MainLayout } from "./mainLayout/mainLayout";
import { Global } from "@emotion/react";
import { getRebootCSS } from "./components/styles/reboot";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoute } from "./enums/AppRoute";
import { SettingsPage } from "./pages/settingsPage/settingsPage";
import { MoviesPage } from "./pages/moviesPage/moviesPage";
import { SignInForm } from "./pages/authPages/signInForm/signInForm";
import { Auth } from "./pages/authPages/authPage";
import { SignUpForm } from "./pages/authPages/signUpForm/signUpForm";
import { ResertPassword } from "./pages/authPages/resertPassword/resertPassword";
import { NewPassword } from "./pages/authPages/newPassword/newPassword";

function App(): JSX.Element {
  return (
    <div className="App">
      <Global styles={getRebootCSS()} />
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<MainLayout />}>
            <Route index element={<MoviesPage />} />
            <Route
              path={AppRoute.Trends}
              element={<div style={{ color: "#fff" }}>Trends</div>}
            />
            <Route
              path={AppRoute.Favourites}
              element={<div style={{ color: "#fff" }}>Favourites</div>}
            />
            <Route
              path={AppRoute.Settings}
              element={<SettingsPage></SettingsPage>}
            />
          </Route>
          <Route path={AppRoute.Auth} element={<Auth />}>
            <Route index element={<SignInForm />} />
            <Route path={AppRoute.SignUp} element={<SignUpForm />} />
            <Route path={AppRoute.Resert} element={<ResertPassword />} />
            <Route path={AppRoute.NewPassword} element={<NewPassword />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
