import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function Homepage() {
  const { user } = useContext(UserContext);
  return (
    <div className="flex flex-col items-center">
      <Link to="/pokedex">
        <img src="/home_banner.png" alt="" />
      </Link>
      {!user ? (
        <div>
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      ) : (
        <Link to="/pokedex">
          <h2>Choose your Pokemon!</h2>
        </Link>
      )}
    </div>
  );
}

export default Homepage;
