import { useSelector } from "react-redux";
import NavBar from "../../components/NavBar/NavBar";
import NewsLetter from "../../components/NewsLetter/NewsLetter"
import NewsLetterUser from "../../components/NewsLetter/NewsLetterUser"


const NewsLetterPage = () => {
const role = useSelector((state) => state.register.user[0].role);

let content;

if (role === "ROLE_ADMIN") {
    content = <NewsLetter/>;
  } else {
    content =  <NewsLetterUser/>;
  } 


    return (<div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <NavBar></NavBar>
       {content}
      </div>)
}

export default NewsLetterPage;