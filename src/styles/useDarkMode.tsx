import * as React from 'react';
import { atom, useRecoilState } from 'recoil';
import { darkTheme, lightTheme } from './themes';
import type { Theme } from './themes';

const darkModeState = atom<boolean>({
  key: 'dark-mode-state',
  default: true
});

/**
 *  maintains global darkModeEnabled status.
 *  provides toggle function & current theme to use
 */
function useDarkMode() {
  const [darkModeEnabled, setDarkModeEnabled] = useRecoilState(darkModeState);

  /** initialize value on mount */
  React.useEffect(() => {
    const currentLocalStorageValue = localStorage.getItem('darkModeEnabled');
    if (typeof currentLocalStorageValue === 'string') {
      setDarkModeEnabled(currentLocalStorageValue === 'true');
    }

    /** set localStorage value */
    if (currentLocalStorageValue === null) {
      localStorage.setItem('darkModeEnabled', 'true');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleDarkMode = React.useCallback(() => {
    setDarkModeEnabled(!darkModeEnabled);
    localStorage.setItem('darkModeEnabled', String(!darkModeEnabled));
  }, [darkModeEnabled, setDarkModeEnabled]);

  const theme: Theme = darkModeEnabled ? darkTheme : lightTheme;

  return {
    darkModeEnabled,
    toggleDarkMode,
    theme
  };
}

export default useDarkMode;
