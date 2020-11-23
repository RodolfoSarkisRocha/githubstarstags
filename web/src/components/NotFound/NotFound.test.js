import { render, screen } from '../../utils/testUtils/testUtils';
import NotFound from './NotFound';

describe('Not Found component', () => {
  test('it renders when on non existing path', () => {
    window.history.pushState({}, 'Test Route', '/test/route');
    render(<NotFound />);
    expect(screen.queryByText('Not Found')).not.toBeNull();
  });

  test('it shoud not render when on existing path', () => {
    render(<NotFound />);
    expect(screen.getByText('Not Found'));
  });
});
