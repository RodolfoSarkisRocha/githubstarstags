import Home from '../containers/Home/Home';
import RepoList from '../containers/RepoList/RepoList';

const ROUTES = [
  {
    path: '/',
    key: 'home',
    exact: true,
    component: () => <Home />,
  },
  {
    path: '/repository-list/:userName',
    key: 'repo-list',
    exact: true,
    component: () => <RepoList />,
  },
];

export default ROUTES;
