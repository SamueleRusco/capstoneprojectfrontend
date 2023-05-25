import { useState } from "react";
import { Button, Row, Col, Form } from "react-bootstrap";



const NewsLetterUser = () => {
  const [validated, setValidated] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const postNewsLetter = async (payload) => {
    console.log("funziono?")
    try {
      const response = await fetch("http://localhost:8080/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log("dati inviati correttamente", responseData);
        setResponseMessage("Dati inviati correttamente"); // Imposta il messaggio di risposta
      } else {
        console.log("c'è stato un problema");
        setResponseMessage("C'è stato un problema nell'invio dei dati"); // Imposta il messaggio di risposta in caso di errore
      }
    } catch (error) {
      console.log(error, "problemone");
      setResponseMessage("Si è verificato un errore durante l'invio dei dati"); // Imposta il messaggio di risposta in caso di errore
    }
  };

const handleSubmit = async (event) => {
  event.preventDefault();
  event.stopPropagation();

  const form = event.currentTarget;
  if (form.checkValidity() === false) {
    setValidated(true); // Imposta la validazione del modulo su true per mostrare gli errori di validazione
    return;
  }

  const formData = new FormData(form);
  const payload = {
    nome: formData.get("nome"),
    cognome: formData.get("cognome"),
    email: formData.get("email"),
    consensoPrivacy: formData.get("consensoPrivacy") === "on",
  };

  await postNewsLetter(payload);

  setValidated(false); // Resetta la validazione del modulo dopo l'invio
};


  return   (
    <div style={{width:"fit-content", display:"flex", flexDirection:"column", alignItems:"center"}}>
      <h1>RIMANIAMO IN CONTATTO</h1>
      <p>iscriviti alla newsletter per ricevere costanti aggiornamenti riguardanti i nostri prodotti</p>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          
          <Form.Control
            type="text"
            placeholder="Inserisci il tuo nome"
            name="nome" // Aggiungi l'attributo name
            required // Aggiungi l'attributo required per la validazione
          />
          <Form.Control.Feedback type="invalid">
            Campo obbligatorio
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSurname">
          
          <Form.Control
            type="text"
            placeholder="Inserisci il tuo cognome"
            name="cognome" // Aggiungi l'attributo name
            required // Aggiungi l'attributo required per la validazione
          />
          <Form.Control.Feedback type="invalid">
            Campo obbligatorio
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          
          <Form.Control
            type="email"
            placeholder="Inserisci la tua E-Mail"
            name="email" // Aggiungi l'attributo name
            required // Aggiungi l'attributo required per la validazione
          />
          <Form.Control.Feedback type="invalid">
            Campo obbligatorio
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Autorizzo il trattamento dei miei dati personali, ai sensi del D. lgs. 196 del 30 giugno 2003"
            name="consensoPrivacy" // Aggiungi l'attributo name
            required // Aggiungi l'attributo required per la validazione
          />
          <Form.Control.Feedback type="invalid">
            Campo obbligatorio
          </Form.Control.Feedback>
        </Form.Group>

        <Button className="redButton" type="submit">
  Invia modulo
</Button>
      </Form>

    
    </div>
);
   
 
};

export default NewsLetterUser;
