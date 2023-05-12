import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { LOGIN_USER } from "../../actions/loginAction";
import { Link } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import { WidthFull } from "@mui/icons-material";

function LogIn() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [bearerToken, setBearerToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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
      setBearerToken(data.accessToken);
      loginDispatch(data.accessToken);
      console.log("text", data);
      window.location.href = "/";
    } catch (err) {
      console.log(err);
    }
  };

  const dispatch = useDispatch();

  const loginDispatch = (bearerToken) => {
    dispatch({
      type: LOGIN_USER,
      payload: [
        {
          id: new Date().getTime(),
          username,
          email,
          password,
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
        </Form>
      ) : (
        <p>sto caricando</p>
      )}
    </div>
  );
}

export default LogIn;
