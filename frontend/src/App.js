
import Home from "./pages/Home";
import About from "./pages/About";
import Composant from "./pages/Composant";
import Error from "./pages/Error";
import Fichelogement from "./pages/Fichelogement";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Composant" element={<Composant/>} />
        <Route path="/Fichelogement" element={<Fichelogement/>} />
        <Route path="/*" element={<Error/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
