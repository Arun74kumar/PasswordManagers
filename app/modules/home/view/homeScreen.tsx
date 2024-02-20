/**
 * Home Screen
 * @format
 */

import React, {useEffect, useState} from 'react';
import {Image, Pressable, ScrollView, StatusBar, View} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {showMessage} from 'react-native-flash-message';
import {firebase} from '@react-native-firebase/database';

import {Screen, Label, Header} from '@app/components';
import {Images} from '@app/constants';
import {Routes} from '@app/navigator';
import {Colors, useTheme} from '@app/styles';
import {getStyles} from './styles';

function HomeScreen({navigation}: any) {
  const theme = useTheme();
  const styles = getStyles(theme);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await firebase
          .database()
          .ref('/password')
          .once('value');
        const passwordData = snapshot.val();
        setData(passwordData || []);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const copyToClipboard = (password: string) => {
    Clipboard.setString(password);
  };

  const showToast = () => {
    showMessage({type: 'info', message: 'password copied to clipboard!'});
  };

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
        title="Passwords"
        rightElement={<RightElement />}
        LeftElement={<LeftElement />}
        onPressLeft={() => navigation.navigate(Routes.profile)}
        onPressRight={() => navigation.navigate(Routes.newRecordScreen)}
      />
      <ScrollView style={{marginBottom: 50, marginTop: 30}}>
        <View style={styles.paswordDataContainer}>
          {Object.values(data)?.map((item: any, index: any) => (
            <View style={styles.paswordDataRow} key={index}>
              <Image source={Images.adoveIcon} style={styles.imageStyle} />
              <View style={styles.nameSubtitleContainer}>
                <Label key={index} style={styles.subtitle}>
                  {item?.appName}
                </Label>
                <Label key={item?.email} style={styles.emailLabel}>
                  {item?.email}
                </Label>
              </View>
              <Pressable
                onPress={() => {
                  copyToClipboard(item?.password);
                  item?.password !== '' && showToast();
                }}>
                <Image source={Images.copyIcon} style={styles.iconStyle} />
              </Pressable>
            </View>
          ))}
        </View>
      </ScrollView>
    </Screen>
  );
}

export {HomeScreen};
