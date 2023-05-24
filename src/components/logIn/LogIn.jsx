import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { LOGIN_USER } from "../../actions/loginAction";
import { Link } from "react-router-dom";
import { Button, Form, Image } from "react-bootstrap";

import logo from "../assets/images/JKL_limited_LOGO_1_WHITE.png"

function LogIn() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);
  const [bearerToken, setBearerToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [role, setRole] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


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
    <div style={{  position: "fixed",
  top: "40%",
  left: "50%",
  transform: "translate(-50%, -50%)", 
  }}>
      {!isLoading ? (
        <Form>
          
          <div className="d-flex align-items-center"><img src={logo} style={{width:"12em"}}></img>
          <h1 className="ms-5" >LOGIN</h1></div>
          
          <Form.Group className="mb-3" controlId="formBasicText" style={{marginTop:"20%"}}>
            <h6 className="dancing ">Welcome Back!</h6>
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
              placeholder="Email"
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
          {/* <Form.Group className="mb-3" controlId="formBasicPassword">
            
            <Form.Control
              type="password"
              placeholder="Conferma la tua password"
              value={password}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group> */}

          <Button
          className="redButton"
            variant="primary"
            type="button"
            value="Login"
            onClick={registerFetch}
           
          >
           <span className="buttonSpan">Accedi</span> 
          </Button>
          <p
            variant="primary"
            type="button"
            value="Register"
            onClick={redirect}
            style={{ width:"100%",
              position: "fixed",
              bottom: "-30%",
              left: "50%",
              transform: "translateX(-50%)", }}
            
          >
            non sei registrato? registrati
          </p>
        </Form>
      ) : (
        <svg viewBox="25 25 50 50">
  <circle r="20" cy="50" cx="50"></circle>
</svg>
      )}
    </div>
  );
}

export default LogIn;
