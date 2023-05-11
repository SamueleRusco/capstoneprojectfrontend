import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { REGISTER_USER } from "../../actions/loginAction";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /*const [isLogged, setIsLogged] = useState(false);*/

  const registerFetch = async () => {
    try {
      let response = await fetch("http://localhost:8080/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        }),
      });
      let data = await response.text();
      console.log("text", data);
    } catch (err) {
      console.log(err);
    }
  };

  const dispatch = useDispatch();

  /*const register = () => {
    dispatch({
      type: REGISTER_USER,
      payload: [
        {
          id: new Date().getTime(),
          username,
          email,
          password,
        },
      ],
    });
  }; DOMANI QUESTO DISPATCH VA COPIATONEL POST PER IL LOGIN :))))*/

  return (
    <div className="Register">
      <div className="Register_form">
        <h1>Register here</h1>
        <input
          type="name"
          placeholder="name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <input type="button" value="register" onClick={registerFetch} />
    </div>
  );
}

export default Register;
