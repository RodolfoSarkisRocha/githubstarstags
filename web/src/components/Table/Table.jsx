import { StyledFlexRow } from '../../core/themes/styles';
import {
  StyledTable,
  StyledTH,
  StyledTR,
  StyledTableContainer,
  StyledTableTitle,
  StyledTablePagination,
  StyledTD,
  StyledHeaderTR,
} from './styles';

const Table = ({ header, dataSource, columns, pagination, rowKey, tableWidth }) => {
  const defaultColumnWidth = `${100 / columns.length}%`;
  const justifyAlign = {
    left: 'flex-start',
    right: 'flex-end',
    center: 'center',
  };

  return (
    <StyledTableContainer>
      <StyledTableTitle>{header}</StyledTableTitle>
      <StyledTable width={tableWidth}>
        <thead>
          <StyledHeaderTR>
            {columns.map((column) => {
              return (
                <StyledTH width={column.width || defaultColumnWidth} align={column.align}>
                  {column.title}
                </StyledTH>
              );
            })}
          </StyledHeaderTR>
        </thead>
        <tbody>
          {dataSource.map((data, index) => {
            return (
              <StyledTR key={data[rowKey]}>
                {columns.map((column) => {
                  const { dataIndex, render, key, align, width, ellipsis } = column;
                  const dataValue = data[dataIndex];
                  return (
                    <StyledTD
                      ellipsis={ellipsis}
                      width={width || defaultColumnWidth}
                      align={align}
                      key={data[key]}
                    >
                      <StyledFlexRow justContent={justifyAlign[align] || 'flex-start'}>
                        {render ? render(dataValue, data, index) : dataValue}
                      </StyledFlexRow>
                    </StyledTD>
                  );
                })}
              </StyledTR>
            );
          })}
        </tbody>
      </StyledTable>
      <StyledTablePagination>{pagination}</StyledTablePagination>
    </StyledTableContainer>
  );
};

export default Table;
