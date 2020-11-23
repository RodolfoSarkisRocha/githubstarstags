import { render, fireEvent } from '../../../utils/testUtils/testUtils';
import HomeForm from './HomeForm';

describe('HomeForm component', () => {
  let component;
  let mockSubmit;

  beforeEach(() => {
    mockSubmit = jest.fn();
    component = render(<HomeForm handleSubmit={mockSubmit} />);
  });

  test('input state is updated', () => {
    const input = component.getByTestId('userInput');

    fireEvent.change(input, { target: { value: 'TestUser' } });
    expect(input.value).toBe('TestUser');
  });

  test('form can be submited', () => {
    const button = component.getByTestId('submitButton');
    const form = component.getByTestId('userForm');

    fireEvent.submit(button);
    expect(mockSubmit).toHaveBeenCalled();
    fireEvent.submit(form);
    expect(mockSubmit).toHaveBeenCalled();
  });
});
