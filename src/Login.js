import React, { useState } from "react";
import "./Login.css";
import { NavLink, useHistory } from "react-router-dom";
import { auth } from "./Firebase";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const login = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => alert(err.message));

    setEmail("");
    setPassword("");
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((err) => alert(err.message));

    setEmail("");
    setPassword("");
  };

  return (
    <div className="login">
      <NavLink to="/" className="go-back-to-home-page">
        <img src="imgs/a-img-icon.png" alt="" />
      </NavLink>

      <div className="login-container">
        <h3>sign in</h3>

        <form action="" id="login-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              id="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              id="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button" onClick={login}>
            sign in
          </button>
        </form>

        <p>
          py signing-in you agree to amazon's condition use and sale, please see
          our privacy notice.
        </p>
        <button type="submit" className="account-button" onClick={register}>
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}
