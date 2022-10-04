import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 43.3186,
    longitude: 11.3305,
    zoom: 15,
    width: "100vw",
    height: "100vh",
  });
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
      }}
    >
      <ReactMapGL
        // {...viewport}
        initialViewState={{
          longitude: -71.057083,
          latitude: 42.361145,
          zoom: 12,
        }}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/satellite-v9"
        // onViewportChange={(viewport) => {
        //   setViewport(viewport);
        // }}
      >
        markers here..
      </ReactMapGL>
    </div>
  );
};

export default Map;
