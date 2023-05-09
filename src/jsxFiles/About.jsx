import React from "react";
import "../cssFiles/About.css";
import Logo from "../pics/logoEco.png";

export default function About() {
  return (
    <>
      <div className="Pcontainer2">
        <div className="Pnavbar">Navbar</div>
        <div className="Pbody2">
          {/* <div className="Pbglogo"> */}
          <img src={Logo} alt="Logo" className="Pbglogo" />
          {/* </div> */}
          <div className="Pheading">About Us</div>
          <div className="Ptext">
            EcoKnow aims to provide a sustainable approach to handle the E-waste
            discarded by people. You can take care of your E-waste by 3R
            management approach. You can sign up and access our features and
            contribute to the green city.<br></br>
            <b>Reduce . Reuse . Recycle .</b><br></br> Electric vehicles are very
            beneficial for environment as they give zero emmision. This makes
            them a sustainable option and a genuine alternative to other
            vehicles. Our facilities include providing the location of
            nearby E-vehicle stations, charging stations and also latest technology news.
            <div className="Pline"><b>Sign in to know more!</b></div>
          </div>
        </div>
      </div>
    </>
  );
}
