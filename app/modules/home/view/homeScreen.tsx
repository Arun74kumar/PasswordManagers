/**
 * Home Screen
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {showMessage} from 'react-native-flash-message';
import {firebase} from '@react-native-firebase/database';
import { useFocusEffect } from '@react-navigation/native';
import {useDispatch} from 'react-redux';

import {Screen, Label, Header} from '@app/components';
import {Images} from '@app/constants';
import {setPasswordData} from '@app/modules/common';
import {Routes} from '@app/navigator';
import {Colors, useTheme} from '@app/styles';
import {getStyles} from './styles';

function HomeScreen({navigation}: any) {
  const theme = useTheme();
  const styles = getStyles(theme);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();

  useFocusEffect(
    React.useCallback(() => {
      const fetchData = async () => {
        try {
          const item = await firebase.database().ref('/password').once('value');
          const passwordData = item.val();
          dispatch(setPasswordData(Object?.values(passwordData) || []));
          setData(Object?.values(passwordData) || []);
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      };
      fetchData();
    }, []),
  );

  const RenderPasswordData = ({item, index}: any) => {
    return (
      <View style={styles.paswordDataContainer}>
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
              showToast();
            }}>
            <Image source={Images.copyIcon} style={styles.iconStyle} />
          </Pressable>
        </View>
      </View>
    );
  };

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
        <FlatList
          scrollEnabled={false}
          data={data}
          renderItem={({item, index}) => (
            <RenderPasswordData item={item} index={index} />
          )}
        />
      </ScrollView>
    </Screen>
  );
}

export {HomeScreen};
