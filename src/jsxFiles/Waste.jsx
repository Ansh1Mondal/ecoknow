import React, { useState } from "react";
import "../cssFiles/Waste.css";
import Msell from "../jsxFiles/Msell";
import Mbuy from "../jsxFiles/Mbuy";

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

  return (
    <>
      <div className="Acontainer">
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
            <button className="Abuybtn">
              <img
                id="Auserpic"
                alt="userpic"
                src={require("../pics/user.png")}
              />{" "}
              RECYCLE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
