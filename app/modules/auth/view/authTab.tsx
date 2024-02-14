/**
 * register and login screen
 * @format
 */

import React, {useState} from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  TextInput,
  View,
} from 'react-native';

import {Screen, Label,Button} from '@app/components';
import {strings, Images} from '@app/constants';
import {Colors, useTheme} from '@app/styles';
import {getStyles} from './styles';
import {Routes} from '@app/navigator';

function AuthTab({navigation}: any) {
  const theme = useTheme();
  const styles = getStyles(theme);
  const [selectedTab, setSelectedTab] = useState(0);

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
      <ScrollView style={[styles.container, {marginTop: 10}]}>
        <View style={styles.authMainBorderContainer}>
          <View style={styles.authRowContainer}>
            <Pressable
              style={[
                styles.registerTabContainer,
                {
                  backgroundColor:
                    selectedTab == 0 ? Colors.Shark : Colors.white,
                },
              ]}
              onPress={() => {
                setSelectedTab(0);
              }}>
              <Label
                style={{color: selectedTab == 0 ? Colors.white : Colors.black}}>
                {strings.registerLabel}
              </Label>
            </Pressable>
            <Pressable
              onPress={() => {
                setSelectedTab(1);
              }}
              style={[
                styles.registerTabContainer,
                {
                  backgroundColor:
                    selectedTab == 1 ? Colors.Shark : Colors.white,
                },
              ]}>
              <Label
                style={{color: selectedTab == 1 ? Colors.white : Colors.black}}>
                {strings.loginLabel}
              </Label>
            </Pressable>
          </View>
          {selectedTab == 0 ? (
            <>
              <Label style={{lineHeight: 40}}>{strings.peronalDetails}</Label>
              <TextInput
                placeholder="First name"
                placeholderTextColor={Colors.dustyGray}
                style={styles.InputStyle}
              />
              <TextInput
                placeholder="Last name"
                placeholderTextColor={Colors.dustyGray}
                style={styles.InputStyle}
              />
              <TextInput
                placeholder="Mobile no."
                placeholderTextColor={Colors.dustyGray}
                style={styles.InputStyle}
              />
            </>
          ) : (
            <>
              <Label style={{lineHeight: 40}}>{strings.enteMobileNumber}</Label>
              <TextInput
                placeholder="Mobile no."
                placeholderTextColor={Colors.dustyGray}
                style={styles.InputStyle}
              />
            </>
          )}
        </View>
      </ScrollView>
      <Button
        onPress={() => {
          navigation.navigate(Routes.otpVerify);
        }}
        title="Get verification code"
        buttonContainerStyle={{
          marginBottom: 15,
          backgroundColor: Colors.white,
          borderColor: Colors.dustyGray,
        }}
        buttonLabelStyle={{color: Colors.dustyGray}}
      />
    </Screen>
  );
}

export {AuthTab};
