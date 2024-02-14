/**
 * analysis screen Styles
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
    statusRowContainer: {
      borderWidth: 1,
      paddingHorizontal: '20@ms',
      paddingVertical: '10@ms',
      borderRadius: '10@ms',
      borderColor: '#B4B4B4',
      alignItems: 'center',
    },
  });
