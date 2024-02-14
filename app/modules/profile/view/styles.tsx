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
    profileContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '50@ms',
    },
    profileImageStyle: {
      width: '90@ms',
      height: '90@ms',
      resizeMode: 'contain',
    },
    profileName: {
      alignSelf: 'center',
      marginTop: '10@ms',
    },
    phoneNumber: {
      alignSelf: 'center',
      fontSize: '12@ms',
      color: Colors.dustyGray,
    },
    editLabelContaier: {
      borderWidth: 1,
      paddingVertical: '6@ms',
      paddingHorizontal: '12@ms',
      marginTop: '10@ms',
      borderRadius: '30@ms',
      borderColor: '#DADADA',
    },
    editLabel: {
      alignSelf: 'center',
      fontSize: '12@ms',
    },
    profileConentContainer: {
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
    switchAccountContainer: {
      borderWidth: 1,
      padding: 4,
      backgroundColor: '#F2F2F2',
      borderColor: '#F2F2F2',
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 5,
    },
    arrowDownStyle: {
      width: '18@ms',
      height: '18@ms',
      resizeMode: 'contain',
      transform: [{rotate: '90deg'}],
    },
    logoutButtonContainer: {
      borderWidth: 1,
      paddingHorizontal: '10@ms',
      justifyContent: 'flex-end',
      alignSelf: 'flex-end',
      marginBottom: '70@ms',
      marginRight: '20@ms',
      borderRadius: '30@ms',
      borderColor: '#E6001F',
      paddingVertical: '5@ms',
    },
    logoutLabel: {
      color: '#E6001F',
      fontSize: '12@ms',
    },
  });
