import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { user, setUser } = useContext(UserContext);

  const notify = () =>
    toast.success("You have successfully signed up ✌️", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const response = await fetch("http://localhost:8080/user/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (!response.ok) {
      console.log("Response is NOT ok!");
      setLoading(false);
      setError(data.error);
    }

    if (response.ok) {
      console.log("Response is OK!");
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
      setLoading(false);
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={notify}>Sign up here!</button>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition:Bounce
        />
        {error && <h2>{error}</h2>}
      </form>
      {!user ? null : <Link to="/pokedex">Choose your pokemon</Link>}
    </div>
  );
}

export default Signup;
