import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

const Map = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
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

export default Map;
