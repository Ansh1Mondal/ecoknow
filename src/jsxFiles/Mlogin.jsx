import ReactModal from "react-modal";
import "../cssFiles/Msell.css";
// import { TextField } from "@mui/material";

function Mlogin({ isOpen, onClose }) {
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
          <h1>LOGIN</h1>
        </div>
        <div className="AMinput">
          <input type="text" placeholder="Name" className="Ainputbox" />
          <input
            type="number"
            placeholder="Phone Number"
            className="Ainputbox"
          />
          <input type="email" placeholder="Email" className="Ainputbox" />
          <select placeholder="Product category" className="Ainputbox">
            <option value="" disabled selected>
              Gender
            </option>
            <option value="volvo">Male</option>
            <option value="saab">Female</option>
            <option value="saab">Others</option>
          </select>{" "}
        </div>
        <div className="AMsubmit"></div>
      </div>
      <button onClick={onClose} className="ASub">
        PROCEED
      </button>
    </ReactModal>
  );
}

export default Mlogin;
