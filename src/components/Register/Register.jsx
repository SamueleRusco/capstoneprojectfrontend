import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../components/assets/images/JKL_limited_LOGO_1_WHITE.png";

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
    <div>
      {!isLoading ? (
        <Form style={{  position: "fixed",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)",
    }}>
          <div className="d-flex align-items-center"><img src={logo} style={{width:"12em"}}></img>
          <h1 className="ms-5" >SIGN UP</h1></div>

          <Form.Group className="mb-3" controlId="formBasicText" style={{marginTop:"20%"}}>
          <h6 className="dancing ">Hello!</h6>
            <Form.Control
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
          
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button
          className="redButton"
            variant="primary"
            type="button"
            value="Login"
            onClick={registerFetch}
          >
            Invia Registrazione
          </Button>
          <p
            variant="primary"
            type="button"
            value="Register"
            onClick={redirect}
            style={{
              width:"100%",
              position: "fixed",
              bottom: "-30%",
              left: "50%",
              transform: "translateX(-50%)",}}
          >
            già registrato? accedi
          </p>
        </Form>
      ) : (
        <p>sto caricando</p>
      )}
    </div>
  );
}

export default Register;
