import React, { useState } from "react";
import "../cssFiles/Waste.css";
import { Button } from "@mui/material";
import Msell from "../jsxFiles/Msell";
import Mbuy from "../jsxFiles/Mbuy";
import Mrecycle from "./Mrecycle";

export default function Waste() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const [modalIsOpenn, setModalIsOpenn] = useState(false);

  const handleOpenModal2 = () => {
    setModalIsOpenn(true);
  };

  const handleCloseModal2 = () => {
    setModalIsOpenn(false);
  };

  const [modalIsOpenna, setModalIsOpenna] = useState(false);

  const handleOpenModal4 = () => {
    setModalIsOpenna(true);
  };

  const handleCloseModal4 = () => {
    setModalIsOpenna(false);
  };

  return (
    <>
      <div className="Acontainer" id="AWaste">
        <div className="Rnavbar">
          <div className="Rnavimg">
            <a href="#">
              <img
                src={require("../pics/logoEco.png")}
                alt="ecoknow"
                className="Rlogo"
              />
            </a>
          </div>
          <div className="Rnavbtns">
            <Button
              onClick={() => {
                document.getElementById("PAbout").scrollIntoView();
              }}
            >
              About Us
            </Button>
            <Button>Waste Management</Button>
            <Button
              onClick={() => {
                document.getElementById("RTransport").scrollIntoView();
              }}
            >
              Transportation
            </Button>
            <Button
              onClick={() => {
                document.getElementById("RContact").scrollIntoView();
              }}
            >
              Contact us
            </Button>
          </div>
        </div>
        <div className="Aheading">
          <h1>E- Waste Management</h1>
          <p>
            Go green by recycling electronic products here. You can buy or sell
            any electronic product.{" "}
          </p>
        </div>
        <div className="Abody">
          <div className="Asell">
            <div className="Asellbox">
              <button className="Asellbtn" onClick={handleOpenModal}>
                <img
                  id="Auserpic"
                  alt="userpic"
                  src={require("../pics/user.png")}
                />
                SELL
              </button>
              {/* ##### */}
              <Msell isOpen={modalIsOpen} onClose={handleCloseModal} />
              {/* ##### */}
            </div>
          </div>
          <div className="Abuy">
            <button className="Abuybtn" onClick={handleOpenModal2}>
              <img
                id="Auserpic"
                alt="userpic"
                src={require("../pics/user.png")}
              />{" "}
              BUY
            </button>
            <Mbuy isOpen={modalIsOpenn} onClose={handleCloseModal2} />
          </div>
          <div className="Abuy">
            <button className="Abuybtn" onClick={handleOpenModal4}>
              <img
                id="Auserpic"
                alt="userpic"
                src={require("../pics/user.png")}
              />{" "}
              RECYCLE
            </button>
            <Mrecycle isOpen={modalIsOpenna} onClose={handleCloseModal4} />
          </div>
        </div>
      </div>
    </>
  );
}
