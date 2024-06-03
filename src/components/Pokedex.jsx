import { useContext } from "react";
import { PokemonAPIContext } from "../context/PokemonAPIContext";
import { Link } from "react-router-dom";

function Pokedex() {
  const { pokemon, loading } = useContext(PokemonAPIContext);

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
              <Link to={`/pokedex/${item.id}`}>
                <img src={item.pokemonMainPic} alt={item.pokemonName} />
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Pokedex;
