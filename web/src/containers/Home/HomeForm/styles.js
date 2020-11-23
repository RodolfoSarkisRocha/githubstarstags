import styled from 'styled-components';

const StyledInput = styled.input`
  padding: 3px 5px;
  font-size: 14px;
  border: 2px solid #000;
  border-radius: 3px;
  font-weight: 600;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export { StyledInput, StyledForm };
