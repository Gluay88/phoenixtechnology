import React from "react";
import EditIcon from "../../assets/edit-icon.svg";
import DeleteIcon from "../../assets/delete-icon.svg";

const Site = ({ siteName, id, deleteSite }) => {
  return (
    <div className="create-site-container">
      <div className="site-name-content">
        <a href="#">{siteName} &#x25B6;</a>
      </div>
      <div>
        <button>
          <img src={EditIcon} alt="edit-icon" />
        </button>
        <button onClick={() => deleteSite(id)}>
          <img src={DeleteIcon} alt="delete-icon" />
        </button>
      </div>
    </div>
  );
};

export default Site;
