import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <NavLink to="/">Homepage</NavLink>
      <NavLink to="/pokedex">Pokedex</NavLink>
      <NavLink to="/pokefight">Pokefight</NavLink>
      <NavLink to="/leaderboard">Leaderboard</NavLink>
      <NavLink to="/aboutme">About me</NavLink>
    </div>
  );
}

export default Navbar;
