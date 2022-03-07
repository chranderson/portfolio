import React from 'react';
import { render, screen, userEvent } from 'test-utilities';
import App from './App';

beforeEach(() => {
  localStorage.clear();
});

test('renders Chris Anderson', () => {
  render(<App />);
  const contentElement = screen.getByText(/Chris Anderson/i);
  expect(contentElement).toBeInTheDocument();
});

describe('dark/light mode', () => {
  test('dark mode is set by default', () => {
    render(<App />);
    const darkModeTogglebutton = screen.getByTestId('dark mode');
    expect(darkModeTogglebutton).toBeTruthy();
  });
  test('user can toggle dark mode off', () => {
    render(<App />);
    const darkModeTogglebutton = screen.getByTestId('dark mode');
    userEvent.click(darkModeTogglebutton);
    expect(screen.queryByTestId('dark mode')).not.toBeTruthy();
    expect(screen.getByTestId('light mode')).toBeTruthy();
  });

  test('selected value is saved to localStorage', () => {
    render(<App />);
    expect(localStorage.getItem('darkModeEnabled')).toBe('true');
    userEvent.click(screen.getByTestId('dark mode'));
    expect(localStorage.getItem('darkModeEnabled')).toBe('false');
  });
});
