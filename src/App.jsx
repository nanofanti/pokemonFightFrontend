import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Pokedex from "./components/Pokedex";
import Navbar from "./components/Navbar";
import Pokefight from "./components/Pokefight";
import Leaderboard from "./components/Leaderboard";
import Aboutme from "./components/Aboutme";
import PokemonIdPage from "./components/PokemonIdPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokedex/:pokemonName" element={<PokemonIdPage />} />
        <Route path="/pokefight" element={<Pokefight />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/aboutme" element={<Aboutme />} />
      </Routes>
    </>
  );
}

export default App;
