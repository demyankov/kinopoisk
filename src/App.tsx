import React from "react";

import "./App.css";
import { getMovies } from "./api/getMovies";
import { Card } from "./components/card/card";
import { MainLayout } from "./components/mainLayout/mainLayout";
import { MoviesPage } from "./pages/movies/moviesPage";
import { Global } from "@emotion/react";
import { getRebootCSS } from "./components/styles/reboot";

function App(): JSX.Element {
  return (
    <div className="App">
      <Global styles={getRebootCSS()} />
      <MainLayout></MainLayout>
    </div>
  );
}

export default App;
