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
<h6  style={{textAlign:"start", marginLeft:"30px",marginTop:"30px", fontFamily:"monospace"}}>SCRIVICI QUELLO CHE VUOI TIPO IL TUO MOTTO XD</h6>
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
{/* <div>
    {content}
  </div> */}

    </div>
//   <div className="d-flex flex-column " style={{maxWidth:"90vw", alignItems:"center"}}>
//     <NavBar/>
//   <h1 className="big full m-0 p-0 mt-3">JAKOLESS LIMITED</h1>
//   <h1 className="big line m-0 p-0">JAKOLESS LIMITED</h1>
//   <h1 className="big line m-0 p-0 mb-2">JAKOLESS LIMITED</h1>


// <div className="justify-content-around" style={{maxWidth:"100vw"}}>
  
//   <div className="row" style={{textAlign:"start"}}>
//     <div className="col-md-6  d-flex flex-column align-items-center">
//     <p className="text-wrap">
//       Jakoless Limited è una società di musica dinamica e innovativa 
//       che si dedica a fornire soluzioni creative ai problemi della produzione 
//       e distribuzione musicale moderna. Fondata da un gruppo di 
//       professionisti del settore musicale con anni di esperienza alle spalle, 
//       la nostra società si impegna a offrire servizi di alta qualità che soddisfino 
//       le esigenze dei musicisti, dei produttori e 
//       degli appassionati di musica in generale.</p> 
//       <img className="imgHome m-1" src="http://placekitten.com/800/800" alt="Immagine 1" />
// </div>
//      <div className="col d-flex flex-column-reverse flex-md-column align-items-center">
//       <img className="imgHome m-1" src="http://placekitten.com/800/800" alt="Immagine 1" />
//       <p>La missione di Jakoless Limited 
//       è quella di essere un punto di riferimento per la 
//       produzione musicale di qualità e di aiutare i propri clienti a realizzare 
//       il loro potenziale creativo. La società si impegna a 
//       lavorare a stretto contatto con i propri clienti per 
//       capire le loro esigenze e creare soluzioni personalizzate 
//       che si adattino alle loro esigenze specifiche. 
//       La cultura aziendale di Jakoless Limited è basata sulla collaborazione, 
//       la creatività e l’innovazione. La società si avvale di un team 
//       altamente qualificato e motivato di musicisti, tecnici del 
//       suono e produttori che lavorano insieme per produrre risultati straordinari. 
//     </p>
    
//     </div>
//   </div>

  
  
// </div>

  
  );
};

export default Home;


{/* <p className="m-1">
      Jakoless Limited è una società di musica dinamica e innovativa che si dedica a fornire soluzioni creative ai problemi della produzione e distribuzione musicale moderna. Fondata da un gruppo di professionisti del settore musicale con anni di esperienza alle spalle, la nostra società si impegna a offrire servizi di alta qualità che soddisfino le esigenze dei musicisti, dei produttori e degli appassionati di musica in generale. La missione di Jakoless Limited è quella di essere un punto di riferimento per la produzione musicale di qualità e di aiutare i propri clienti a realizzare il loro potenziale creativo. La società si impegna a lavorare a stretto contatto con i propri clienti per capire le loro esigenze e creare soluzioni personalizzate che si adattino alle loro esigenze specifiche. La cultura aziendale di Jakoless Limited è basata sulla collaborazione, la creatività e l’innovazione. La società si avvale di un team altamente qualificato e motivato di musicisti, tecnici del suono e produttori che lavorano insieme per produrre risultati straordinari.
    </p>

     <img className="imgHome m-1" src="http://placekitten.com/800/800" alt="Immagine 1" /> */}