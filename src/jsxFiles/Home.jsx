import React from "react";
import "../cssFiles/Home.css";
import Logo from "../pics/logoEco.png";

export default function Home() {
  return (
    <>
      <div className="Pcontainer">
        <div className="Pnavbar">
            Navbar
        </div>
        <div className="Pbody">
          <div className="Pleft">
            <div className="Ptext">EcoKnow</div>
            <button className="Pbutton">Let's Explore!</button>
          </div>
          <div className="Pright">
            <img src={Logo} alt="Logo" className="Plogo"/>
          </div>
        </div>
      </div>
    </>
  );
}
