/**
 * header component styles
 * @format
 */

import {ScaledSheet} from 'react-native-size-matters';

import {Colors, ITheme} from '@app/styles';

export const getStyles = (theme: ITheme) =>
  ScaledSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    headerMainContainer: {
      marginHorizontal: '25@ms',
      flexDirection: 'row',
      marginTop: '12@ms',
    },
    sideContainer: {
      maxWidth: '20%',
      width: '20%',
      justifyContent: 'center',
      marginTop: '2@ms',
    },
    backIconStyle: {
      width: '24@ms',
      height: '24@ms',
      alignSelf: 'flex-start',
    },
    titleStyle: {
      color: Colors.black,
      fontSize: '16@ms',
      width: '60%',
      textAlign: 'center',
      alignSelf:'center'
    },
    rightContainer: {
      alignItems: 'flex-end',
    },
  });
