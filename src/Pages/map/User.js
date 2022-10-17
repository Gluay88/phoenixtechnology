import React, { useState } from "react";
import EditIcon from "../../assets/edit-icon.svg";
import DeleteIcon from "../../assets/delete-icon.svg";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const User = ({ userName, id, deleteUser }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="create-user-container">
      <div className="user-name-btn">
        <a href="#">{userName} &#x25B6;</a>
      </div>

      <div>
        <button>
          <img src={EditIcon} alt="edit-icon" className="edit-svg" />
        </button>
        {/* <button onClick={() => deleteUser(id)}>
          <img src={DeleteIcon} alt="delete-icon" />
        </button> */}
        <Button onClick={handleShow} className="delete-site-btn">
          <img src={DeleteIcon} alt="delete-icon" width="14px" />
        </Button>

        <Modal show={show} onHide={handleClose} className="delete-site-popup">
          <Modal.Header closeButton>
            <Modal.Title>Are you ABSOLUTELY sure?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>Please type in the name of the user to confirm</p>
            <input type="text" placeholder="Type user name.." />
            <br />
            <br />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => deleteUser(id)}>DELETE USER</Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default User;
