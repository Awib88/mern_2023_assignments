import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";


function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then((response) => {
        setPokemon(response.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>Pokemon Api with axios</h1>
      <div className="container">
        {pokemon.map((pokemon) => (
          <p>{pokemon.name}</p>
        ))}
      </div>
    </div>
  );
}

export default App;