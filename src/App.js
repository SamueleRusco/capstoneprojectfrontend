import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import Register from "./components/Register/Register";
import Home from "./pages/Home";

function App() {
  /* const users = useSelector((state) => state.user);*/
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
