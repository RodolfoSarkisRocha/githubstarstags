import { Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import ROUTES from './config/routerConfig';

const RenderRoutes = () => {
  return (
    <Switch>
      {ROUTES.map((route) => (
        <Route key={route.key} {...route} />
      ))}
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
};

export default RenderRoutes;
