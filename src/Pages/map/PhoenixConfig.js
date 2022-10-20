import React, { useState, useEffect } from "react";
import NavMain from "../../components/NavMain";
import Site from "./Site";
import "./PhoenixConfigStyle.css";
import CreateUser from "./CreateUser";

const listFromLocalStorage = JSON.parse(
  localStorage.getItem("site-list") || "[]"
);

const PhoenixConfig = ({ updateView }) => {
  const [siteList, setSiteList] = useState(listFromLocalStorage);
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

  useEffect(() => {
    localStorage.setItem("site-list", JSON.stringify(siteList));
  }, [siteList]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewSite("");
  };
  return (
    <div>
      <NavMain updateView={updateView} />
      <div className="phoenix-config-container">
        <h2>Phoenix - Site Configuration</h2>
        <button onClick={() => updateView("mapbase")}>Back to mapbase</button>
      </div>
      <br />
      <div>
        <h4>ALL SITES</h4>
        <form onSubmit={handleSubmit} className="form-create-site">
          <input
            type="text"
            placeholder="Enter a site name.."
            onChange={handleChange}
            value={newSite}
            required
          />
          {newSite ? (
            <button onClick={addSite}>Add A Site</button>
          ) : (
            <button className="disable-btn" title="Please enter a site name">
              Add A Site
            </button>
          )}
        </form>
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
        <br />
        <br />

        <CreateUser />
        <br />
        <br />
        <br />
      </div>
    </div>
  );
};

export default PhoenixConfig;
