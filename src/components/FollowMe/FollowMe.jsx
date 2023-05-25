import React, { useState } from "react";
import QRCode from "qrcode.react";
import { Button, Modal } from "react-bootstrap";
import { Box, Typography } from "@mui/material";

const FollowMe = () => {
  const [showModal, setShowModal] = useState(false);

  const fixedLink = "https://www.jakoless.com/";

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };



 

  return (
    <div>
      <li className="linkTo" onClick={handleButtonClick}>
        FOLLOW ME
      </li>

   
      <Modal show={showModal} size="sm" onHide={handleCloseModal} className="modalFollow">
        
        <Modal.Body  >
          <QRCode value={fixedLink} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FollowMe;
