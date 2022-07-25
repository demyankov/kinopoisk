import React from 'react';
import { getMovies } from './api/getMovies';

import './App.css';

async function www (){
  const moviesResponse = await getMovies ({s:"big",y:"2021",page:10})
  const movies = moviesResponse['Search']
  console.log(movies)
}

www ()

function App() {

  return (
    <div className="App">
      <header className="App-header">
 
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
