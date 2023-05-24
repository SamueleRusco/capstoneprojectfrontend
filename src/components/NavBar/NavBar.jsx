import { Link } from "react-router-dom"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import PersonIcon from '@mui/icons-material/Person';

const NavBar = () => {
    return(
    <div className="d-flex justify-content-between m-3 pb-3" style={{width:"90vw", borderBottom:"1px solid white"}} >
<Link  to="/" className="d-flex align-items-center goHome"><ArrowBackIosNewIcon style={{color:"white", animation:"none", marginRight:"15px"}}/> HOME</Link>
<Link to="/login" className="linkTo" ><PersonIcon style={{color:"white", animation:"none", marginRight:"15px"}}/></Link>
    </div>
    )
}

export default NavBar