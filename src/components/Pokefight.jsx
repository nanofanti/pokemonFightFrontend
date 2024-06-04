import { useContext, useState, useEffect } from "react";
import { PokemonAPIContext } from "../context/PokemonAPIContext";

function Pokefight() {
  const { pokemon, loading, chosenPokemon, setChosenPokemon } =
    useContext(PokemonAPIContext);
  const [opponent, setOpponent] = useState(null);
  const [isLoadingOpponent, setIsLoadingOpponent] = useState(null);

  //Battle Logic
  //HP
  const [youHPWin, setYouHPWin] = useState(false);
  const [opponentHPWin, setOpponentHPWin] = useState(false);
  //Attack
  const [youAttackWin, setYouAttackWin] = useState(false);
  const [opponentAttackWin, setOpponentAttackWin] = useState(false);
  //Defense
  const [youDefenseWin, setYouDefenseWin] = useState(false);
  const [opponentDefenseWin, setOpponentDefenseWin] = useState(false);
  //Special Attack
  const [youSPAttackWin, setYouSPAttackWin] = useState(false);
  const [opponentSPAttackWin, setOpponentSPAttackWin] = useState(false);
  //Special Defense
  const [youSPDefenseWin, setYouSPDefenseWin] = useState(false);
  const [opponentSPDefenseWin, setOpponentSPDefenseWin] = useState(false);

  //Show stats
  const [showHP, setShowHP] = useState(false);
  const [showAttack, setShowAttack] = useState(false);
  const [showDefense, setShowDefense] = useState(false);
  const [showSPAttack, setShowSPAttack] = useState(false);
  const [showSPDefense, setShowSPDefense] = useState(false);

  //Counter My Pokemon
  const [myCounter, setMyCounter] = useState(0);
  //Opponent counter
  const [opponentCounter, setOpponentCounter] = useState(0);

  const handleMyPoints = () => {
    setMyCounter((prevCounter) => prevCounter + 1);
  };

  const handleOpponentCounter = () => {
    setOpponentCounter((prevCounter) => prevCounter + 1);
  };

  console.log(myCounter);
  console.log(opponentCounter);
  console.log(pokemon);

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

  const handleHP = () => {
    if (chosenPokemon.base.HP > opponent.base.HP) {
      setYouHPWin(true);
      handleMyPoints();
    } else if (chosenPokemon.base.HP === opponent.base.HP) {
      setOpponentHPWin(true);
      setYouHPWin(true);
    } else {
      setOpponentHPWin(true);
      handleOpponentCounter();
    }
  };

  const handleAttack = () => {
    if (chosenPokemon.base.Attack > opponent.base.Attack) {
      setYouAttackWin(true);
      handleMyPoints();
    } else if (chosenPokemon.base.Attack === opponent.base.Attack) {
      setOpponentAttackWin(true);
      setYouAttackWin(true);
    } else {
      setOpponentAttackWin(true);
      handleOpponentCounter();
    }
  };

  const handleDefense = () => {
    if (chosenPokemon.base.Defense > opponent.base.Defense) {
      setYouDefenseWin(true);
      handleMyPoints();
    } else if (chosenPokemon.base.Defense === opponent.base.Defense) {
      setOpponentDefenseWin(true);
      setYouDefenseWin(true);
    } else {
      setOpponentDefenseWin(true);
      handleOpponentCounter();
    }
  };

  const handleSPAttack = () => {
    if (chosenPokemon.base.SpecialAttack > opponent.base.SpecialAttack) {
      setYouSPAttackWin(true);
      handleMyPoints();
    } else if (
      chosenPokemon.base.SpecialAttack === opponent.base.SpecialAttack
    ) {
      setOpponentSPAttackWin(true);
      setYouSPAttackWin(true);
    } else {
      setOpponentSPAttackWin(true);
      handleOpponentCounter();
    }
  };

  const handleSPDefense = () => {
    if (chosenPokemon.base.SpecialDefense > opponent.base.SpecialDefense) {
      setYouSPDefenseWin(true);
      handleMyPoints();
    } else if (
      chosenPokemon.base.SpecialDefense === opponent.base.SpecialDefense
    ) {
      setOpponentSPDefenseWin(true);
      setYouSPDefenseWin(true);
    } else {
      setOpponentSPDefenseWin(true);
      handleOpponentCounter();
    }
  };

  const handleFight = async () => {
    handleHP();
    await delay(700); // Wait 500ms
    setShowHP(true);

    handleAttack();
    await delay(700);
    setShowAttack(true);

    handleDefense();
    await delay(700);
    setShowDefense(true);

    handleSPAttack();
    await delay(700);
    setShowSPAttack(true);

    handleSPDefense();
    await delay(700);
    setShowSPDefense(true);
  };

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  return (
    <>
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

              <div>
                {showHP ? (
                  youHPWin ? (
                    <div className="bg-green-500">
                      HP: {chosenPokemon.base.HP}
                    </div>
                  ) : (
                    <div className="bg-red-500">
                      HP: {chosenPokemon.base.HP}
                    </div>
                  )
                ) : null}

                {showAttack ? (
                  youAttackWin ? (
                    <div className="bg-green-500">
                      Attack: {chosenPokemon.base.Attack}
                    </div>
                  ) : (
                    <div className="bg-red-500">
                      Attack: {chosenPokemon.base.Attack}
                    </div>
                  )
                ) : null}

                {showDefense ? (
                  youDefenseWin ? (
                    <div className="bg-green-500">
                      Defense: {chosenPokemon.base.Defense}
                    </div>
                  ) : (
                    <div className="bg-red-500">
                      Defense: {chosenPokemon.base.Defense}
                    </div>
                  )
                ) : null}

                {showSPAttack ? (
                  youSPAttackWin ? (
                    <div className="bg-green-500">
                      Special Attack: {chosenPokemon.base.SpecialAttack}
                    </div>
                  ) : (
                    <div className="bg-red-500">
                      Special Attack: {chosenPokemon.base.SpecialAttack}
                    </div>
                  )
                ) : null}

                {showSPDefense ? (
                  youSPDefenseWin ? (
                    <div className="bg-green-500">
                      Special Defense: {chosenPokemon.base.SpecialDefense}
                    </div>
                  ) : (
                    <div className="bg-red-500">
                      Special Defense: {chosenPokemon.base.SpecialDefense}
                    </div>
                  )
                ) : null}
              </div>
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
              {showHP ? (
                opponentHPWin ? (
                  <div className="bg-green-500">HP: {opponent.base.HP}</div>
                ) : (
                  <div className="bg-red-500">HP: {opponent.base.HP}</div>
                )
              ) : null}
              {showAttack ? (
                opponentAttackWin ? (
                  <div className="bg-green-500">
                    Attack: {opponent.base.Attack}
                  </div>
                ) : (
                  <div className="bg-red-500">
                    Attack: {opponent.base.Attack}
                  </div>
                )
              ) : null}
              {showDefense ? (
                opponentDefenseWin ? (
                  <div className="bg-green-500">
                    Defense: {opponent.base.Defense}
                  </div>
                ) : (
                  <div className="bg-red-500">
                    Defense: {opponent.base.Defense}
                  </div>
                )
              ) : null}
              {showSPAttack ? (
                opponentSPAttackWin ? (
                  <div className="bg-green-500">
                    Special Attack: {opponent.base.SpecialAttack}
                  </div>
                ) : (
                  <div className="bg-red-500">
                    Special Attack: {opponent.base.SpecialAttack}
                  </div>
                )
              ) : null}
              {showSPDefense ? (
                opponentSPDefenseWin ? (
                  <div className="bg-green-500">
                    Special Defense: {opponent.base.SpecialDefense}
                  </div>
                ) : (
                  <div className="bg-red-500">
                    Special Defense: {opponent.base.SpecialDefense}
                  </div>
                )
              ) : null}
            </div>
          ) : (
            <p>No opponents available.</p>
          )}
          <button onClick={handleFight}>FIGHT</button>
        </div>
      </div>
    </>
  );
}

export default Pokefight;
