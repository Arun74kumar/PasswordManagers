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
      paddingHorizontal: '15@ms',
      paddingVertical: '6@ms',
      borderRadius: '10@ms',
      borderColor: '#B4B4B4',
      alignItems: 'center',
    },
    progressBarContainer: {
      alignItems: 'center',
      marginTop: '40@ms',
    },
    securedLevel: {
      marginTop: '5@ms',
      fontWeight: '500',
    },
    securityStatusContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: '25@ms',
      marginTop: '30@ms',
    },
    securityStatus: {
      marginBottom: '5@ms',
      fontWeight: '500',
      fontSize: '16@ms',
    },
    statusLabel: {
      fontSize: '12@ms',
    },
    analysisContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: '25@ms',
      alignItems: 'center',
      marginTop: '22@ms',
      marginBottom: '8@ms',
    },
    arrowStyle: {
      width: '25@ms',
      height: '25@ms',
      resizeMode: 'contain',
      alignSelf: 'center',
    },
    securityDataContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: '6@ms',
    },
    imageStyle: {
      width: '45@ms',
      height: '45@ms',
      resizeMode: 'contain',
    },
    nameSubtitleContainer: {
      flexDirection: 'column',
      flex: 1,
      marginLeft: '10@ms',
      justifyContent: 'center',
    },
    subtitle: {
      fontSize: '15@ms',
      color: Colors.Shark,
    },
    analysisListContainer: {
      marginBottom: '50@ms',
      paddingHorizontal: '20@ms',
    },
    password: {
      fontSize: '12@ms',
      color: '#808080',
    },
    progressBarStyle: {
      marginTop: '12@ms',
      backgroundColor: '#D9D9D9',
    },
    securityHeader: {
      marginHorizontal: '25@ms',
      flexDirection: 'row',
      marginTop: '14@ms',
      justifyContent: 'space-between',
    },
    backIconStyle: {
      width: '24@ms',
      height: '24@ms',
      resizeMode: 'contain',
    },
    backLabel: {
      fontSize: '16@ms',
      paddingLeft: '5@ms',
    },
    securityDetailsContainer: {
      flexDirection: 'row',
      marginTop: '25@ms',
      marginLeft: '25@ms',
      alignItems: 'center',
    },
    emailLabel: {
      fontSize: '15@ms',
      fontWeight: '300',
      color: '#808080',
      lineHeight: '26@ms',
    },
    securityDetailImage: {
      width: '60@ms',
      height: '60@ms',
      resizeMode: 'contain',
    },
    nameEmailContainer: {
      marginLeft: '10@ms',
    },
    detailsSettingContainer: {
      flexDirection: 'row',
      marginTop: '10@ms',
      marginLeft: '32@ms',
      marginVertical: '12@ms',
      paddingRight: '10@ms',
    },
    detailsAppLinkLabel: {
      color: '#105DFB',
      borderBottomWidth: 1,
      borderColor: '#105DFB',
    },
    detailsLinkContainer: {
      width: '35%',
    },
    emailAndPasswordLabel: {
      fontSize: '14@ms',
    },
    dropdownContainer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      marginRight: '25@ms',
      marginTop: '20@ms',
    },
    dropdownIconStyle: {
      width: '26@ms',
      height: '30@ms',
      resizeMode: 'contain',
    },
    dropdownStyle: {
      height: '40@ms',
      width: '90%',
      borderColor: '#9B9B9B',
      borderBottomWidth: 0.7,
    },
    bottomButtonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginHorizontal: '25@ms',
      marginTop: '15@ms',
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
    copyButtonLabel: {
      color: '#333333',
    },
  });
