import React, { useState } from "react";
import Site from "./Site";
import "./PhoenixConfigStyle.css";

const PhoenixConfig = ({ updateView }) => {
  const [siteList, setSiteList] = useState([]);
  const [newSite, setNewSite] = useState("");
  const handleChange = (e) => {
    setNewSite(e.target.value);
  };
  const addSite = () => {
    const site = {
      id: siteList.length === 0 ? 1 : siteList[siteList.length - 1].id + 1,
      siteName: newSite,
    };
    setSiteList([...siteList, site]);
  };
  const deleteSite = (id) => {
    setSiteList(siteList.filter((site) => site.id !== id));
  };

  return (
    <div className="phoenix-config-container">
      <div>
        <h2>PhoenixConfig Page</h2>
        <button onClick={() => updateView("mapbase")}>Back to mapbase</button>
      </div>
      <br />
      <div>
        <h4>ALL SITES</h4>
        <input
          type="text"
          placeholder="Type a site name.."
          onChange={handleChange}
        />
        <button onClick={addSite}>Add A Site</button>
        <div>
          {siteList.map((site) => {
            return (
              <div key={site.id}>
                <Site
                  siteName={site.siteName}
                  id={site.id}
                  deleteSite={deleteSite}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PhoenixConfig;
