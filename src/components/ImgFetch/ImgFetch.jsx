import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IMG_ID } from "../../actions/imgAction";

const ImgFetch = ({}) => {
  let idState = useSelector((state) => state.idImg.id);
  const bearerToken = useSelector(
    (state) => state.register.user[0].bearerToken
  );
  const [fileGet, setFileGet] = useState([]);
  const [file, setFile] = useState([]);
  const [idFoto, setIdFoto] = useState();

  const dispatch = useDispatch();

  const handleFile = (event) => {
    event.preventDefault();
    const file = event.target.files[0];
    setFile(file);
    idState = file.id;
  };

  useEffect(() => {
    imgDispatch();
  }, [idFoto]);

  const imgDispatch = () => {
    dispatch({
      type: IMG_ID,
      payload: {
        idFoto,
      },
    });
  };
  const uploadImage = async (formData) => {
    try {
      const response = await fetch("http://localhost:8080/api/images", {
        method: "POST",
        headers: { Authorization: `Bearer ${bearerToken}` },
        body: formData,
        redirect: "follow",
      });
      if (response.ok) {
        const data = await response.json();
        console.log("id immagine", data);

        dispatch({
          type: IMG_ID,
          payload: data,
        });

        console.log("Immagine caricata con successo.", data);
      } else {
        console.error("Errore durante il caricamento dell'immagine.");
      }
    } catch (error) {
      console.error("Errore durante la richiesta POST:", error);
    }
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
    //getImage();
  }, []);

  const handleUpload = (e) => {
    e.preventDefault();
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      uploadImage(formData);
      console.log("Caricamento immagine in corso", file);
    }
  };
  return (
    <div style={{ backgroundColor: "green" }}>
     
      <div>
        <input
          type="file"
          name="file"
          accept="image/png, image/jpeg"
          onChange={handleFile}
        />
        <button type="submit" onClick={handleUpload}>
          Carica
        </button>
      </div>
      {fileGet.map((image) => (
        <div key={image.id}>
          <img
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
