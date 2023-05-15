import React from "react";
import LogOut from "../components/LogOut/LogOut";

import { useSelector } from "react-redux";

const Home = () => {
  const role = useSelector((state) => state.register.user[0].role);
  console.log(role, "ruolo");

  {
    if (role == "ROLE_USER") {
      return (
        <div>
          <p>questa è la home</p>
          <p>sei loggato come: {role} pagina user</p>
          <LogOut></LogOut>
        </div>
      );
    } else if (role === "ROLE_ADMIN") {
      return (
        <div>
          <p>questa è la home</p>
          <p>sei loggato come: {role} pagina ADMIN</p>
          <LogOut></LogOut>
        </div>
      );
    } else {
      return (
        <div>
          <p>c'è stato un problema</p>
          <LogOut></LogOut>
        </div>
      );
    }
  }
};

export default Home;
