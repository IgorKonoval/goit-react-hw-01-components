import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  margin: 30px auto;
  padding: 5px;
  width: 400px;
  & th,
  & td {
    text-align: center;
    border: 1px solid grey;
  }
  & th {
    background-color: lightgray;
  }
  & td:hover {
    background-color: lightblue;
  }
`;
