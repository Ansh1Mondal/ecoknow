// import logo from './logo.svg';
import "./App.css";
import Waste from "../src/jsxFiles/Waste";
import Home from "../src/jsxFiles/Home";
import About from "../src/jsxFiles/About";
import Contact from "./jsxFiles/Contactus";
import Transport from "./jsxFiles/Transport";
import Reduce from "./jsxFiles/Reduce";

function App() {
  return (
    <>
      <Home />
      <About />
      <Waste />
      <Transport />
      <Contact />
      <Reduce/>
    </>
  );
}

export default App;
