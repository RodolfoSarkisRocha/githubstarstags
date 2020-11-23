import { render, screen } from '../../utils/testUtils/testUtils';
import Home from './Home';

describe('Home component', () => {
  test('it renders form and submit button', () => {
    render(<Home />);

    screen.getByText(/https:\/\/github.com\//i);
    screen.getByText('get repositories');
  });
});
