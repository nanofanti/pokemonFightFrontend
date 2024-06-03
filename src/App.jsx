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
import UserProfile from "./components/UserProfile";

function App() {
  const { user } = useContext(UserContext);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokedex/:pokemonid" element={<PokemonIdPage />} />
        <Route path="/pokefight" element={<Pokefight />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/aboutme" element={<Aboutme />} />
      </Routes>
    </>
  );
}

export default App;
