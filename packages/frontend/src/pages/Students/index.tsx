import React from 'react';

import Table from '../../components/Table';

const Students: React.FC = () => {
  // const { isActive, setHandleActiveButtont } = useContext(Context);

  return (
    <Table
      title="Estudantes"
      head={['ID', 'Nome', 'Email', 'Criado em']}
      body={[
        ['ID', 'Matheus', 'matheusantoniof@gmail.com', 'Criado em'],
        ['ID', 'Nome', 'Email', 'Criado em'],
      ]}
    />
  );
};

export default Students;
