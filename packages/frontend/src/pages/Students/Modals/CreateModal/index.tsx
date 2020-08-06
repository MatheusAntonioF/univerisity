import React from 'react';

import Modal from '../../../../components/Modal';
import Form from '../../../../components/Form';
import Input from '../../../../components/Form/Input';

interface IProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateModal: React.FC<IProps> = ({ setOpenModal }) => {
  return (
    <Modal color="secondary" setShowModal={setOpenModal}>
      <Form>
        <Input />
      </Form>
    </Modal>
  );
};

export default CreateModal;
