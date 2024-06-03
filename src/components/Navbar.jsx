import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";

function Navbar() {
  const { user, setUser } = useContext(UserContext);

  const handleLogOut = () => {
    localStorage.removeItem("user");
    setUser(null);
  };
  console.log(user);
  return (
    <div className="flex justify-evenly">
      <NavLink to="/">Homepage</NavLink>
      <NavLink to="/pokedex">Pokedex</NavLink>
      <NavLink to="/leaderboard">Leaderboard</NavLink>
      {user !== null && (
        <div>
          <h2>{user.nickName}</h2>
          <button onClick={handleLogOut}>Log Out</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
