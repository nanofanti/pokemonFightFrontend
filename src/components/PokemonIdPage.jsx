import { useParams } from "react-router-dom";
import { useContext } from "react";
import { PokemonAPIContext } from "../context/PokemonAPIContext";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

function PokemonIdPage() {
  const { pokemon, loading, chosenPokemon, setChosenPokemon } =
    useContext(PokemonAPIContext);
  const { user, setUser } = useContext(UserContext);

  const { pokemonid } = useParams();
  const findThatPokemon = pokemon.find(
    (item) => item.id === parseInt(pokemonid, 10)
  );

  console.log(user);
  console.log(findThatPokemon);
  const chosePokemonToFight = () => {
    setChosenPokemon(findThatPokemon);
  };

  return (
    <div className="flex flex-col items-center">
      <h1>Pokemon Id Page</h1>
      <h2>{findThatPokemon.pokemonName}</h2>
      <img src={findThatPokemon.pokemonMainPic} alt="" />
      <div className="flex flex-col items-center">
        <div>HP: {findThatPokemon.base.HP}</div>
        <div>Attack: {findThatPokemon.base.Attack}</div>
        <div>Defense: {findThatPokemon.base.Defense}</div>
        <div>Special Attack: {findThatPokemon.base.SpecialAttack}</div>
        <div>Special Defense: {findThatPokemon.base.SpecialDefense}</div>
      </div>
      <Link className="m-4" to="/pokedex">
        Back to Pokedex
      </Link>
      {user ? (
        <div className="mt-2">
          <Link to="/pokefight">
            <button onClick={chosePokemonToFight}> Bring Me to Battle</button>
          </Link>
        </div>
      ) : (
        <h1>You need to sign up</h1>
      )}
    </div>
  );
}

export default PokemonIdPage;
