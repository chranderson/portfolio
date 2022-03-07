import { ThemeProvider } from 'styled-components/macro';
import { Content, Wrap } from './Styles';
import GlobalStyles from 'styles/GlobalStyles';
import useDarkMode from 'styles/useDarkMode';
import Nav from 'components/Nav';

function App() {
  const { theme } = useDarkMode();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrap>
        <Nav />
        <Content>content</Content>
      </Wrap>
    </ThemeProvider>
  );
}

export default App;
