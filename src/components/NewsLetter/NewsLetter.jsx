import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

import Row from "react-bootstrap/Row";

const NewsLetter = () => {
  const [validated, setValidated] = useState(false);

  // const postNewsLetter = async (payload) => {
  //   try {
  //     const response = await fetch("http://localhost:8080/api/newsletter", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(payload),
  //     });

  //     if (response.ok) {
  //       console.log("dati inviati correttamente", response);
  //     } else {
  //       console.log("c'è stato un problema");
  //     }
  //   } catch (error) {
  //     console.log(error, "problemone");
  //     // Si è verificato un errore durante la richiesta
  //     // Aggiungi qui le azioni da eseguire in caso di errore
  //   }
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      return;
    }

    const formData = new FormData(form);
    const payload = {
      nome: formData.get("nome"),
      cognome: formData.get("cognome"),
      email: formData.get("email"),
      consensoPrivacy: true,
    };

    //await postNewsLetter(payload);

    setValidated(true);
  };

  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nome</Form.Label>
          <Form.Control required type="text" placeholder="Nome" name="nome" />
          <Form.Control.Feedback type="invalid">
            Campo obbligatorio
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Cognome</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Cognome"
            name="cognome"
          />
          <Form.Control.Feedback type="invalid">
            Campo obbligatorio
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control required type="email" placeholder="Email" name="email" />
        <Form.Control.Feedback type="invalid">
          Campo obbligatorio
        </Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check label="Autorizzo il trattamento dei miei dati personali, ai sensi del D. lgs. 196 del 30 giugno 2003" />
      </Form.Group>
      <Button type="submit">Invia modulo</Button>
    </Form>
  );
};

export default NewsLetter;
