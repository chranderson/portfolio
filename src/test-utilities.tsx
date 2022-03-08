import * as React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components/macro';
import useDarkMode from 'styles/useDarkMode';

const customRender = (
  ui: React.ReactElement,
  renderOptions: {
    [key: string]: any;
    initializeState?: (arg: MutableSnapshot) => void;
  } = {}
) => {
  const { initializeState } = renderOptions;

  const ThemeWrapper: React.FunctionComponent = ({ children }) => {
    const { theme } = useDarkMode();
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
  };

  const Wrapper: React.FunctionComponent = ({ children }) => (
    <RecoilRoot initializeState={initializeState}>
      <ThemeWrapper>{children}</ThemeWrapper>
    </RecoilRoot>
  );
  return render(ui, {
    wrapper: Wrapper,
    ...renderOptions
  });
};

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render, userEvent };
