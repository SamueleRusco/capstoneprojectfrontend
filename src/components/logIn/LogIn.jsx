import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { LOGIN_USER } from "../../actions/loginAction";
import { Link } from "react-router-dom";
import { Button, Form, Image } from "react-bootstrap";


function LogIn() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [bearerToken, setBearerToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState("");

  const registerFetch = async () => {
    setIsLoading(true);
    try {
      let response = await fetch("http://localhost:8080/api/auth/login", {
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

      let data = await response.json();
      console.log(data.role[0].roleName);
      setBearerToken(data.accessToken);
      setRole(data.role[0].roleName);
      loginDispatch(data.accessToken, data.role[0].roleName);

      console.log("text", data);
      window.location.href = "/";
    } catch (err) {
      console.log(err);
    }
  };
  const redirect = () => {
    window.location.href = "/register";
  };

  const dispatch = useDispatch();

  const loginDispatch = (bearerToken, role) => {
    dispatch({
      type: LOGIN_USER,
      payload: [
        {
          id: new Date().getTime(),
          username,
          email,
          password,
          role,
          bearerToken,
          isLogged: true,
        },
      ],
    });
    setIsLoading(false);
  };

  return (
    <div style={{ maxWidth: "50%", marginTop: "10%" }}>
      {!isLoading ? (
        <Form>
          <h1>Accedi</h1>
          <Image />

          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Nome Utente</Form.Label>
            <Form.Control
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Indirizzo E-Mail</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              Non condivideremo con nessuno L'indirizzo e-mail che ci stai
              fornendo.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="button"
            value="Login"
            onClick={registerFetch}
          >
            Accedi
          </Button>
          <Button
            variant="primary"
            type="button"
            value="Register"
            onClick={redirect}
          >
            non sei registrato? registrati
          </Button>
        </Form>
      ) : (
        <p>sto caricando</p>
      )}
    </div>
  );
}

export default LogIn;
