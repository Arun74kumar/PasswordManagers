/**
 * onboarding screen Styles
 * @format
 */

import {Colors, ITheme, ScaledSheet} from '@app/styles';

export const getStyles = (theme: ITheme) =>
  ScaledSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
    },
    borderMainContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    borderContainer: {
      borderWidth: '1@ms',
      width: '20%',
      marginHorizontal: '20@ms',
      borderRadius: '5@ms',
      height: 7,
    },
    borderInnerContainer: {
      alignSelf: 'center',
      borderWidth: '3@ms',
      width: '100%',
      borderRadius: '2@ms',
      backgroundColor: 'red',
    },
    onboardingImage: {
      width: '130@ms',
      height: '130@ms',
      marginTop: '20%',
      alignSelf: 'center',
      resizeMode: 'contain',
    },
    passBlockImage: {
      width: '90@ms',
      height: '90@ms',
      alignSelf: 'center',
      resizeMode: 'contain',
      marginTop: '15%',
    },
    onboardinTitle: {
      marginLeft: '20@ms',
      marginTop: '60@ms',
      lineHeight: '25@ms',
      fontWeight: '400',
      fontSize: '16@ms',
    },
    titleBorder: {
      borderWidth: 1,
      width: '28@ms',
      marginLeft: '20@ms',
      borderColor: Colors.black,
    },
    onboaringSubtitle: {
      marginLeft: '20@ms',
      marginTop: '10@ms',
      fontSize: '20@ms',
      fontWeight: '600',
    },
    onboardingDescription: {
      fontWeight: '400',
      marginHorizontal: '20@ms',
      marginTop: '10@ms',
      fontSize: '12@ms',
      lineHeight: '18@ms',
      marginRight: '26@ms',
    },
    passBlockLabel: {
      fontSize: '30@ms',
      alignSelf: 'center',
      fontWeight: '700',
    },
    frictionlessSecurity: {
      alignSelf: 'center',
      fontSize: '18@ms',
    },
    registerButtonContainer: {
      marginBottom: '30@ms',
    },
  });
