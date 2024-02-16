/**
 * Home Screen
 * @format
 */

import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';

import {Screen, Label, Header} from '@app/components';
import {PasswordData} from '@app/constants/passwordDummyData';
import {Images} from '@app/constants';
import {Routes} from '@app/navigator';
import {Colors, useTheme} from '@app/styles';
import {getStyles} from './styles';

function HomeScreen({navigation}: any) {
  const theme = useTheme();
  const styles = getStyles(theme);

  const LeftElement = () => {
    return <Image source={Images.userIcon} style={styles.headerIconStyle} />;
  };
  const RightElement = () => {
    return <Image source={Images.plusIcon} style={styles.headerIconStyle} />;
  };

  const RenderPasswordData = ({title, items}: any) => {
    return (
      <View style={styles.paswordDataContainer}>
        <Label style={styles.titleLabel}>{title}</Label>
        <View>
          {items.map((item: any, index: any) => (
            <View style={styles.paswordDataRow} key={index}>
              <Image source={item?.image} style={styles.imageStyle} />
              <View style={styles.nameSubtitleContainer}>
                <Label key={index} style={styles.subtitle}>
                  {item?.name}
                </Label>
                <Label key={item?.email} style={styles.emailLabel}>
                  {item?.email}
                </Label>
              </View>
              <Pressable onPress={() => {}}>
                <Image source={item?.icon} style={styles.iconStyle} />
              </Pressable>
            </View>
          ))}
        </View>
      </View>
    );
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
          data={PasswordData}
          renderItem={({item}) => (
            <RenderPasswordData title={item?.title} items={item?.items} />
          )}
          keyExtractor={item => item.id.toString()}
        />
      </ScrollView>
    </Screen>
  );
}

export {HomeScreen};
