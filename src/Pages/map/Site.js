import React, { useState } from "react";
import EditIcon from "../../assets/edit-icon.svg";
import DeleteIcon from "../../assets/delete-icon.svg";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Site = ({ siteName, id, deleteSite }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className="create-site-container">
        <div className="site-name-content">
          <a href="#">{siteName} &#x25B6;</a>
        </div>
        <div>
          <button>
            <img src={EditIcon} alt="edit-icon" />
          </button>
          {/* <button onClick={() => deleteSite(id)}>
            <img src={DeleteIcon} alt="delete-icon" width="14px" />
          </button> */}

          <Button onClick={handleShow} className="delete-site-btn">
            <img src={DeleteIcon} alt="delete-icon" width="14px" />
          </Button>

          <Modal show={show} onHide={handleClose} className="delete-site-popup">
            <Modal.Header closeButton>
              <Modal.Title>Are you ABSOLUTELY sure?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p>Please type in the name of the site to confirm</p>
              <input type="text" placeholder="Type site name.." />
              <br />
              <p>Everything associated to the site will be deleted</p>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => deleteSite(id)}>DELETE SITE</Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Site;
