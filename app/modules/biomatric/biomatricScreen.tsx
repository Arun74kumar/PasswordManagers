/**
 * unlocking screen
 * @format
 */
import {useEffect, useState, useRef} from 'react';
import {View, AppState, BackHandler} from 'react-native';
import ReactNativeBiometrics, {BiometryTypes} from 'react-native-biometrics';

import {Routes} from '@app/navigator';
import {useTheme} from '@app/styles';
import {getStyles} from './styles';

export const UnlockingScreen = ({navigation}: any) => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const [authorized, setAuthorization] = useState(false);

  useEffect(() => {
    biometrics();
  }, []);

  useEffect(() => {
    if (authorized) {
      navigation.navigate(Routes.bottomTabBar);
    }
  }, [authorized]);

  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
        biometrics();
      }

      appState.current = nextAppState;
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  const biometrics = async () => {
    const rnBiometrics = new ReactNativeBiometrics({
      allowDeviceCredentials: true,
    });

    const {biometryType} = await rnBiometrics.isSensorAvailable();
    console.log('bio: ', biometryType);

    rnBiometrics?.isSensorAvailable().then(resultObject => {
      const {available, biometryType} = resultObject;
      if (available && biometryType === BiometryTypes.TouchID) {
        console.log('TouchID is supported');
        //   } else if (available && biometryType === BiometryTypes.FaceID) {
        //     console.log('FaceID is supported');
      } else if (available && biometryType === BiometryTypes.Biometrics) {
        console.log('Biometrics is supported');
      } else {
        navigation.navigate(Routes.bottomTabBar);
      }
    });

    rnBiometrics.createKeys().then(resultObject => {
      const {publicKey} = resultObject;
      console.log(publicKey);
      //   sendPublicKeyToServer(publicKey);
    });
    rnBiometrics.biometricKeysExist().then(resultObject => {
      const {keysExist} = resultObject;

      if (keysExist) {
        console.log('Keys exist');
      } else {
        console.log('Keys do not exist or were deleted');
      }
    });
    let epochTimeSeconds = Math.round(new Date().getTime() / 1000).toString();
    let payload = epochTimeSeconds + 'some message';

    rnBiometrics
      .createSignature({
        promptMessage: 'Sign in',
        payload: payload,
      })
      .then(resultObject => {
        const {success, signature} = resultObject;

        if (success) {
          console.log('signature', signature);
          verifySignatureWithServer(signature, payload);
        }
      });
    rnBiometrics
      .simplePrompt({
        promptMessage: 'Confirm fingerprint',
        fallbackPromptMessage: 'passcode',
      })
      .then(resultObject => {
        const {success} = resultObject;

        if (success) {
          console.log('successful biometrics provided');
          setAuthorization(true);
        } else {
          console.log('user cancelled biometric prompt');
          BackHandler.exitApp();
        }
      })
      .catch(() => {
        console.log('biometrics failed');
        // BackHandler.exitApp();
      });
  };

  return <View style={styles.container}></View>;
};
function verifySignatureWithServer(
  signature: string | undefined,
  payload: string,
) {
  throw new Error('Function not implemented.');
}
