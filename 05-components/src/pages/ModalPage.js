import Modal from '../components/Modal';
import Button from '../components/Button';
import { useState } from 'react';

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button
        onClick={handleClose}
        primary
      >
        Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal
      onClose={handleClose}
      actionBar={actionBar}
    >
      Do you accept the terms and conditions?
    </Modal>
  );

  return (
    <div>
      <Button
        primary
        onClick={handleButtonClick}
      >
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
