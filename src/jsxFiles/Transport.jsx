import "../cssFiles/Transport.css";
import { Button } from "@mui/material";
import { Loader } from "@googlemaps/js-api-loader";
import Map from "./Map";

function Transport() {
  const loader = new Loader({
    apiKey: "AIzaSyDCOurNZRxdDFUTPdK366u-nt3XO2JedGo",
    version: "weekly",
  });

  loader.load().then(() => {
    // Initialize the map
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
                  src={require("../pics/pic1.png")}
                  alt="pic1"
                  className="Rcardimg"
                />
                <div className="Rinthead">Daily fuel news:-</div>
                <div className="Rpara1">
                  About recommended fuels <br />
                  available in the market
                </div>
                <Button variant="outlined" className="Rnewsbutton">
                  Explore!
                </Button>
              </div>
              <div className="Rcard2">
                <img
                  src={require("../pics/pic2.png")}
                  alt="pic2"
                  className="Rcardimg"
                />
                <div className="Rinthead">Daily car news:-</div>
                <div className="Rpara2">
                  Daily news of cars and <br />
                  upcoming new models.
                </div>
                <Button variant="outlined" className="Rnewsbutton">
                  Explore!
                </Button>
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
