import React from "react";
import EditIcon from "../../assets/edit-icon.svg";
import DeleteIcon from "../../assets/delete-icon.svg";

const User = ({ userName, id, deleteUser }) => {
  return (
    <div className="create-user-container">
      <div className="user-name-btn">
        <a href="#">{userName} &#x25B6;</a>
      </div>

      <div>
        <button>
          <img src={EditIcon} alt="edit-icon" className="edit-svg" />
        </button>
        <button onClick={() => deleteUser(id)}>
          <img src={DeleteIcon} alt="delete-icon" />
        </button>
      </div>
    </div>
  );
};

export default User;
