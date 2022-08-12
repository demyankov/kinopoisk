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
import { SelectedMoviePage } from "./pages/selectedMoviePage/selectedMoviePage";
import EmptyPageImage from "./components/images/emptyPage.png";

function App(): JSX.Element {
  return (
    <div className="App">
      <Global styles={getRebootCSS()} />
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Main} element={<MainLayout />}>
            <Route index element={<MoviesPage />} />
            <Route
              path={`${AppRoute.Movie}/:movieID`}
              element={
                <SelectedMoviePage
                  movie={{
                    Title: "The Matrix",
                    Year: "1999",
                    Rated: "R",
                    Released: "31 Mar 1999",
                    Runtime: "136 min",
                    Genre: "Action, Sci-Fi",
                    Director: "Lana Wachowski, Lilly Wachowski",
                    Writer: "Lilly Wachowski, Lana Wachowski",
                    Actors:
                      "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss",
                    Plot: "Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo. Neo has always questioned his reality, but the truth is far beyond his imagination. Neo finds himself targeted by the police when he is contacted by Morpheus, a legendary computer hacker branded a terrorist by the government. As a rebel against the machines, Neo must confront the agents: super-powerful computer programs devoted to stopping Neo and the entire human rebellion.",
                    Language: "English",
                    Country: "United States, Australia",
                    Awards: "Won 4 Oscars. 42 wins & 51 nominations total",
                    Poster:
                      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
                    Ratings: [
                      {
                        Source: "Internet Movie Database",
                        Value: "8.7/10",
                      },
                      {
                        Source: "Rotten Tomatoes",
                        Value: "88%",
                      },
                      {
                        Source: "Metacritic",
                        Value: "73/100",
                      },
                    ],
                    Metascore: "73",
                    imdbRating: "8.7",
                    imdbVotes: "1,873,116",
                    imdbID: "tt0133093",
                    Type: "movie",
                    DVD: "15 May 2007",
                    BoxOffice: "$172,076,928",
                    Production: "N/A",
                    Website: "N/A",
                    Response: "True",
                  }}
                ></SelectedMoviePage>
              }
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
                  <img src={EmptyPageImage}></img>
                </div>
              }
            />
            <Route
              path={AppRoute.Favourites}
              element={
                <div
                  style={{
                    minHeight: "80%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={EmptyPageImage}></img>
                </div>
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
          {/* <Route path="*" element={<Navigate to={AppRoute.NotFound} replace />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
