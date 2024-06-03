import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

function Navbar() {
  const { user, setUser } = useContext(UserContext);

  const handleLogOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <div>
      {user !== null && (
        <div>
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      )}

      {user === null && (
        <div className="flex justify-evenly">
          <NavLink to="/">Homepage</NavLink>
          <NavLink to="/pokedex">Pokedex</NavLink>
          <NavLink to="/pokefight">Pokefight</NavLink>
          <NavLink to="/leaderboard">Leaderboard</NavLink>
          <NavLink to="/aboutme">About me</NavLink>
        </div>
      )}
    </div>
  );
}

export default Navbar;
