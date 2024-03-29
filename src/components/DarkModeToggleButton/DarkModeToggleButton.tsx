import { FiMoon, FiSun } from 'react-icons/fi';
import Button from 'components/Button';
import useDarkMode from 'styles/useDarkMode';

function DarkModeToggleButton() {
  const { darkModeEnabled, toggleDarkMode } = useDarkMode();
  const ariaText = `enable ${darkModeEnabled ? 'light' : 'dark'} mode`;
  const currentMode = `${darkModeEnabled ? 'dark' : 'light'} mode`;

  return (
    <Button
      data-testid={currentMode}
      aria-labelledby={ariaText}
      onClick={toggleDarkMode}
      variant="icon"
    >
      {darkModeEnabled ? (
        <FiSun data-testid="sun-icon" size="1.2rem" />
      ) : (
        <FiMoon data-testid="moon-icon" size="1.2rem" />
      )}
    </Button>
  );
}

export default DarkModeToggleButton;
