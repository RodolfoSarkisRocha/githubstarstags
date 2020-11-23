import styled from 'styled-components';

const StyledBarContainer = styled.div`
  background-color: #fff;
  height: 40px;
  width: ${({ width }) => width || '50%'};
  border-radius: 5px;
  position: relative;
  border: 3px solid #000;
`;

const StyledStripes = styled.div`
  background: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.5) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.5) 50%,
    rgba(255, 255, 255, 0.5) 75%,
    transparent 75%,
    transparent
  );
  background-size: 40px;
  border-radius: 5px;
  animation: move 0.5s linear infinite;

  background-color: #e3e3e3;
  width: 100%;
  height: 100%;

  @keyframes move {
    100% {
      background-position: 40px 0px;
    }
  }
`;

const StyledLoadingText = styled.div`
  font-size: 16px;
  margin-top: 24px;
`;

const StyledContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50%;
`;

export { StyledBarContainer, StyledStripes, StyledLoadingText, StyledContainer, StyledWrapper };
