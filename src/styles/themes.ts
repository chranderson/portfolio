import colors from 'styles/ColorPalette';

export type Theme = {
  color: string;
  /** background */
  bg: string;
  button: {
    bg: string;
    color: string;
  };
};

export const lightTheme: Theme = {
  color: colors.black,
  bg: 'linear-gradient(to top, #4ac29a, #bdfff3)',
  button: {
    bg: colors.black,
    color: colors.white
  }
};

export const darkTheme: Theme = {
  color: colors.white,
  bg: 'linear-gradient(to bottom, #2c3e50, #fd746c)',
  button: {
    bg: colors.white,
    color: colors.black
  }
};
