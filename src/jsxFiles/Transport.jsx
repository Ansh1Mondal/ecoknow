import "../cssFiles/Transport.css";
import { Button } from "@mui/material";
import { Loader } from "@googlemaps/js-api-loader";
import Map from "./Map";
import News from "./News";
import News2 from "./News2";

function Transport() {
  const loader = new Loader({
    apiKey: "AIzaSyDCOurNZRxdDFUTPdK366u-nt3XO2JedGo",
    version: "weekly",
  });

  loader.load().then(() => {
    <Map />;
  });

  return (
    <div className="Rcontainer" id="RTransport">
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
          <Button>Transportation</Button>
          <Button
            onClick={() => {
              document.getElementById("RContact").scrollIntoView();
            }}
          >
            Contact us
          </Button>
        </div>
      </div>

      <div className="RmainBody">
        <div className="Rheading">E-Transportation</div>
        <div className="Rcards">
          <div className="Rfirstcard">
            <div className="Rinternalcard">
              <div className="Rcard1">
                <img
                  src={require("../pics/technology.png")}
                  alt="pic1"
                  className="Rcardimg"
                />
                <div className="Rinthead">Daily Tech news:-</div>
                <News />
              </div>
              <div className="Rcard2">
                <img
                  src={require("../pics/medical-report.png")}
                  alt="pic2"
                  className="Rcardimg"
                />
                <div className="Rinthead">Daily Health news:-</div>
                <News2 />
              </div>
            </div>
            <div className="Rloctextarea">
              <input
                type="text"
                id="name"
                name="Enter your location"
                placeholder="Enter your location"
                className="Rlocationtext"
              ></input>
            </div>
          </div>
          <div className="Rsecondcard">
            <div className="Rcard3">
              <div className="Rpara">Nearby Transportation services</div>
              <div className="Rapidiv">
                <Map />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transport;
