import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getDatabase, ref, get, child } from "firebase/database";
import { UserContext } from "./UserContext"; // Import the UserContext
import { database } from "./firebaseConfig";

const Log = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useContext(UserContext); // Get setUser from context
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    const dbRef = ref(getDatabase());
    get(child(dbRef, `Authentication`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const users = snapshot.val();
          const user = Object.values(users).find(
            (user) => user.email === email && user.password === password
          );

          if (user) {
            setUser(user); // Set the logged-in user globally
            setError("");
            navigate("/");
          } else {
            setError("Invalid email or password.");
          }
        } else {
          setError("No users found.");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="log-container">
      <div className="logform">
        <div className="headin">
          <b>Login Page</b>
        </div>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
          <button className="log-btn" type="submit">
            Submit
          </button>
          <div className="register-link">
            <span>Not Registered Yet?</span>
            <Link to="/Reg">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Log;
