import React, { useState } from "react";
import MapBase from "./MapBase";
import PhoenixConfig from "./PhoenixConfig";

const MapMain = () => {
  const [show, setShow] = useState("mapbase");
  const updateView = (view) => {
    if (view === "mapbase") {
      setShow("mapbase");
    } else {
      setShow("phoenixConfig");
    }
  };
  return (
    <>
      {show === "mapbase" ? (
        <MapBase updateView={updateView} />
      ) : (
        <PhoenixConfig updateView={updateView} />
      )}
    </>
  );
};

export default MapMain;
