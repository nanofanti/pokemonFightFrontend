import { useContext } from "react";
import { PokemonAPIContext } from "../context/PokemonAPIContext";

function Pokedex() {
  const { pokemon, loading } = useContext(PokemonAPIContext);
  console.log(pokemon);
  return (
    <>
      <h1>Pokedex Page</h1>
      {loading ? (
        <h1>Data is loading</h1>
      ) : (
        <div>
          {pokemon.map((item) => (
            <div key={item._id}>
              <h2>{item.pokemonName}</h2>
              <img src={item.pokemonMainPic} alt={item.pokemonName} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Pokedex;
