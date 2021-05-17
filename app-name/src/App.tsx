import React from 'react';
import logo from './logo.svg';
import './App.css';
import PokemonList from './components/PokemonList';
import {fetchUserProfile} from './service/GitHubApiService '

fetchUserProfile();

function App() {
  return (
    <div className="App">
      <PokemonList/>
      {/* <fetchUserProfile/> */}
    </div>
  );
}

export default App;
