import React, { useState } from "react";
import QRCode from "qrcode.react";
import { Button, Modal } from "react-bootstrap";

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
      <Button variant="primary" onClick={handleButtonClick}>
        Follow Me
      </Button>
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>QR Code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <QRCode value={fixedLink} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default FollowMe;
