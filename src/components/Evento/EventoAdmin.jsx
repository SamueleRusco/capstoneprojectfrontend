import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import LogOut from "../LogOut/LogOut";

import ImgFetch from "../ImgFetch/ImgFetch";

const EventoAdmin = () => {
  const idState = useSelector((state) => state.idImg.id);
  const role = useSelector((state) => state.register.user[0].role);
  const bearerTokenNum = useSelector(
    (state) => state.register.user[0].bearerToken
  );
  const bearerToken = "Bearer " + bearerTokenNum;

  const [show, setShow] = useState(false);
  const [luogo, setLuogo] = useState("");
  const [titoloEvento, setTitoloEvento] = useState("");
  const [descrizione, setDescrizione] = useState("");
  const [dataEvento, setDataEvento] = useState("");
  const [artistiEvento, setArtistiEvento] = useState("");
  const [immagineEventoId, setImmagineEventoId] = useState("");
  // Inizializzato come null

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    console.log(idState, "sto salvando questo id");
    setImmagineEventoId(idState);
  }, [idState]);

  const handleLuogoChange = (event) => {
    setLuogo(event.target.value);
  };

  const handleTitoloEventoChange = (event) => {
    setTitoloEvento(event.target.value);
  };

  const handleDescrizioneChange = (event) => {
    setDescrizione(event.target.value);
  };

  const handleDataEventoChange = (event) => {
    setDataEvento(event.target.value);
  };

  const handleArtistiEventoChange = (event) => {
    setArtistiEvento(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    eventoPost();
    handleClose();
  };

  const handleImmagineEventoIdChange = (event) => {
    setImmagineEventoId(event.target.value);
  };

  const eventoPost = async () => {
    try {
      const url = "http://localhost:8080/api/eventi";
      const headers = {
        "Content-Type": "application/json",
        Authorization: bearerToken,
      };

      const eventData = {
        luogo: luogo,
        titoloEvento: titoloEvento,
        descrizione: descrizione,
        dataEvento: dataEvento,
        artistiEvento: artistiEvento.split(","),
        immagineEvento: immagineEventoId,
      };

      const requestOptions = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(eventData),
      };

      const response = await fetch(url, requestOptions);
      if (response.ok) {
        const result = await response.text();
        console.log(result, "fetch evento ok");
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return role === "ROLE_ADMIN" ? (
    <div>
      <h1>PAGINA EVENTI</h1>
      <Button variant="primary" onClick={handleShow} className="redButton">
        Aggiungi un nuovo evento!
      </Button>
      <Modal show={show} onHide={handleClose} className="modalEvent">
        <Modal.Header closeButton>
          <Modal.Title>Il tuo Evento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="luogo">
              <Form.Label>Luogo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Luogo"
                value={luogo}
                onChange={handleLuogoChange}
              />
            </Form.Group>

            <Form.Group controlId="titoloEvento">
             <Form.Label>Titolo Evento</Form.Label>
              <Form.Control
                type="text"
                placeholder="Titolo Evento"
                value={titoloEvento}
                onChange={handleTitoloEventoChange}
              />
            </Form.Group>

            <Form.Group controlId="descrizione">
             <Form.Label>Descrizione</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Descrizione..."
                rows={3}
                value={descrizione}
                onChange={handleDescrizioneChange}
              />
            </Form.Group>

            <Form.Group controlId="dataEvento">
              <Form.Label>Data Evento</Form.Label>
              <Form.Control
                type="date"
                placeholder="Data Evento"
                value={dataEvento}
                onChange={handleDataEventoChange}
              />
            </Form.Group>

            <Form.Group controlId="artistiEvento">
              <Form.Label>Artisti Evento (separati da virgola)</Form.Label>
              <Form.Control
                type="text"
                value={artistiEvento}
                onChange={handleArtistiEventoChange}
              />
            </Form.Group>

            <Form.Group controlId="immagineEventoId">
              <Form.Label>Aggiungi un'immagine:</Form.Label>             
              <ImgFetch />
            </Form.Group>
<div className="d-flex justify-content-between"><div></div>
            <Button variant="primary" type="submit" className="redButton" >
              Aggiungi Evento
            </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  ) : (
    <>
      <p>access denied</p>
      <LogOut></LogOut>
    </>
  );
};

export default EventoAdmin;
