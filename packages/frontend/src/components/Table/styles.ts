import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 20px;
`;

export const Title = styled.h3`
  margin-bottom: 25px;
  font-size: 28px;
  color: ${props => props.theme.secondary.main};
`;

export const TableComponent = styled.table`
  width: 100%;
  text-align: left;
  border: none;
  border-spacing: 0 20px;
  border-collapse: separate;

  color: ${props => props.theme.text.main};
`;

export const THead = styled.thead`
  tr {
    th {
      border-bottom: 2px solid ${props => props.theme.secondary.main};

      border: 5px 0px;

      padding: 8px 15px;

      &:first-child {
        border-bottom-left-radius: 5px;
      }

      &:last-child {
        border-bottom-right-radius: 5px;
      }
    }
  }
`;

export const TBody = styled.tbody`
  tr {
    td {
      background: blue;
      padding: 8px 15px;

      background: ${props => props.theme.primary.light};

      &:first-child {
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
      }
      &:last-child {
        border-bottom-right-radius: 8px;
        border-top-right-radius: 8px;
      }
    }
  }
`;
