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
    paswordDataContainer: {
      paddingHorizontal: '20@ms',
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
    },
    searchInputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1,
      marginHorizontal: '20@ms',
      paddingHorizontal: '10@ms',
      backgroundColor: '#F2F2F2',
      borderColor: '#F2F2F2',
      borderRadius: '5@ms',
      marginTop: '20@ms',
    },
    inputSearchStyle: {
      borderColor: Colors.dustyGray,
      width: '90%',
      height: '45@ms',
    },
    searchIconStyle: {
      width: '20@ms',
      height: '20@ms',
    },
    renderPasswordListContainer: {
      marginBottom: '40@ms',
      marginTop: '20@ms',
    },
  });
