/**
 * screen container Styles
 * @format
 */

import { ScaledSheet, ITheme } from '@app/styles';

export const getStyles = (theme: ITheme) =>
  ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.white,
    },
    headerStyle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      alignItems: 'center',
    },
    backIconStyle: {
      fontSize: '20@ms',
      marginRight: '4@ms',
      color: theme.colors.black,
    },
    searchIconStyle: {
      fontSize: '25@ms',
      position: 'absolute',
      right: '15@ms',
      zIndex: 1000,
    },
    titleContainer: {
      position: 'absolute',
      left: '20@ms',
    },
    titleStyle: {
      fontSize: '16@ms',
    },
    subTitleStyle: {
      fontSize: '12@ms',
    },
    backButtonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      minWidth: '50@ms',
    },
    backLabel: {
      marginTop: '3@ms',
      color: theme.colors.black,
    },
    rightSideContentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    safeAreaStyle: {
      backgroundColor: theme.colors.white,
      flex: 0,
    },
  });
