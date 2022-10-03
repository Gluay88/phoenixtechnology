import React, { useState } from "react";
import ReactMapGL from "react-map-gl";

const Map = () => {
  // const REACT_APP_MAPBOX_TOKEN =
  //   "pk.eyJ1IjoiZ2x1YXkyMCIsImEiOiJjbDZlZDlid3owOTBrM2twaGR1NTU5N3lpIn0.npHpuRhmKKymUvyJp6kF7g";
  const [viewport, setViewport] = useState({
    latitude: 35.1067,
    longitude: -106.6291,
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
        {...viewport}
        mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/mapbox/satellite-v9"
      >
        markers here..
      </ReactMapGL>
    </div>
  );
};

export default Map;
