/**
 * analysis Screen
 * @format
 */

import React from 'react';
import {Image, Pressable, StatusBar, View} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

import {Screen, Header, Label} from '@app/components';
import {Images, strings} from '@app/constants';
import {Colors, useTheme} from '@app/styles';
import {getStyles} from './styles';
import {Routes} from '@app/navigator';

function AnalysisScreen({navigation}: any) {
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
        title="Security"
        rightElement={<RightElement />}
        LeftElement={<LeftElement />}
        onPressLeft={() => navigation.navigate(Routes.profile)}
        onPressRight={() => navigation.navigate(Routes.profile)}
      />
      <View style={{alignItems: 'center', marginTop: 40}}>
        <CircularProgress
          value={82}
          progressValueFontSize={18}
          inActiveStrokeColor={'black'}
          activeStrokeColor="white"
          activeStrokeWidth={5}
          progressValueColor={'black'}
          valueSuffix={'%'}
        />
        <Label style={{marginTop: 5, fontWeight: '500'}}>82% secured</Label>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 25,
          marginTop: 30,
        }}>
        <View style={styles.statusRowContainer}>
          <Label style={{marginBottom: 5, fontWeight: '500', fontSize: 16}}>
            82
          </Label>
          <Label>Safe</Label>
        </View>
        <View style={styles.statusRowContainer}>
          <Label style={{marginBottom: 5, fontWeight: '500', fontSize: 16}}>
            12
          </Label>
          <Label>Weak</Label>
        </View>
        <View style={styles.statusRowContainer}>
          <Label style={{marginBottom: 5, fontWeight: '500', fontSize: 16}}>
            8
          </Label>
          <Label>Risk</Label>
        </View>
      </View>
    </Screen>
  );
}

export {AnalysisScreen};
