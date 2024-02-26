/**
 * new Record screen Styles
 * @format
 */

import {Colors, ITheme, ScaledSheet} from '@app/styles';

export const getStyles = (theme: ITheme) =>
  ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
    },
    nameUserIdContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '45@ms',
      marginHorizontal: '25@ms',
    },
    inputStyle: {
      borderBottomWidth: 1,
      paddingHorizontal: '4@ms',
      marginLeft: '35@ms',
      paddingBottom: 0,
      borderColor: Colors.dustyGray,
      alignSelf: 'center',
      marginTop: -10,
      width: '50%',
    },
    tickCircle: {
      width: '20@ms',
      height: '20@ms',
      resizeMode: 'contain',
      marginTop: '5@ms',
    },
    borderContainer: {
      borderWidth: 0.6,
      width: '88%',
      marginHorizontal: '20@ms',
      marginVertical: '20@ms',
      borderColor: '#DADADA',
    },
    passwordFieldContainer: {
      marginTop: '15@ms',
      flexDirection: 'row',
      borderWidth: 1,
      paddingHorizontal: '12@ms',
      alignItems: 'center',
      borderRadius: '5@ms',
      marginHorizontal: '25@ms',
      justifyContent: 'space-between',
      borderColor: '#9B9B9B',
      borderBottomWidth: 0,
    },
    passwordProgressStyle: {
      alignSelf: 'center',
      height: 5,
      backgroundColor: '#D9D9D9',
      marginTop: -3,
    },
    passwordLengthContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: '20@ms',
      marginHorizontal: '20@ms',
      justifyContent: 'space-between',
    },
    passwordLengthInput: {
      width: '10%',
      borderWidth: 1,
      padding: 0,
      textAlign: 'center',
      borderRadius: '5@ms',
      borderColor: '#D9D9D9',
    },
    sliderTrackStyle: {
      height: '10@ms',
      borderRadius: '10@ms',
    },
    thumbStyle: {
      backgroundColor: Colors.white,
      borderColor: '#105DFB',
      borderWidth: 1.5,
    },
    sliderStyle: {
      width: '125@ms',
    },
    numbersCheckContainer: {
      flexDirection: 'row',
      marginTop: '15@ms',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginHorizontal: '20@ms',
    },
    bottomButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: '20@ms',
      marginTop: '40@ms',
    },
    copyPasswordButton: {
      width: '46%',
      padding: '10@ms',
      borderWidth: 1,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: '#DADADA',
    },
    disabledButton: {
      width: '46%',
      padding: '10@ms',
      borderWidth: 1,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      borderColor: 'gray',
      backgroundColor: 'gray',
    },
    copyButtonLabel: {
      color: '#333333',
    },
    orLabel: {
      alignSelf: 'center',
      marginVertical: '20@ms',
    },
    addManualyButtonLabel: {
      color: '#333333',
      fontSize: '14@ms',
      fontWeight: '400',
    },
    manualyButtonContainer: {
      backgroundColor: 'white',
      borderColor: '#DADADA',
      width: '90%',
      height: '45@ms',
    },
    manualInputStyle: {
      width: '85%',
      color: Colors.black,
      borderWidth: 1,
      alignItems: 'center',
      alignSelf: 'center',
      marginTop: '20@ms',
      borderRadius: '10@ms',
      borderColor: Colors.dustyGray,
      paddingHorizontal: '20@ms',
    },
  });
