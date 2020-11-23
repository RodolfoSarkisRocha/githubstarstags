import { StyledFlexRow, StyledButton, StyledArrowRight } from '../../../core/themes/styles';
import { StyledForm, StyledInput } from './styles';

const HomeForm = ({ handleSubmit, userInput }) => {
  return (
    <StyledForm data-testid="userForm" onSubmit={handleSubmit}>
      <StyledFlexRow padding="0 0 20px 0">
        <p>https://github.com/</p>
        <StyledInput data-testid="userInput" {...userInput} />
      </StyledFlexRow>
      <StyledButton data-testid="submitButton" type="submit">
        get repositories
        <StyledArrowRight marginLeft="10px" />
      </StyledButton>
    </StyledForm>
  );
};

export default HomeForm;
