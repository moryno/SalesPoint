import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Login.scss";
import { useAuthStore } from "_hooks";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const authStore = useAuthStore();
  const { isFetching } = useSelector((store) => store.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    authStore.login({ username, password });
  };
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input
          name="username"
          type="text"
          placeholder="johndoe"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          name="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button disabled={isFetching} type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
