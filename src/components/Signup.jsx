import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { setUser } = useContext(UserContext);

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
        <button>Sign up here!</button>
        {error && <h2>{error}</h2>}
      </form>
    </div>
  );
}

export default Signup;
