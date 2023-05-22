const NewsLetterUser = () => {
  const [validated, setValidated] = useState(false);

  const postNewsLetter = async (payload) => {
    try {
      const response = await fetch("http://localhost:8080/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log("dati inviati correttamente", response);
      } else {
        console.log("c'è stato un problema");
      }
    } catch (error) {
      console.log(error, "problemone");
      // Si è verificato un errore durante la richiesta
      // Aggiungi qui le azioni da eseguire in caso di errore
    }
  };

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

    await postNewsLetter(payload);

    setValidated(true);
  };
};

export default NewsLetterUser;
