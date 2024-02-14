/**
 * Setting screen Styles
 * @format
 */

import {Colors, ITheme, ScaledSheet} from '@app/styles';

export const getStyles = (theme: ITheme) =>
  ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
    },
    headerIconStyle: {
      width: '20@ms',
      height: '20@ms',
    },
    settingConentContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: '20@ms',
      alignItems: 'center',
      marginTop: '22@ms',
    },
    arrowStyle: {
      width: '24@ms',
      height: '24@ms',
      resizeMode: 'contain',
    },
  });
