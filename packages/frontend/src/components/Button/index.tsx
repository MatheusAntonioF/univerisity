import React from 'react';

import { ButtonComponent } from './styles';

export interface IPropsButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  fontSize?: number;
}

const Button: React.FC<IPropsButton> = ({
  color,
  fontSize,
  children,
  ...rest
}) => {
  return (
    <ButtonComponent color={color} fontSize={fontSize} {...rest}>
      {children}
    </ButtonComponent>
  );
};

export default Button;
