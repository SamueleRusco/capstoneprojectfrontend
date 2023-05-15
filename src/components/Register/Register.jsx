import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  /*const [isLogged, setIsLogged] = useState(false);*/

  const registerFetch = async () => {
    setIsLoading(true);
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
      setIsLoading(false);
      window.location.href = "/login";
    } catch (err) {
      console.log(err);
    }
  };
  const redirect = () => {
    window.location.href = "/login";
  };

  return (
    <div style={{ maxWidth: "50%", marginTop: "10%" }}>
      {!isLoading ? (
        <Form>
          <h1>Registrati</h1>

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
            Invia Registrazione
          </Button>
          <Button
            variant="primary"
            type="button"
            value="Register"
            onClick={redirect}
          >
            già registrato? accedi
          </Button>
        </Form>
      ) : (
        <p>sto caricando</p>
      )}
    </div>
  );
}

export default Register;
