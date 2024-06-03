import "./App.css";
import { Route, Routes } from "react-router-dom";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";
//Components
import Homepage from "./components/Homepage";
import Pokedex from "./components/Pokedex";
import Navbar from "./components/Navbar";
import Pokefight from "./components/Pokefight";
import Leaderboard from "./components/Leaderboard";
import Aboutme from "./components/Aboutme";
import PokemonIdPage from "./components/PokemonIdPage";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  const { user } = useContext(UserContext);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={!user ? <Signup /> : <Homepage />} />
        <Route path="/login" element={!user ? <Login /> : <Homepage />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokedex/:pokemonid" element={<PokemonIdPage />} />
        <Route path="/pokefight" element={!user ? <Signup /> : <Pokefight />} />
        <Route
          path="/leaderboard"
          element={!user ? <Signup /> : <Leaderboard />}
        />
        <Route path="/aboutme" element={<Aboutme />} />
      </Routes>
    </>
  );
}

export default App;
