import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import "./NavMap.css";

const NavMap = () => {
  return (
    <>
      <div className="dropdown-map-menu">
        <Dropdown variant="success">
          <Dropdown.Toggle variant="success" className="dropdown-toggle">
            HOME
          </Dropdown.Toggle>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="success" className="dropdown-toggle">
            SETTINGS <span>&#9660;</span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="sub-dropdown-menu">
            <Dropdown.Item href="#">MAP SETTING</Dropdown.Item>
            <Dropdown.Item href="#">SITE SETTING</Dropdown.Item>
            <Dropdown.Item href="#">ADAPTIVE RESPONSE</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="success" className="dropdown-toggle">
            SUMMARIES
          </Dropdown.Toggle>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="success" className="dropdown-toggle">
            UTILITIES <span>&#9660;</span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="sub-dropdown-menu">
            <Dropdown.Item href="#">CONFIGURATION</Dropdown.Item>
            <Dropdown.Item href="#">PING GATEWAYS</Dropdown.Item>
            <Dropdown.Item href="#">
              HEALTH MONITORS CONFIGURATION
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown>
          <Dropdown.Toggle variant="success" className="dropdown-toggle">
            HELP <span>&#9660;</span>
          </Dropdown.Toggle>
          <Dropdown.Menu className="sub-dropdown-menu">
            <Dropdown.Item href="#">SITE CHAT</Dropdown.Item>
            <Dropdown.Item href="#">FAQs</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  );
};

export default NavMap;
