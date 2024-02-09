/**
 * App themes
 * @format
 */

import * as colors from './colors';

const defaultTheme = {
  key: 'default',
  variant: 'light',
  colors: {
    primary: colors.red,
  },
};

const darkTheme = {
  ...defaultTheme,
  variant: 'dark',
  key: 'dark',
  colors: {
    ...defaultTheme.colors,
  },
};

export const Themes = {defaultTheme, darkTheme};

export type ITheme = typeof defaultTheme;
