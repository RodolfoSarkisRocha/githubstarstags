import styled from 'styled-components';

const StyledRouteContainer = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 24px;
  padding-top: 60px;
  height: 100vh;
  box-sizing: border-box;
`;

const StyledContainer = styled.div`
  max-widht: 100%;
  overflow-x: hidden;
  height: 100vh;
`;

const StyledFlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${({ justContent }) => justContent || 'flex-start'};
  padding: ${({ padding }) => padding || '0px'};
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 20px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  border: 3px solid #000;
  box-shadow: 2px 2px 0 0 #000;
  outline: none;
  transition: all 50ms ease-in-out;
  &:active {
    box-shadow: 0 0 0 0 #000;
    transform: translate(2px);
  }
  color: ${({ color }) => {
    switch (color) {
      case 'primary':
        return '#fff';
      default:
        return '#000';
    }
  }};
  background-color: ${({ color }) => {
    switch (color) {
      case 'primary':
        return '#95bcf2';
      default:
        return '#fff';
    }
  }};
`;

const StyledArrowRight = styled.div`
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;

  border-left: 10px solid black;

  margin-left: ${({ marginLeft }) => marginLeft || '0px'};
`;

export { StyledContainer, StyledFlexRow, StyledButton, StyledArrowRight, StyledRouteContainer };
