/**
 * OtpVerifyScreen
 * @format
 */

import React, {useState} from 'react';
import {Image, StatusBar, View} from 'react-native';
import OTPTextView from 'react-native-otp-textinput';

import {Screen, Label,Button} from '@app/components';
import {Images, strings} from '@app/constants';
import {Routes} from '@app/navigator';
import {Colors, useTheme} from '@app/styles';
import {getStyles} from './styles';

function OtpVerifyScreen({navigation}: any) {
  const theme = useTheme();
  const styles = getStyles(theme);
  const [otp, setOtp] = useState('');
  console.log('otp', otp);

  const handleOTPChange = (otpValue: any) => {
    setOtp(otpValue);
  };
  return (
    <Screen style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <View>
        <Image source={Images.passBlockIcon} style={styles.passBlockImage} />
        <Label style={styles.passBlockLabel}>{strings.passBlockLabel}</Label>
        <Label style={styles.frictionlessSecurity}>
          {strings.frictionlessSecurity}
        </Label>
      </View>
      <View style={styles.container}>
        <View
          style={{borderWidth: 1, padding: 20, margin: 20, borderRadius: 25}}>
          <Label style={styles.enterVerificationCode}>
            {strings.enterVerificationCode}
          </Label>
          <OTPTextView
            handleTextChange={handleOTPChange}
            inputCount={4}
            textInputStyle={styles.otpInputStyle}
            tintColor={Colors.dustyGray}
          />
          {/* <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInput
              placeholderTextColor={Colors.dustyGray}
              maxLength={1}
              style={styles.otpInputStyle}
            />
            <TextInput
              placeholderTextColor={Colors.dustyGray}
              maxLength={1}
              style={styles.otpInputStyle}
            />
            <TextInput
              placeholderTextColor={Colors.dustyGray}
              maxLength={1}
              style={styles.otpInputStyle}
            />
            <TextInput
              placeholderTextColor={Colors.dustyGray}
              maxLength={1}
              style={styles.otpInputStyle}
            />
          </View> */}
        </View>
      </View>
      <Button
        onPress={() => {
          navigation.navigate(Routes.homeScreen);
        }}
        isDisable={otp?.length !== 4}
        title="Continue"
        buttonContainerStyle={{marginBottom: 20}}
      />
    </Screen>
  );
}

export {OtpVerifyScreen};
