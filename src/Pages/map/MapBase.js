import React from "react";
import ReactMapGL from "react-map-gl";
import "./MapbaseStyle.css";

const MapBase = ({ updateView }) => {
  return (
    <div className="mapbase-container">
      <div>
        <button onClick={() => updateView("phoenixConfig")}>
          Site Configuration
        </button>
      </div>
      <ReactMapGL
        initialViewState={{
          longitude: -71.057083,
          latitude: 42.361145,
          zoom: 12,
        }}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/satellite-v9"
      >
        markers here..
      </ReactMapGL>
    </div>
  );
};

export default MapBase;
