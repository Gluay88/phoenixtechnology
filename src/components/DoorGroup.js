import React from "react";
import "./DoorGroup.css";

const DoorGroup = () => {
  return (
    <div className="door-group-container">
      <div className="door-group-btn">
        <button>
          DOOR GROUP <span>&#9660;</span>
        </button>
      </div>
      <div className="door-group-status-btn">
        <button>LOCK</button>
        <button>UNLOCK</button>
        <button>NORMAL</button>
      </div>
    </div>
  );
};

export default DoorGroup;
