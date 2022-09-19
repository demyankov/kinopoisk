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
import { ResertPassword } from "./pages/authPages/resetPassword/resertPassword";
import { NewPassword } from "./pages/authPages/newPassword/newPassword";
import { SelectedMoviePage } from "./pages/selectedMoviePage/selectedMoviePage";
import NotFound from "./pages/notFound/notFound";
import { FavouriteMoviesPage } from "./pages/favouriteMoviesPage/favouriteMovies";
import { ActivationAccount } from "./pages/authPages/activation/activationPage";
import { EmptyContentPage } from "./components/emptyContentPage/emptyContentPage";
import { ProtectedPage } from "./utils/protectedPage";
import { useSelector } from "react-redux";
import {
  signInLoadingSelector,
  signInUserSelector,
} from "./store/auth/signIn.selector";
import { themeSelector } from "./store/theme/theme.selector";

function App(): JSX.Element {
  const user = useSelector(signInUserSelector);
  const themeVariant = useSelector(themeSelector);
  const userLoadingState = useSelector(signInLoadingSelector);

  return (
    <div className="App">
      <Global styles={getRebootCSS(themeVariant)} />
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<MainLayout />}>
            <Route index element={<MoviesPage />} />
            <Route
              path={`${AppRoute.Movie}/:movieId`}
              element={<SelectedMoviePage />}
            />
            <Route path={AppRoute.Trends} element={<EmptyContentPage />} />

            <Route
              path={AppRoute.Favourites}
              element={
                userLoadingState === "fulfilled" ||
                userLoadingState === "rejected" ? (
                  <ProtectedPage user={user}>
                    <FavouriteMoviesPage />
                  </ProtectedPage>
                ) : null
              }
            />

            <Route
              path={AppRoute.Settings}
              element={
                userLoadingState === "fulfilled" ||
                userLoadingState === "rejected" ? (
                  <ProtectedPage user={user}>
                    <SettingsPage />
                  </ProtectedPage>
                ) : null
              }
            />
          </Route>
          <Route path={AppRoute.Auth} element={<Auth />}>
            <Route index element={<SignInForm />} />
            <Route path={AppRoute.SignUp} element={<SignUpForm />} />
            <Route
              path={`${AppRoute.ActivateAccount}/:uid/:token`}
              element={<ActivationAccount />}
            />
            <Route path={AppRoute.SignIn} element={<SignInForm />} />
            <Route
              path={AppRoute.ResertPassword}
              element={<ResertPassword />}
            />
            <Route
              path={`${AppRoute.NewPassword}/:uid/:token`}
              element={<NewPassword />}
            />
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
