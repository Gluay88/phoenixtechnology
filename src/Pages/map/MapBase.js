import React from "react";
import Map from "react-map-gl";
import GeocoderControl from "./geocoder-control.tsx";
import "./MapbaseStyle.css";

const MapBase = ({ updateView }) => {
  return (
    <div className="mapbase-container">
      <div>
        <button onClick={() => updateView("phoenixConfig")}>
          Site Configuration
        </button>
      </div>
      <div
        style={{
          width: "100%",
          height: "100vh",
        }}
      >
        <Map
          initialViewState={{
            longitude: -71.057083,
            latitude: 42.361145,
            zoom: 12,
          }}
          mapStyle="mapbox://styles/mapbox/satellite-v9"
          mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        >
          <GeocoderControl
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            position="top-right"
            className="mapboxgl-ctrl-top-right"
            placeholder="Search location..."
          />
        </Map>
      </div>
    </div>
  );
};

export default MapBase;
