import ReactModal from "react-modal";
import "../cssFiles/Mbuy.css";
// import { TextField } from "@mui/material";

function Mbuy({ isOpen, onClose }) {
  return (
    <ReactModal
      className="AModalbox"
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Example Modal"
      style={{ overlay: { backgroundColor: "rgba(255, 255, 255, 0.500)" } }}
    >
      <div className="AMbody">
        <div className="AMheading">
          <h1>BUY</h1>
        </div>
        <div className="AMinput">
          <select placeholder="Product category" className="Ainputbox">
            <option value="" disabled selected>
              Select your option
            </option>
            <option value="volvo">Phone</option>
            <option value="saab">USB</option>
            <option value="fiat">Laptop</option>
            <option value="audi">Hardwares</option>
          </select>{" "}
          <input
            type="text"
            placeholder="Expected Price"
            className="Ainputbox"
          />
          <div className="Aopt1">
            <div className="Ao1">option 1</div>
            <div className="Ao2">option 2</div>
          </div>
          <div className="Aopt2">
            <div className="Ao3">option 3</div>
            <div className="Ao4">option 4</div>
          </div>
        </div>
        <div className="AMsubmit"></div>
      </div>
      <button onClick={onClose} className="ASub">
        PROCEED
      </button>
    </ReactModal>
  );
}

export default Mbuy;
