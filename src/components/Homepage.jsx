import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Login from "./Login";

function Homepage() {
  const { user } = useContext(UserContext);
  return (
    <div className="flex flex-col items-center">
      <Link to="/pokedex">
        <img src="/home_banner.png" alt="" />
      </Link>
      <Link to="/login">Log in</Link>
      <Link to="/signup">Sign up</Link>
    </div>
  );
}

export default Homepage;
