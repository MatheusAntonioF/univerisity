import React, { useContext } from 'react';

import Context from '../../components/Layout/Provider';

import Table from '../../components/Table';

import CreateModal from './Modals/CreateModal';

const Students: React.FC = () => {
  const { openModal, setOpenModal } = useContext(Context);

  return (
    <>
      <Table
        title="Estudantes"
        head={['ID', 'Nome', 'Email', 'Criado em']}
        body={[
          ['ID', 'Matheus', 'matheusantoniof@gmail.com', 'Criado em'],
          ['ID', 'Nome', 'Email', 'Criado em'],
        ]}
      />
      {openModal && <CreateModal setOpenModal={setOpenModal} />}
    </>
  );
};

export default Students;
