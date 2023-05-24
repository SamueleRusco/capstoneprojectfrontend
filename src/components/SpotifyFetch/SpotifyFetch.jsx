import { useEffect, useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const SpotifyFetch = () => {
  const [accessToken, setAccessToken] = useState({});
  const [playlist, setPlaylist] = useState({});

  useEffect(() => {
    tokenFetch();
  }, []);

  useEffect(() => {
    if (accessToken.access_token) {
      searchSpotify();
    }
  }, [accessToken]);

  const tokenFetch = async () => {
    var authParameters = {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body:
        "grant_type=client_credentials&client_id=" +
        process.env.REACT_APP_CLIENT_ID +
        "&client_secret=" +
        process.env.REACT_APP_CLIENT_SECRET,
    };

    try {
      const response = await fetch(
        "https://accounts.spotify.com/api/token",
        authParameters
      );
      if (response.ok) {
        const data = await response.json();
        setAccessToken(data);
        console.log(data)
      } else {
        console.log("Errore nella risposta dalla richiesta API");
      }
    } catch (err) {
      console.log("Si è verificato un errore durante la richiesta", err);
    }
  };

  const searchSpotify = async () => {
    console.log("Ricerca Spotify");
    let searchParameters = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken.access_token,
      },
    };
    try {
      const response = await fetch(
        "https://api.spotify.com/v1/users/31kjw2awjzxglnxw7y42geuj4cwe/playlists?offset=0&limit=50",
        searchParameters
      );
      if (response.ok) {
        const data = await response.json();
        setPlaylist(data);
        console.log(data);
      } else if (response.status === 401) {
        await tokenFetch();
      } else {
        console.log("Errore nella risposta dalla richiesta API");
      }
    } catch (err) {
      console.log("Si è verificato un errore durante la richiesta", err);
    }
  };
  return (
    <div className="row d-flex"
      style={{
        backgroundColor: "black",
      
      }}
    >
      {playlist.items
        ? playlist.items.map((element) => (
            <div className="col-6 col-md-4 col-lg-3" style={{ backgroundColor:"black",}} key={element.id}>
              <Card
             
                style={{
                  display: "flex",
                  flexDirection:"column",
                  justifyContent: "start",
                  alignItems: "start",
                  backgroundColor:"black",
                  borderRadius:"0",
                  margin:"10px",
                 
                  

                }}
              >
                <Card.Img
                  variant="top"
                  style={{ width: "150px", borderRadius:"0" }}
                  src={element.images[0].url}
                />
                <Card.Body style={{padding:"0"}}>
                  <Card.Title style={{ textAlign:"start", marginTop:"10px"}}>{element.name}</Card.Title>
                  {/* <Card.Text>{element.description}</Card.Text> */}
                  {/* <Link to={element.external_urls.spotify}>
                    Ascoltami su Spotify
                  </Link> */}
                </Card.Body>
              </Card>
            </div>
          ))
        : null}
    </div>
  );
};
export default SpotifyFetch;
