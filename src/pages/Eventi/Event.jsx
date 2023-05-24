import { Link } from "react-router-dom";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PersonIcon from '@mui/icons-material/Person';
import NavBar from "../../components/NavBar/NavBar";
import { useSelector } from "react-redux";
import EventoAdmin from "../../components/Evento/EventoAdmin"
import EventoUser from "../../components/Evento/EventoUser"

const Event =()=>{
const role = useSelector((state) => state.register.user[0].role);

let content;

if (role === "ROLE_ADMIN") {
    content = <EventoAdmin/>;
  } else {
    content = <EventoUser/>;
  } 
    return (<div><NavBar/>
    <div>
        {content}
    </div>
    
    </div>)
}

export default Event;