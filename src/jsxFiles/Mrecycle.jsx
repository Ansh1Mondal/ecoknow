import ReactModal from "react-modal";
import "../cssFiles/Msell.css";
import "../cssFiles/Mrecycle.css";
// import { TextField } from "@mui/material";

function Mrecycle({ isOpen, onClose }) {
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
          <h1>RECYCLE</h1>
        </div>
        <div className="AMinput2">
          <input type="text" placeholder="Company Name" className="Ainputbox" />
          <input type="text" placeholder="Address" className="Ainputbox" />
          <div className="Acategory">
            <b>Categories:</b>
            <div>
              <input
                type="checkbox"
                name="check-1"
                value="check-1"
                id="check-1"
              />
              <label for="check-1">Metal</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="check-2"
                value="check-2"
                id="check-2"
              />
              <label for="check-2">Printed-Board</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="check-3"
                value="check-3"
                id="check-3"
              />
              <label for="check-3">Plastic</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="check-4"
                value="check-4"
                id="check-4"
              />
              <label for="check-4">Cables</label>
            </div>
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

export default Mrecycle;
