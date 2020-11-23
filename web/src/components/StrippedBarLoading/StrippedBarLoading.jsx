import {
  StyledBarContainer,
  StyledLoadingText,
  StyledStripes,
  StyledContainer,
  StyledWrapper,
} from './styles';

const StrippedBarLoading = ({ children, isLoading, text }) => {
  if (!isLoading) return children;
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledBarContainer>
          <StyledStripes />
        </StyledBarContainer>
        <StyledLoadingText>{text}</StyledLoadingText>
      </StyledWrapper>
    </StyledContainer>
  );
};

export default StrippedBarLoading;
