import DarkModeToggleButton from './DarkModeToggleButton';
import { render, screen } from 'test-utilities';

afterEach(() => {
  localStorage.clear();
});

describe('DarkModeToggleButton', () => {
  describe('dark mode is enabled', () => {
    test('displays sun icon', () => {
      render(<DarkModeToggleButton />);
      expect(screen.getByTestId('sun-icon')).toBeTruthy();
    });
    test('includes correct value for aria-labelledby', () => {
      render(<DarkModeToggleButton />);
      const buttonElement = screen.getByRole('button');
      expect(buttonElement).toHaveAttribute(
        'aria-labelledby',
        'enable light mode'
      );
    });
  });
  describe('dark mode is disabled', () => {
    test('displays moon icon', () => {
      localStorage.setItem('darkModeEnabled', 'false');
      render(<DarkModeToggleButton />);
      expect(screen.getByTestId('moon-icon')).toBeTruthy();
    });
    test('includes correct value for aria-labelledby', () => {
      localStorage.setItem('darkModeEnabled', 'false');
      render(<DarkModeToggleButton />);
      const buttonElement = screen.getByRole('button');
      expect(buttonElement).toHaveAttribute(
        'aria-labelledby',
        'enable dark mode'
      );
    });
  });
});
