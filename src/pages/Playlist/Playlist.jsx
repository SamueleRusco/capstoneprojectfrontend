import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';
import SpotifyFetch from "../../components/SpotifyFetch/SpotifyFetch"
import { Row } from 'react-bootstrap';
import NavBar from '../../components/NavBar/NavBar';

const Playlist = () => {

    return(
    <div className="d-flex flex-column align-items-center">
        <NavBar></NavBar>
        <div style={{width:"90vw", textAlign:"end"}}>
            <p className="full" style={{fontSize:"2.5em", color:"grey"}}>PLAYLISTS</p>
        </div>

        <div className="d-flex flex-column align-items-center" style={{width:"100vw", backgroundColor:"black"}}>
            <SpotifyFetch/>
        </div>
    </div>)
}

export default Playlist;