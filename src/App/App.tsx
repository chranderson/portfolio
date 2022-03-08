import { ThemeProvider } from 'styled-components/macro';
import { Content, Wrap } from './Styles';
import GlobalStyles from 'styles/GlobalStyles';
import useDarkMode from 'styles/useDarkMode';
import Nav from 'components/Nav';
import Home from 'pages/Home';

function App() {
  const { theme } = useDarkMode();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrap>
        <Nav />
        <Content>
          <Home />
        </Content>
      </Wrap>
    </ThemeProvider>
  );
}

export default App;
