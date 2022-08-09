import React from "react";

import "./App.css";
import { MainLayout } from "./mainLayout/mainLayout";
import { Global } from "@emotion/react";
import { getRebootCSS } from "./components/styles/reboot";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppRoute } from "./enums/AppRoute";
import { MoviesPage } from "./pages/moviesPage/moviesPage";
import { SettingsPage } from "./pages/settingsPage/settingsPage";

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
