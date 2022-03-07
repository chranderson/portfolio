import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { RecoilRoot } from 'recoil';

test('renders content', () => {
  render(
    <RecoilRoot>
      <App />
    </RecoilRoot>
  );
  const contentElement = screen.getByText(/content/i);
  expect(contentElement).toBeInTheDocument();
});
