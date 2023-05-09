import React from "react";
import { Button } from "@mui/material";
import "../cssFiles/Contactus.css";
import emailjs from "emailjs-com";

export default function Contact(props) {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_vyzxyzp",
        "template_gyp9hgw",
        e.target,
        "5Z_eSsMNmETzCY3aX"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <>
      <div className="Rcontainer" id="RContact">
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
            <Button>Contact Us</Button>
          </div>
        </div>

        <div className="Rcontactusbox">
          <div className="Rintcontactbox">
            <div>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="Rcontnamebox"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                className="Rcontemailbox"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                className="Rcontsubbox"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                name="message"
                className="Rcontmsgbox"
              ></textarea>
            </div>
            <div className="send-btn">
              <input
                type="submit"
                className="btn btn-info"
                value="Send Message"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
