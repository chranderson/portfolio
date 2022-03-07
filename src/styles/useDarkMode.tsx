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

  const toggleDarkMode = React.useCallback(() => {
    setDarkModeEnabled(!darkModeEnabled);
  }, [darkModeEnabled, setDarkModeEnabled]);

  const theme: Theme = darkModeEnabled ? darkTheme : lightTheme;

  return {
    darkModeEnabled,
    toggleDarkMode,
    theme
  };
}

export default useDarkMode;
