import { screen } from '@testing-library/react';
import { render } from '../../utils/testUtils/testUtils';
import Navbar from './Navbar';

describe('Navbar component', () => {
  test('it renders app title', () => {
    render(<Navbar />);
    expect(screen.getByText('githubstars'));
  });

  test('it renders links in paths that are not "/"', () => {
    render(<Navbar />);
    const homeLink = screen.queryByText('home');
    expect(homeLink).toBeNull();
  });

  test('it do not render links in "/" path', () => {
    window.history.pushState({}, 'Test Route', '/test/route');
    render(<Navbar />);
    const homeLink = screen.queryByText('home');
    expect(homeLink).not.toBeNull();
  });
});
