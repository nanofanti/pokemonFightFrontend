import { useContext } from "react";
import { PokemonAPIContext } from "../context/PokemonAPIContext";
import { useLocation } from "react-router-dom";

function MyPokemons() {
  const { chosenPokemon, setChosenPokemon } = useContext(PokemonAPIContext);
  const location = useLocation();
  const caughtPokemon = location.state?.caughtPokemon || []; // Get from state

  return (
    <>
      <div>My Pokemons</div>
      <h1>{chosenPokemon.pokemonName}</h1>
      <img src={chosenPokemon.pokemonMainPic} alt="" />
      <div>
        <h2>My Caught Pokémon</h2>
        {caughtPokemon.map((pokemon) => (
          <div key={pokemon.id}>
            <img src={pokemon.pokemonMainPic} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}

export default MyPokemons;
