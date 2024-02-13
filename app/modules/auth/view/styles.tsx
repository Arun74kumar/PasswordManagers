/**
 * Auth screen Styles
 * @format
 */

import {Colors, ITheme, ScaledSheet} from '@app/styles';

export const getStyles = (theme: ITheme) =>
  ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
    },
    passBlockImage: {
      width: '80@ms',
      height: '80@ms',
      alignSelf: 'center',
      resizeMode: 'contain',
      marginTop: '30@ms',
    },
    passBlockLabel: {
      fontSize: '28@ms',
      alignSelf: 'center',
      fontWeight: '700',
    },
    frictionlessSecurity: {
      alignSelf: 'center',
      fontSize: '15@ms',
    },
    authMainBorderContainer: {
      borderWidth: 1,
      margin: '20@ms',
      padding: '15@ms',
      borderRadius: '10@ms',
    },
    authRowContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderWidth: 1,
      padding: '5@ms',
      borderRadius: '10@ms',
    },
    registerTabContainer: {
      width: '45%',
      height: '35@ms',
      alignItems: 'center',
      backgroundColor: 'black',
      justifyContent: 'center',
      borderRadius: '7@ms',
    },
    InputStyle: {
      height: '50@ms',
      borderWidth: 1,
      borderRadius: '10@ms',
      paddingHorizontal: '20@ms',
      marginVertical: '5@ms',
      borderColor: Colors.dustyGray,
    },
    enterVerificationCode: {
      fontSize: '14@ms',
      alignSelf: 'center',
    },
    // otpInputStyle: {
    //   width: '50@ms',
    //   height: '50@ms',
    //   borderWidth: 1,
    //   borderRadius: '10@ms',
    //   marginVertical: '5@ms',
    //   borderColor: Colors.dustyGray,
    //   textAlign: 'center',
    // },
    borderStyleBase: {
      width: 30,
      height: 45,
    },
    borderStyleHighLighted: {
      borderColor: '#03DAC6',
    },
    underlineStyleBase: {
      width: 30,
      height: 45,
      borderWidth: 0,
      borderBottomWidth: 1,
    },
    underlineStyleHighLighted: {
      borderColor: '#03DAC6',
    },
  });
