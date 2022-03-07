import * as React from 'react';
import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MutableSnapshot, RecoilRoot } from 'recoil';

const customRender = (
  ui: React.ReactElement,
  renderOptions: {
    [key: string]: any;
    initializeState?: (arg: MutableSnapshot) => void;
  } = {}
) => {
  const { initializeState } = renderOptions;
  const Wrapper: React.FunctionComponent = ({ children }) => (
    <RecoilRoot initializeState={initializeState}>{children}</RecoilRoot>
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
