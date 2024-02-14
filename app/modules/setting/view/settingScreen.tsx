/**
 * Setting Screen
 * @format
 */

import React from 'react';
import {Image, Pressable, StatusBar, View} from 'react-native';

import {Screen, Header, Label, SwitchToggle} from '@app/components';
import {Images, strings} from '@app/constants';
import {Colors, useTheme} from '@app/styles';
import {getStyles} from './styles';
import {Routes} from '@app/navigator';

function SettingScreen({navigation}: any) {
  const theme = useTheme();
  const styles = getStyles(theme);

  const LeftElement = () => {
    return <Image source={Images.userIcon} style={styles.headerIconStyle} />;
  };
  const RightElement = () => {
    return <Image source={Images.plusIcon} style={styles.headerIconStyle} />;
  };

  return (
    <Screen style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <Header
        title="Setting"
        rightElement={<RightElement />}
        LeftElement={<LeftElement />}
        onPressLeft={() => navigation.navigate(Routes.profile)}
        onPressRight={() => navigation.navigate(Routes.profile)}
      />
      <View style={[styles.container, {marginTop: 20}]}>
        <Pressable
          style={styles.settingConentContainer}
          onPress={() => {
            navigation.navigate(Routes.profile);
          }}>
          <Label>{strings.profileLabel}</Label>
          <Image source={Images.arrowDownIcon} style={styles.arrowStyle} />
        </Pressable>
        <Pressable style={styles.settingConentContainer} onPress={() => {}}>
          <Label>{strings.permissions}</Label>
          <Image source={Images.arrowDownIcon} style={styles.arrowStyle} />
        </Pressable>
        <View style={styles.settingConentContainer}>
          <Label>{strings.sync}</Label>
          <SwitchToggle />
        </View>
        <View style={styles.settingConentContainer}>
          <Label>{strings.autofill}</Label>
          <SwitchToggle />
        </View>
        <Pressable style={styles.settingConentContainer} onPress={() => {}}>
          <Label>{strings.about}</Label>
          <Image source={Images.arrowDownIcon} style={styles.arrowStyle} />
        </Pressable>
        <Pressable style={styles.settingConentContainer} onPress={() => {}}>
          <Label>{strings.help}</Label>
          <Image source={Images.arrowDownIcon} style={styles.arrowStyle} />
        </Pressable>
        <Pressable style={styles.settingConentContainer} onPress={() => {}}>
          <Label>{strings.version}</Label>
          <Label style={{color: Colors.dustyGray}}>{'1.2.2'}</Label>
        </Pressable>
      </View>
    </Screen>
  );
}

export {SettingScreen};
