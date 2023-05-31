import { useEffect, useState } from "react";
import {  Card, Modal, Row } from "react-bootstrap";
import { useSelector } from "react-redux";


const EventoUser = () => {
  const bearerTokenNum = useSelector(
    (state) => state.register.user[0].bearerToken
  );
  const [eventi, setEventi] = useState([]);
  const [fileGet, setFileGet] = useState([]);
 const [showModal, setShowModal] = useState(new Array(eventi.length).fill(false));


const openModal = (index) => {
  const updatedShowModal = [...showModal];
  updatedShowModal[index] = true;
  setShowModal(updatedShowModal);
};


const closeModal = (index) => {
  const updatedShowModal = [...showModal];
  updatedShowModal[index] = false;
  setShowModal(updatedShowModal);
};

  const getImage = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/images/listaimmagini"
      );
      const data = await response.json();
      console.log(data, "immagini json");
      setFileGet(data);
    } catch (error) {
      console.error("Errore durante la richiesta GET:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/eventi", {
        method: "GET",
        headers: { Authorization: `Bearer ${bearerTokenNum}` },
        redirect: "follow",
      });
      const result = await response.json();
      console.log(result);
      setEventi(result.reverse());
      getImage();
    } catch (error) {
      console.log("error", error);
    }
  };

  const renderImmagine = (id) => {
    const immagine = fileGet.find((img) => img.id === id);
    if (immagine) {
      return (
        <Card.Img
        className="eventImg"
         
          src={`data:image/png;base64, ${immagine.imageData}`}
          alt="Immagine evento"
        />
      );
    }
    return null;
  };

  const dateConverter = (element) =>{
      const moment = require('moment');
  const date = moment(element.dataEvento);
  const giorno = date.format('DD');
  const mese = date.format('MMM');  

  return (
    <div className="dateSquare" style={{margin:"0", padding:"0"}}>
      <span style={{padding:"0", margin:"0", lineHeight:"1"}}>{mese}</span>
      <p style={{fontSize:"3.5em", padding:"0", margin:"0" , lineHeight:"1"}}>{giorno}</p>
      
    </div>
  );

  }

  useEffect(() => {
  fetchData();
  });

  return (
    <Row>
      {eventi &&
        eventi.map((element, index) => (
  <div className="col" key={index} style={{ margin: "10px" }}>
    <Card className="eventCard"  onClick={() => openModal(index)}>
            {dateConverter(element)}
            {/* {renderImmagine(element.immagineEvento)} */}
            
            <Card.Body style={{textAlign:"start"}}>
              <Card.Title>{element.titoloEvento}</Card.Title>
              <Card.Text className="clickMeDetails">Click Me for Details ⬆️</Card.Text>
              <Card.Text className="eventDesc">{element.descrizione}</Card.Text>
            </Card.Body>
          </Card>
          <Modal className="userEventModal"show={showModal[index]} onHide={() => closeModal(index)}>
  <Modal.Header closeButton>
    <Modal.Title>{element.titoloEvento}</Modal.Title>
  </Modal.Header>
  {renderImmagine(element.immagineEvento)}
  <Modal.Body>
    <p>{element.descrizione}</p>
    <h5>artisti:</h5>
  <div>
      {element.artistiEvento.map((a, index) => {
        return <span key={index}>{a}</span>;
      })}
    </div>
  </Modal.Body>
  <Modal.Footer className="d-flex text-align-start">
   {element.luogo} ° {element.dataEvento}
  </Modal.Footer>
</Modal>
          </div>
        ))}
    </Row>
  );
};

export default EventoUser;
