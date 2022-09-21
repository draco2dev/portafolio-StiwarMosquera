// importacion de los estilos
import "./index.css";

import btnWhastpps from "./Components/btnWhastpps";

// importacion del componente navbar
import Navbar from "./Pages/Navbar";
import Home from "./Pages/Home";

import About from "./Pages/About";
import Portafolio from "./Pages/Portafolio";
import Experiencia from "./Pages/Experiencia";

import Footer from "./Pages/Footer";




function App() {
  return (
    <div>
      <btnWhastpps />
      <Navbar />
      <Home />
      <About />
      <Experiencia />
      <Portafolio />
      
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
