import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { PokemonAPIContext } from "../context/PokemonAPIContext";
import { Link } from "react-router-dom";

function PokemonIdPage() {
  const { pokemon, loading } = useContext(PokemonAPIContext);
  const { pokemonid } = useParams();
  const findThatPokemon = pokemon.find(
    (item) => item.id === parseInt(pokemonid, 10)
  );
  const [currentPokemon, setCurrentPokemon] = useState(parseInt(pokemonid, 10));
  console.log(currentPokemon);

  return (
    <div>
      <h1>Pokemon Id Page</h1>
      <h2>{findThatPokemon.pokemonName}</h2>
      <img src={findThatPokemon.pokemonMainPic} alt="" />
      <Link to="/pokedex">Back to Pokedex</Link>
    </div>
  );
}

export default PokemonIdPage;
