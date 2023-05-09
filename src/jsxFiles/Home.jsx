import React, { useState } from "react";
import "../cssFiles/Home.css";
import Logo from "../pics/logoEco.png";
import { Button } from "@mui/material";
import Mlogin from "./Mlogin";

export default function Home() {
  const [modalIsOpenr, setModalIsOpenr] = useState(false);

  const handleOpenModal3 = () => {
    setModalIsOpenr(true);
  };

  const handleCloseModal3 = () => {
    setModalIsOpenr(false);
  };

  return (
    <>
      <div className="Pcontainer" id="PHome">
        <div className="Pnavbar">
          <div className="Pnavimg">
            <a href="#">
              <img
                src={require("../pics/logoEco.png")}
                alt="ecoknow"
                className="Pnlogo"
              />
            </a>
          </div>
          <div className="Pnavbtns">
            <Button onClick={handleOpenModal3}>Login</Button>
            <Button>Register</Button>
          </div>
        </div>
        <div className="Pbody">
          <Mlogin isOpen={modalIsOpenr} onClose={handleCloseModal3} />

          <div className="Pleft">
            <div className="PStext">EcoKnow</div>
            <br />
            <div className="Ptag">
              <p>CLEAN CITY . GREEN CITY</p>
            </div>
            <br />
            <button
              className="Pbutton"
              onClick={() => {
                document.getElementById("AWaste").scrollIntoView();
              }}
            >
              Let's Explore!
            </button>
          </div>
          <div className="Pright">
            <img src={Logo} alt="Logo" className="Plogo" />
          </div>
        </div>
      </div>
    </>
  );
}
