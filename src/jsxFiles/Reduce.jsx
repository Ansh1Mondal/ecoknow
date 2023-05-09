import React from "react";
import "../cssFiles/Reduce.css";
import { Button } from "@mui/material";
export default function Reduce() {
  return (
    <>
      <div className="Wcontainer" id="WasteR">
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
            <Button
              onClick={() => {
                document.getElementById("AWaste").scrollIntoView();
              }}
            >
              Waste Management
            </Button>
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
        <div className="Wheading">
          <h1>Reduce E-Waste</h1>
        </div>
        <div className="Wbody">
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                Tip 1:<br></br>Use rechargable batteries
              </div>
              <div className="flip-card-back">
                Tip 2:<br></br>Buy electronics that can be easily upgraded
              </div>
            </div>
          </div>
          <div className="Wlogos">
            <a href="https://mega.io">
              <img
                src={require("../pics/MegaLogo.png")}
                className="mega"
                alt="Mega Logo"
              />
            </a>
            <a href="https://cloud.google.com">
              <img
                src={require("../pics/GoogleCloud.png")}
                className="google"
                alt="Mega Logo"
              />
            </a>
          </div>
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                Tip 3:<br></br>Use open-source software
              </div>
              <div className="flip-card-back">
                Tip 4:<br></br>Recycle electronics properly
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
