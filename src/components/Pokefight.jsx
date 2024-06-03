import { useContext, useState, useEffect } from "react";
import { PokemonAPIContext } from "../context/PokemonAPIContext";

function Pokefight() {
  const { pokemon, loading, chosenPokemon, setChosenPokemon } =
    useContext(PokemonAPIContext);
  const [opponent, setOpponent] = useState(null);
  const [isLoadingOpponent, setIsLoadingOpponent] = useState(true);

  useEffect(() => {
    if (!loading && chosenPokemon && pokemon.length > 0) {
      const filteredPokemon = pokemon.filter(
        (poke) => poke.id !== chosenPokemon.id
      );

      const randomOpponent =
        filteredPokemon.length > 0
          ? selectRandomPokemon(filteredPokemon)
          : null;

      setOpponent(randomOpponent);
      setIsLoadingOpponent(false);
    }
  }, []);

  function selectRandomPokemon(pokemonArray) {
    const randomIndex = Math.floor(Math.random() * pokemonArray.length);
    return pokemonArray[randomIndex];
  }

  // const handleBattle = () => {
  //   if (chosenPokemon.base.HP > opponent.base.HP) {
  //     console.log("WIN");
  //   } else {
  //     console.log("LOSE");
  //   }
  // };

  console.log(opponent);

  return (
    <div className="flex justify-evenly">
      <div>
        {loading ? (
          <p>Loading your Pokémon...</p>
        ) : (
          <div className="flex flex-col items-center">
            <h2>My Pokemon</h2>
            <h2 className="text-7xl">{chosenPokemon.pokemonName}</h2>
            <img
              src={chosenPokemon.pokemonMainPic}
              alt={chosenPokemon.pokemonName}
            />

            <div>HP: {chosenPokemon.base.HP}</div>

            <div>Attack: {chosenPokemon.base.Attack}</div>
            <div>Defense: {chosenPokemon.base.Defense}</div>
            <div>Special Attack: {chosenPokemon.base.SpecialAttack}</div>
            <div>Special Defense: {chosenPokemon.base.SpecialDefense}</div>
          </div>
        )}
      </div>

      <h2>VERSUS</h2>

      <div>
        {isLoadingOpponent ? (
          <p>Loading opponent...</p>
        ) : opponent ? (
          <div className="flex flex-col items-center">
            <h2>Your Opponent</h2>
            <h2 className="text-7xl">{opponent.pokemonName}</h2>
            <img src={opponent.pokemonMainPic} alt={opponent.pokemonName} />
            <div>HP: {opponent.base.HP}</div>
            <div>Attack: {opponent.base.Attack}</div>
            <div>Defense: {opponent.base.Defense}</div>
            <div>Special Attack: {opponent.base.SpecialAttack}</div>
            <div>Special Defense: {opponent.base.SpecialDefense}</div>
          </div>
        ) : (
          <p>No opponents available.</p>
        )}
        <button onClick={handleBattle}>FIGHT</button>
      </div>
    </div>
  );
}

export default Pokefight;
