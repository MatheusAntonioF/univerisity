import React, { createContext } from 'react';

interface IProps {
  isActive: boolean;
  setHandleActiveButton: React.Dispatch<React.SetStateAction<boolean>>;
}

export default createContext<IProps>({
  isActive: false,
  setHandleActiveButton: (): void => {},
});
