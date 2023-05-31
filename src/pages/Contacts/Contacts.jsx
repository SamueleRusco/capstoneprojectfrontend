import { Phone } from "@mui/icons-material";
import NavBar from "../../components/NavBar/NavBar";
import HomeIcon from '@mui/icons-material/Home';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Contacts = () => {

    return(<div className="d-flex flex-column align-items-center">
        <NavBar></NavBar>
        <p style={{ paddingBottom:"10px"}}>CONTACTS:</p>
       <div className="d-flex flex-column align-items-start" style={{borderBottom:"1px solid white", borderTop:"1px solid white", padding:"10px"}}>
        <p style={{paddingTop:"10px"}}><span style={{borderRadius:"50%", backgroundColor:"grey"}}><HomeIcon style={{animation:"none", paddingBottom:"5px"}}></HomeIcon></span> <span>Via Nino Bixio 14, Nerviano (MI) 20014</span></p>
        <p><span style={{borderRadius:"50%", backgroundColor:"grey"}}><MailOutlineIcon style={{animation:"none", paddingBottom:"5px"}}></MailOutlineIcon></span> <a href="mailto:samuele.rusco@gmail.com" style={{ textDecoration: 'none', color: 'inherit' }} target="blank"> samuele.rusco@gmail.com</a></p>
        <p><span style={{borderRadius:"50%", backgroundColor:"grey"}}><PhoneIcon style={{animation:"none", paddingBottom:"5px"}}></PhoneIcon></span> <span> +39 346/1463094</span></p>
                <p><span style={{borderRadius:"50%", backgroundColor:"grey"}}><LinkedInIcon style={{animation:"none", paddingBottom:"5px"}}></LinkedInIcon></span>  <a href="https://www.linkedin.com/in/samuele-rusco-6b324117a/" style={{ textDecoration: 'none', color: 'inherit' }} target="blank"> Samuele Rusco</a></p>

       </div>
        </div>)

}

export default Contacts;