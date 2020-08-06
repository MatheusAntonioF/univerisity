import React from 'react';

import { InputComponent } from './styles';

type IProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<IProps> = () => {
  return <InputComponent />;
};

export default Input;
