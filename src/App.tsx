import React from "react";

import { MainLayout } from "./mainLayout/mainLayout";
import { Global } from "@emotion/react";
import { getRebootCSS } from "./components/styles/reboot";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AppRoute } from "./enums/AppRoute";
import { SettingsPage } from "./pages/settingsPage/settingsPage";
import { MoviesPage } from "./pages/moviesPage/moviesPage";
import { SignInForm } from "./pages/authPages/signInForm/signInForm";
import { Auth } from "./pages/authPages/authPage";
import { SignUpForm } from "./pages/authPages/signUpForm/signUpForm";
import { ResertPassword } from "./pages/authPages/resertPassword/resertPassword";
import { NewPassword } from "./pages/authPages/newPassword/newPassword";
import { SelectedMoviePage } from "./pages/selectedMoviePage/selectedMoviePage";
import EmptyPageImage from "./components/images/emptyPage.png";
import NotFound from "./pages/notFound/notFound";
import { FavouriteMoviesPage } from "./pages/favouriteMoviesPage/favouriteMovies";

function App(): JSX.Element {
  return (
    <div className="App">
      <Global styles={getRebootCSS()} />
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<MainLayout />}>
            <Route index element={<MoviesPage />} />
            <Route
              path={`${AppRoute.Movie}/:movieId`}
              element={<SelectedMoviePage></SelectedMoviePage>}
            />
            <Route
              path={AppRoute.Trends}
              element={
                <div
                  style={{
                    minHeight: "80%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={EmptyPageImage} alt="Empty Page"></img>
                </div>
              }
            />
            <Route
              path={AppRoute.Favourites}
              element={
                <FavouriteMoviesPage />
                // <div
                //   style={{
                //     minHeight: "80%",
                //     display: "flex",
                //     alignItems: "center",
                //     justifyContent: "center",
                //   }}
                // >
                //   <img src={EmptyPageImage} alt="Empty Page"></img>
                // </div>
              }
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
          <Route path={AppRoute.NotFound} element={<NotFound />} />
          <Route
            path="*"
            element={<Navigate to={AppRoute.NotFound} replace />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
