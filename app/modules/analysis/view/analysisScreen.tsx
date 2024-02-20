/**
 * analysis Screen
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
import CircularProgress from 'react-native-circular-progress-indicator';
import * as Progress from 'react-native-progress';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {Screen, Header, Label} from '@app/components';
import {Images} from '@app/constants';
import {PasswordData} from '@app/constants/passwordDummyData';
import {Routes} from '@app/navigator';
import {Colors, useTheme} from '@app/styles';
import {getStyles} from './styles';

function AnalysisScreen({navigation}: any) {
  const theme = useTheme();
  const styles = getStyles(theme);

  const LeftElement = () => {
    return <Image source={Images.userIcon} style={styles.headerIconStyle} />;
  };
  const RightElement = () => {
    return <Image source={Images.plusIcon} style={styles.headerIconStyle} />;
  };

  const RenderSecurityData = ({items}: any) => {
    return (
      <>
        {items?.map((item: any, index: any) => (
          <View style={styles.securityDataContainer} key={index}>
            <View style={{flexDirection: 'column', alignItems: 'center'}}>
              <Image source={item?.image} style={styles.imageStyle} />
              <Label style={{fontSize: 12}}>{item?.status}</Label>
            </View>
            <View style={styles.nameSubtitleContainer}>
              <Label key={index} style={styles.subtitle}>
                {item?.name}
              </Label>
              <Label style={styles.password}>{item?.password}</Label>
              <Progress.Bar
                progress={item?.value}
                width={255}
                style={styles.progressBarStyle}
                color={
                  item?.value >= 0.8
                    ? '#1ED760'
                    : item?.value <= 0.3
                    ? '#E30A17'
                    : '#F8981D'
                }
                borderColor="#D9D9D9"
                borderWidth={0}
              />
            </View>
            <Pressable
              onPress={() => {
                navigation.navigate(Routes.securityScreen, {
                  name: item?.name,
                  password: item?.password,
                  email: item?.email,
                  image: item?.image,
                });
              }}>
              <Image source={item?.arrowIcon} style={styles.arrowStyle} />
            </Pressable>
          </View>
        ))}
      </>
    );
  };

  return (
    <Screen style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <Header
        title="Security"
        rightElement={<RightElement />}
        LeftElement={<LeftElement />}
        onPressLeft={() => navigation.navigate(Routes.profile)}
        onPressRight={() => navigation.navigate(Routes.newRecordScreen)}
      />
      <View style={styles.progressBarContainer}>
        <CircularProgress
          value={82}
          progressValueFontSize={18}
          inActiveStrokeColor={'black'}
          activeStrokeColor="white"
          activeStrokeWidth={8}
          progressValueColor={'black'}
          valueSuffix={'%'}
          inActiveStrokeWidth={14}
        />
        <Label style={styles.securedLevel}>82% secured</Label>
      </View>
      <View style={styles.securityStatusContainer}>
        <View style={styles.statusRowContainer}>
          <Label style={styles.securityStatus}>82</Label>
          <Label style={styles.statusLabel}>Safe</Label>
        </View>
        <View style={styles.statusRowContainer}>
          <Label style={styles.securityStatus}>12</Label>
          <Label style={styles.statusLabel}>Weak</Label>
        </View>
        <View style={styles.statusRowContainer}>
          <Label style={styles.securityStatus}>8</Label>
          <Label style={styles.statusLabel}>Risk</Label>
        </View>
      </View>
      <View style={styles.container}>
        <Pressable style={styles.analysisContainer} onPress={() => {}}>
          <Label>{'Analysis'}</Label>
          <Ionicons name="filter-outline" size={24} color={'black'} />
        </Pressable>
        <ScrollView style={styles.analysisListContainer}>
          <FlatList
            scrollEnabled={false}
            data={PasswordData}
            renderItem={({item}) => <RenderSecurityData items={item?.items} />}
            keyExtractor={item => item.id.toString()}
          />
        </ScrollView>
      </View>
    </Screen>
  );
}

export {AnalysisScreen};
