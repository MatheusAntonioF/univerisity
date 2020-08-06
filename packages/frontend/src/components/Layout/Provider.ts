import React, { createContext } from 'react';

interface IProps {
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default createContext<IProps>({
  openModal: false,
  setOpenModal: (): void => {},
});
