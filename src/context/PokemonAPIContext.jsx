import { createContext, useEffect, useState } from "react";

export const PokemonAPIContext = createContext();

export default function PokemonAPIContextProvider(props) {
  const [loading, setLoading] = useState(false);
  const [pokemon, setPokemon] = useState([]);
  const [chosenPokemon, setChosenPokemon] = useState([]);
  const api = "http://localhost:8080/pokemon";

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const res = await fetch(api);
        const data = await res.json();
        setPokemon(data.pokemons);
        setLoading(false);
        // console.log(data.pokemons);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <PokemonAPIContext.Provider
      value={{ pokemon, loading, chosenPokemon, setChosenPokemon }}
    >
      {props.children}
    </PokemonAPIContext.Provider>
  );
}
