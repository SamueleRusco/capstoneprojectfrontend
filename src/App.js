import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import Register from "./components/Register/Register";
import LogIn from "./components/logIn/LogIn";
import Playlist from "./pages/Playlist/Playlist";
import Home from "./pages/Home/Home";
import Event from "./pages/Eventi/Event";
import NewsLetterPage from "./pages/Newsletter/NewsLetterPage";
import Contacts from "./pages/Contacts/Contacts";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/playlist" element={<Playlist/>}/>
        <Route path="/events" element={<Event/>}/>
        <Route path="/newsletter" element={<NewsLetterPage/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
