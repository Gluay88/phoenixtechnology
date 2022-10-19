import React from "react";
import "./SystemStatus.css";

const SystemStatus = () => {
  return (
    <div className="safe-status-btn">
      <div className="safebutton">
        <button>SAFE</button>
      </div>

      <div className="sub-safe-status-btn">
        <div>
          <button>310</button>
          <p>ENABLED</p>
        </div>

        <div>
          <button className="temporaryDisp">310</button>
          <p>HB STATUS</p>
        </div>

        <div>
          <button>✔</button>
          <p>NETWORK</p>
        </div>

        <div>
          <button>310</button>
          <p>BATTERY</p>
        </div>
      </div>
    </div>
  );
};

export default SystemStatus;
