import Colors from 'styles/ColorPalette';
import Gradients from 'styles/Gradients';

export type ThemeVariant = 'dark' | 'light';

export type Theme = {
  color: string;
  /** background */
  bg: string | Gradients;
  button: {
    bg: string;
    color: string;
  };
};

export const lightTheme: Theme = {
  color: Colors.black,
  bg: Gradients.light,
  button: {
    bg: Colors.tranluscentBlack,
    color: Colors.white
  }
};

export const darkTheme: Theme = {
  color: Colors.white,
  bg: Gradients.dark,
  button: {
    bg: Colors.transluscentWhite,
    color: Colors.black
  }
};
