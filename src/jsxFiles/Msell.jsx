import ReactModal from "react-modal";
import "../cssFiles/Msell.css";
// import { TextField } from "@mui/material";

function Msell({ isOpen, onClose }) {
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
          <h1>SELL</h1>
        </div>
        <div className="AMinput">
          <input type="text" placeholder="Product Name" className="Ainputbox" />
          <input
            type="text"
            placeholder="Purchase Year"
            className="Ainputbox"
          />
          <input
            type="text"
            placeholder="Expected Price"
            className="Ainputbox"
          />
          <input type="file" className="Afilebox" />
        </div>
        <div className="AMsubmit"></div>
      </div>
      <button onClick={onClose} className="ASub">
        PROCEED
      </button>
    </ReactModal>
  );
}

export default Msell;
