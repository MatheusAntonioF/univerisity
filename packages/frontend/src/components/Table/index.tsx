import React from 'react';

import { Container, Title, TableComponent, THead, TBody } from './styles';

interface IProps {
  head: string[];
  body: string[][];
  title?: string;
}

const Table: React.FC<IProps> = ({ title = 'Título', head, body }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <TableComponent>
        <THead>
          <tr>
            {head.map(content => (
              <th key={content}>{content}</th>
            ))}
          </tr>
        </THead>
        <TBody>
          {body.map(row => (
            <tr key={Math.random()}>
              {row.map(column => (
                <td>{column}</td>
              ))}
            </tr>
          ))}
        </TBody>
      </TableComponent>
    </Container>
  );
};

export default Table;
