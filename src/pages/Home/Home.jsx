import React from "react";
import LogOut from "../../components/LogOut/LogOut";
import Footer from "../../components/Footer/Footer"
import { useSelector } from "react-redux";
import NavBar from "../../components/NavBar/NavBar";
import { Container } from "react-bootstrap";
import homePic from "../../components/assets/images/JKL_HOME.jpg"
import FollowMe from "../../components/FollowMe/FollowMe"
import { Link } from "react-router-dom";
const Home = () => {
  const role = useSelector((state) => state.register.user[0].role);


 let content;

  if (role === "ROLE_ADMIN") {
    content = <div>admin</div>;
  } else if (role === "ROLE_USER") {
    content = <div>user</div>;
  } else {
    content = <div>c'è stato un problema</div>;
  }
return (
<div className="row m-0 p-0" style={{width:"100vw"}}>
  <div className="col-12 col-md-5 m-0 p-0" style={{ height:"fit-content",}}>
<h6  style={{textAlign:"start", marginLeft:"30px",marginTop:"30px", fontStyle:"italic", fontFamily:"monospace"}}>CATTURA L'ESSENZA DELLA MELODIA CHE DANZA NELL'INFINITO, MENTRE LE NOTE SI LIBRANO NELL'AIRA, TRASPORTANDO L'ANIMA IN UN VORTICE DI EMOZIONI SENZA FINE.</h6>
<ul className="navBar" style={{marginTop:"30px",marginLeft:"30px", textAlign:"start"}}>
<Link to="/playlist" className="linkTo">PLAYLISTS</Link>
<Link to="/contacts" className="linkTo">CONTACTS</Link>
<Link to="/events" className="linkTo">EVENTS</Link>
<Link to="/newsletter" className="linkTo mb-5">NEWSLETTER</Link>
<FollowMe/>
</ul>

  </div>
  <div className="col-12 col-md-7 m-0 p-0 coldx" style={{textAlign: "start", position:"relative"}}>
 
    <h1 className=" d-md-block big full m-0 p-0" style={{ position: "absolute", top:"66px",zIndex: 1  }}>JAKOLESS LIMITED</h1>
    <h1 className="big line  d-md-block" style={{ position: "absolute", top: "100px", zIndex: 1 }}>JAKOLESS LIMITED</h1>
    <h1 className="big line  d-md-block" style={{ position: "absolute", top: "152px", transform: "translateY(-50%)", zIndex: 1 }}>JAKOLESS LIMITED</h1>
    <img className="m-0 p-0" style={{ position: "absolute", width:"100%", top:"100px",  }} src={homePic} alt="Immagine" />
  
</div>


    </div>


  
  );
};

export default Home;


