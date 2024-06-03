import { Link } from "react-router-dom";

function Homepage() {
  return (
    <div className="flex flex-col items-center">
      <Link to="/pokedex">
        <img src="/home_banner.png" alt="" />
      </Link>
    </div>
  );
}

export default Homepage;
