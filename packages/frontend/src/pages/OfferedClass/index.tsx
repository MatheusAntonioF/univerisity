import React from 'react';
import Table from '../../components/Table';

// import { Container } from './styles';

const OfferedClass: React.FC = () => {
  return (
    <Table
      title="Classes"
      head={['ID', 'Nome', 'Email', 'Criado em']}
      body={[
        ['ID', 'Matheus', 'matheusantoniof@gmail.com', 'Criado em'],
        ['ID', 'Nome', 'Email', 'Criado em'],
      ]}
    />
  );
};

export default OfferedClass;
