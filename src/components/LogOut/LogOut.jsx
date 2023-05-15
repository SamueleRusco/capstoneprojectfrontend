import React from "react";
import { useDispatch } from "react-redux";
import { LOGIN_USER } from "../../actions/loginAction";

const LogOut = () => {
  const dispatch = useDispatch();
  const loginDispatch = () => {
    dispatch({
      type: LOGIN_USER,
      payload: [
        {
          id: "",
          username: "",
          email: "",
          password: "",
          bearerToken: "",
          isLogged: false,
        },
      ],
    });

    window.location.href = "/login";
  };
  return (
    <div>
      <h1>
        Welcome <span className="userName"> User</span>
      </h1>
      <button className="logOut_button" onClick={loginDispatch}>
        {" "}
        LogOut
      </button>
    </div>
  );
};

export default LogOut;
