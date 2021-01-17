import React from 'react';
import './App.css';
import pokemons from './data';

import Pokedex from './Pokedex';

function App() {

  return (
    <div className="App">
      <div className="title-container">
        <h1 className="title"> Pokedex </h1>
      </div>
      <Pokedex pokemons={pokemons} />
    </div>
  );
}

export default App;
