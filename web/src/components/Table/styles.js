import styled from 'styled-components';

const StyledTable = styled.table`
  width: ${({ width }) => width || 'max-content'};
  border: ${({ bordered }) => (bordered ? '1px solid rgba(255,255,255, 0.25)' : 'none')};
  padding: 10px 0;
  border-collapse: collapse;
  max-width: 100%;
  font-size: 12px;
`;

const StyledTH = styled.th`
  width: ${({ width }) => width || 'auto'};
  text-align: ${({ align }) => align || 'left'};
  padding: 10px;
  font-size: 14px;
`;

const StyledTD = styled.td`
  text-align: ${({ align }) => align || 'left'};
  padding: 10px;
  white-space: ${({ ellipsis }) => (ellipsis ? 'nowrap' : '')};
  overflow: ${({ ellipsis }) => (ellipsis ? 'hidden' : '')};
  text-overflow: ${({ ellipsis }) => (ellipsis ? 'ellipsis' : '')};
`;

const StyledTR = styled.tr`
  border-bottom: 1px solid #e9e9e9;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: #eeeeee;
  }
`;

const StyledTablePagination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTableTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  padding: 10px 0;
`;

const StyledTableContainer = styled.div`
  max-width: 100%;
  overflow-y: ${({ overflow }) => overflow?.y || 'auto'};
  overflow-x: ${({ overflow }) => overflow?.x || 'auto'};
`;

const StyledHeaderTR = styled.tr`
  background-color: #f7f7f7;
`;

export {
  StyledTable,
  StyledTD,
  StyledTR,
  StyledTH,
  StyledTableContainer,
  StyledTableTitle,
  StyledTablePagination,
  StyledHeaderTR,
};
