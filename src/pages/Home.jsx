import React from "react";
import LogOut from "../components/LogOut/LogOut";

import { useSelector } from "react-redux";
import ImgFetch from "../components/ImgFetch/ImgFetch";
import SpotifyFetch from "../components/SpotifyFetch/SpotifyFetch";
import NewsLetter from "../components/NewsLetter/NewsLetter";
import EventoAdmin from "../components/Evento/EventoAdmin";

const Home = () => {
  const role = useSelector((state) => state.register.user[0].role);
  console.log(role, "ruolo");

  {
    if (role === "ROLE_USER") {
      return (
        <div
          style={{
            backgroundColor: "yellow",
          }}
        >
          <p>questa è la home</p>
          <p>sei loggato come: {role} pagina user</p>
          <LogOut></LogOut>
        </div>
      );
    } else if (role === "ROLE_ADMIN") {
      return (
        <div
          style={{
            backgroundColor: "yellow",
          }}
        >
          <p>questa è la home</p>
          <p>sei loggato come: {role} pagina ADMIN</p>
          <EventoAdmin />
          {/* <NewsLetter />
          <SpotifyFetch />
          <ImgFetch />
        <LogOut></LogOut>*/}
        </div>
      );
    } else {
      return (
        <div
          style={{
            backgroundColor: "yellow",
          }}
        >
          <p>c'è stato un problema</p>
          <LogOut></LogOut>
        </div>
      );
    }
  }
};

export default Home;
