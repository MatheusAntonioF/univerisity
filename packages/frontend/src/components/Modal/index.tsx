import React from 'react';

import { ModalComponent, DivBackground } from './styles';

export interface IProps {
  color: string;
  setShowModal?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<IProps> = ({ color, setShowModal, children }) => {
  return (
    <DivBackground>
      <ModalComponent color={color}>{children}</ModalComponent>
    </DivBackground>
  );
};

export default Modal;
