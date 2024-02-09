/**
 * Styles
 * @format
 */

import { StyleSheet } from 'react-native';

import { ScaledSheet, ITheme } from '@app/styles';

export const getStyles = (theme: ITheme) =>
  ScaledSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      height: '100%',
      width: '100%',
      elevation: 1000,
      zIndex: 10000,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
