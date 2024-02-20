/**
 * security Screen
 * @format
 */

import React, {useState} from 'react';
import {Image, Linking, Pressable, StatusBar, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import Clipboard from '@react-native-clipboard/clipboard';
import {showMessage} from 'react-native-flash-message';

import {Screen, Label, SwitchToggle} from '@app/components';
import {Images} from '@app/constants';
import {Colors, useTheme} from '@app/styles';
import {getStyles} from './styles';

function SecurityScreen({navigation, route}: any) {
  const {name, password, email, image} = route?.params;

  const theme = useTheme();
  const styles = getStyles(theme);
  const [value, setValue] = useState('');

  const copyToClipboard = (password: string) => {
    Clipboard.setString(password);
  };

  const showToast = () => {
    showMessage({type: 'info', message: 'password copied to clipboard!'});
  };

  const data = [
    {label: 'Details & settings', value: '1'},
    {label: 'Item 2', value: '2'},
  ];

  return (
    <Screen style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <View style={styles.securityHeader}>
        <Pressable
          style={{flexDirection: 'row'}}
          onPress={() => navigation.goBack()}>
          <Image source={Images.backIcon} style={styles.backIconStyle} />
          <Label style={styles.backLabel}>back</Label>
        </Pressable>
        <Image source={Images.trashIcon} style={styles.headerIconStyle} />
      </View>
      <View style={styles.securityDetailsContainer}>
        <Image source={image} style={styles.securityDetailImage} />
        <View style={styles.nameEmailContainer}>
          <Label style={{fontSize: 18}}>{name}</Label>
          <Label style={styles.emailLabel}>{email}</Label>
        </View>
      </View>
      <View style={styles.container}>
        <View style={styles.dropdownContainer}>
          <Dropdown
            placeholder="Details & settings"
            placeholderStyle={{color: 'black'}}
            iconStyle={styles.dropdownIconStyle}
            value={value}
            labelField="label"
            valueField="value"
            data={data}
            onChange={item => {
              setValue(item?.value);
            }}
            style={styles.dropdownStyle}
          />
        </View>
        <View style={styles.detailsSettingContainer}>
          <Label style={[styles.detailsLinkContainer, {marginTop: 10}]}>
            Link
          </Label>
          <Label
            style={[styles.detailsAppLinkLabel, {marginTop: 10}]}
            onPress={() =>
              Linking.openURL(
                'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwj26Yjzt62EAxVQCoMDHdx3AaAYABAAGgJzZg&ase=2&gclid=CjwKCAiAibeuBhAAEiwAiXBoJK-_rIbyuVsT4BK9iOg4AqlB2Y9625FXgsYv_TToF8fV0H1Y3t5XohoC6hMQAvD_BwE&ohost=www.google.com&cid=CAESVuD2-Ut6m4K7ttOias_IP7pLLk-nxcvysuwlj3VLWKamkZ9uck8b6hpfaAJQCD0Rnz4lJ4N3bknVCWdv448Nq1yCZpfG5HpM2rOhNDQqNjON-GZthHkz&sig=AOD64_1Y5B9ZUALKOPjz5xMKZeg9UGodNA&q&nis=4&adurl&ved=2ahUKEwjv94Lzt62EAxWuRmwGHfLgCtgQ0Qx6BAgFEAE',
              )
            }>
            adobe.com
          </Label>
        </View>
        <View style={styles.detailsSettingContainer}>
          <Label style={styles.detailsLinkContainer}>User id</Label>
          <Label style={styles.emailAndPasswordLabel}>{email}</Label>
        </View>
        <View style={styles.detailsSettingContainer}>
          <Label style={styles.detailsLinkContainer}>Password</Label>
          <Label style={styles.emailAndPasswordLabel}>{password}</Label>
        </View>
        <View style={styles.detailsSettingContainer}>
          <Label style={styles.detailsLinkContainer}>Autofill</Label>
          <SwitchToggle />
        </View>
        <View style={styles.bottomButtonContainer}>
          <Pressable
            style={styles.copyPasswordButton}
            onPress={() => {
              copyToClipboard(password);
              password !== '' && showToast();
            }}>
            <Label style={styles.copyButtonLabel}>Copy password</Label>
          </Pressable>
          <Pressable style={styles.copyPasswordButton}>
            <Label style={styles.copyButtonLabel}>Change password</Label>
          </Pressable>
        </View>
      </View>
    </Screen>
  );
}

export {SecurityScreen};
