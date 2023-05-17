import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ImgFetch = () => {
  const bearerToken = useSelector(
    (state) => state.register.user[0].bearerToken
  );
  const [file, setFile] = useState();
  const [fileGet, setFileGet] = useState();

  const uploadImage = async (formData) => {
    var myHeaders = new Headers();

    myHeaders.append("Authorization", "Bearer " + bearerToken);
    myHeaders.append("Access-Control-Allow-Origin", "*");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formData,
      redirect: "follow",
    };

    fetch("http://localhost:8080/api/images", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };

  const getImage = async () => {
    try {
      const response = await fetch(
        "http://localhost:8080/api/images/listaimmagini"
      );
      const data = await response.json();
      console.log(data, "immagine json");
      setFileGet(data);
    } catch (error) {
      console.error("Errore durante la richiesta GET:", error);
    }
  };

  const deleteImg = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/images/immagine/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + bearerToken,
          },
        }
      );
      if (response.ok) {
        console.log(`Immagine con ID ${id} eliminata con successo.`);
        // Aggiorna la lista delle immagini
        getImage();
      } else {
        console.error(
          `Errore durante la cancellazione dell'immagine con ID ${id}.`
        );
      }
    } catch (error) {
      console.error("Errore durante la richiesta DELETE:", error);
    }
  };

  useEffect(() => {
    getImage();
  }, []);

  function handleFile(event) {
    setFile(event.target.files[0]);
    //console.log(event.target.files[0]);
  }

  function handleUpload(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    uploadImage(formData);
    console.log("funziono?", file);
    //console.log(formData);
  }

  return (
    <div
      style={{
        backgroundColor: "green",
      }}
    >
      <p>mi si vede :</p>
      <form onSubmit={handleUpload}>
        <input
          type="file"
          name="file"
          accept="image/png, image/jpeg"
          onChange={handleFile}
        />
        <button>upload</button>
      </form>
      {fileGet &&
        fileGet.map((image) => (
          <div>
            <img
              key={image.id}
              src={`data:image/png;base64,${image.imageData}`}
              alt={image.fileName}
            />
            <button onClick={() => deleteImg(image.id)}>Elimina</button>
          </div>
        ))}
    </div>
  );
};

export default ImgFetch;
