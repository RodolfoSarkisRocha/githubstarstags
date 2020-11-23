import { render, screen } from '../../utils/testUtils/testUtils';
import StrippedBarLoading from './StrippedBarLoading';

describe('StrippedBarLoading component', () => {
  test('it renders loading component when isLoading is true', () => {
    render(
      <StrippedBarLoading text="Testing Loading" isLoading>
        <div>Children component</div>
      </StrippedBarLoading>,
    );

    screen.getByText('Testing Loading');
  });

  test('it renders children component when isLoading is false', () => {
    render(
      <StrippedBarLoading text="Testing Loading" isLoading={false}>
        <div>Children Component</div>
      </StrippedBarLoading>,
    );

    screen.getByText('Children Component');
  });
});
