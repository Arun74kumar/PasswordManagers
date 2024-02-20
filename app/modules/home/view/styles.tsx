/**
 * Home screen Styles
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
    paswordDataContainer: {
      paddingHorizontal: '20@ms',
      marginBottom: '10@ms',
    },
    paswordDataRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: '10@ms',
    },
    nameSubtitleContainer: {
      flexDirection: 'column',
      flex: 1,
      marginLeft: '10@ms',
    },
    titleLabel: {
      fontSize: '16@ms',
    },
    subtitle: {
      fontSize: '15@ms',
      color: Colors.Shark,
    },
    emailLabel: {
      fontSize: '12@ms',
      fontWeight: '400',
      color: '#808080',
    },
    imageStyle: {
      width: '45@ms',
      height: '45@ms',
      resizeMode: 'contain',
    },
    iconStyle: {
      width: '24@ms',
      height: '24@ms',
      resizeMode: 'contain',
      tintColor: 'black',
    },
  });
