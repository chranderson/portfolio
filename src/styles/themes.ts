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
  bg: colors.white,
  button: {
    bg: colors.black,
    color: colors.white
  }
};

export const darkTheme: Theme = {
  color: colors.white,
  bg: colors.black,
  button: {
    bg: colors.white,
    color: colors.black
  }
};
