import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const EventoUser = () => {
  const bearerTokenNum = useSelector(
    (state) => state.register.user[0].bearerToken
  );
  const [eventi, setEventi] = useState([]);
  const [fileGet, setFileGet] = useState([]);

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
          style={{ width: "100px" }}
          src={`data:image/png;base64, ${immagine.imageData}`}
          alt="Immagine evento"
        />
      );
    }
    return null;
  };

  useEffect(() => {
    //console.log("sono did mount");
    fetchData();
  }, []);

  return (
    <>
      {eventi &&
        eventi.map((element, i) => (
          <Card key={i}>
            {renderImmagine(element.immagineEvento)}
            <Card.Body>
              <Card.Title>{element.titoloEvento}</Card.Title>

              <Card.Text>{element.descrizione}</Card.Text>
              <div>
                <span>{element.dataEvento}</span> * <span>{element.luogo}</span>
              </div>
            </Card.Body>
          </Card>
        ))}
    </>
  );
};

export default EventoUser;
