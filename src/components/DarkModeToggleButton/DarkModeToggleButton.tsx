import { FiMoon, FiSun } from 'react-icons/fi';
import Button from 'components/Button';
import useDarkMode from 'styles/useDarkMode';

function DarkModeToggleButton() {
  const { darkModeEnabled, toggleDarkMode } = useDarkMode();
  const ariaText = `enable ${darkModeEnabled ? 'light' : 'dark'} mode`;

  return (
    <Button aria-labelledby={ariaText} onClick={toggleDarkMode} variant="icon">
      {darkModeEnabled ? <FiSun /> : <FiMoon />}
    </Button>
  );
}

export default DarkModeToggleButton;
