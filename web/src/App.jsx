import Navbar from './components/Navbar/Navbar';
import GlobalStyles from './core/themes/GlobalStyles';
import { StyledContainer, StyledRouteContainer } from './core/themes/styles';
import RenderRoutes from './router';

function App() {
  return (
    <StyledContainer>
      <GlobalStyles />
      <Navbar />
      <StyledRouteContainer>
        <RenderRoutes />
      </StyledRouteContainer>
    </StyledContainer>
  );
}

export default App;
