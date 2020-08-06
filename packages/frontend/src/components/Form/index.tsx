import React from 'react';

import { FormComponent } from './styles';

const Form: React.FC = ({ children }) => {
  return <FormComponent>{children}</FormComponent>;
};

export default Form;
