/**
 * profile Screen
 * @format
 */

import React, {useState} from 'react';
import {Image, Pressable, StatusBar, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

import {Screen, Header, Label} from '@app/components';
import {Images, strings} from '@app/constants';
import {Routes} from '@app/navigator';
import {Colors, useTheme} from '@app/styles';
import {getStyles} from './styles';

function ProfileScreen({navigation}: any) {
  const theme = useTheme();
  const styles = getStyles(theme);
  const [value, setValue] = useState('');

  const data = [
    {label: 'Steve’s team', value: '1'},
    {label: 'arun’s team', value: '2'},
  ];

  const LeftElement = () => {
    return <Image source={Images.profileIcon} style={styles.headerIconStyle} />;
  };
  const RightElement = () => {
    return <Image source={Images.plusIcon} style={styles.headerIconStyle} />;
  };

  return (
    <Screen style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <Header
        title="Profile"
        rightElement={<RightElement />}
        LeftElement={<LeftElement />}
        onPressRight={() => navigation.navigate(Routes.newRecordScreen)}
      />
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <Image source={Images.profile} style={styles.profileImageStyle} />
          <Label style={styles.profileName}>Steve Smith</Label>
          <Label style={styles.phoneNumber}>8758066XXX</Label>
          <Pressable style={styles.editLabelContaier}>
            <Label style={styles.editLabel}>Edit profile</Label>
          </Pressable>
        </View>
        <Pressable style={styles.profileConentContainer}>
          <Label>{strings.switchAccount}</Label>
          <View style={styles.switchAccountContainer}>
            <Dropdown
              placeholder="Steve’s team"
              placeholderStyle={{color: 'black', fontSize: 11}}
              iconStyle={styles.dropdownIconStyle}
              value={value}
              selectedTextStyle={{fontSize: 11, color: 'black'}}
              labelField="label"
              valueField="value"
              data={data}
              onChange={item => {
                setValue(item?.value);
              }}
              style={styles.dropdownStyle}
            />
          </View>
        </Pressable>
        <Pressable style={styles.profileConentContainer} onPress={() => {}}>
          <Label>{strings.security}</Label>
          <Image source={Images.arrowDownIcon} style={styles.arrowStyle} />
        </Pressable>
        <Pressable style={styles.profileConentContainer} onPress={() => {}}>
          <Label>{strings.trustedDevice}</Label>
          <Image source={Images.arrowDownIcon} style={styles.arrowStyle} />
        </Pressable>
        <Pressable style={styles.profileConentContainer} onPress={() => {}}>
          <Label>{strings.backup}</Label>
          <Image source={Images.arrowDownIcon} style={styles.arrowStyle} />
        </Pressable>
      </View>
      <Pressable style={styles.logoutButtonContainer}>
        <Label style={styles.logoutLabel}>Logout</Label>
      </Pressable>
    </Screen>
  );
}

export {ProfileScreen};
