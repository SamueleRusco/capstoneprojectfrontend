import { useEffect, useState } from "react";

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
    <div
      style={{
        backgroundColor: "grey",
        color: "white",
      }}
    >
      sto fetchando
      {playlist.items
        ? playlist.items.map((element) => (
            <p key={element.id}>{element.name}</p>
          ))
        : null}
    </div>
  );
};
export default SpotifyFetch;
