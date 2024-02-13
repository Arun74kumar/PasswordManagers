/**
 * onboarding Screen
 * @format
 */

import React, {useCallback, useState} from 'react';
import {
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StatusBar,
  View,
  useWindowDimensions,
} from 'react-native';

import {Screen, Label} from '@app/components';
import {OnboardingData} from '@app/constants/onboardScreenData';
import {Button} from '@app/components/button';
import {Routes} from '@app/navigator';
import {Colors, useTheme} from '@app/styles';
import {getStyles} from './styles';

function OnboardingScreen({navigation}:any) {
  const theme = useTheme();
  const styles = getStyles(theme);
  const {width} = useWindowDimensions();
  const [selectedPage, setSelectedPage] = useState(0);
  const onScroll = useCallback(
    (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const slideSize = event.nativeEvent.layoutMeasurement.width;
      const index = event.nativeEvent.contentOffset.x / slideSize;
      const Index = Math.round(index);
      setSelectedPage(Index);
    },
    [],
  );
  const RenderOnboardingData = ({item, index}: any) => {
    return (
      <View style={{flex: 1, width: width}}>
        <View style={styles.borderMainContainer}>
          <View style={styles.borderContainer}>
            {selectedPage == index ? (
              <View style={styles.borderInnerContainer}></View>
            ) : null}
          </View>
          <View style={styles.borderContainer}>
            {selectedPage == 1 || selectedPage == 2 ? (
              <View style={styles.borderInnerContainer}></View>
            ) : null}
          </View>
          <View style={styles.borderContainer}>
            {selectedPage == 2 ? (
              <View style={styles.borderInnerContainer}></View>
            ) : null}
          </View>
        </View>
        <View style={{flex: 1}}>
          {selectedPage == 0 || selectedPage == 1 ? (
            <Image source={item?.image} style={styles.onboardingImage} />
          ) : null}
          {selectedPage == 2 && (
            <>
              <Image
                source={item?.passBlockImage}
                style={styles.passBlockImage}
              />
              <Label style={styles.passBlockLabel}>
                {item?.passBlockLabel}
              </Label>
              <Label style={styles.frictionlessSecurity}>
                {item?.frictionlessSecurity}
              </Label>
            </>
          )}
          <Label style={styles.onboardinTitle}>{item.title}</Label>
          {selectedPage !== 2 && <View style={styles.titleBorder}></View>}
          <Label style={styles.onboaringSubtitle}>{item.subtitle}</Label>
          <Label style={styles.onboardingDescription}>{item.description}</Label>
        </View>
        <View style={styles.registerButtonContainer}>
          <Button
            title="Register"
            onPress={() => {
              navigation.navigate(Routes.authTab);
            }}
          />
        </View>
        <View style={styles.registerButtonContainer}>
          <Button
            title="Already have an account"
            buttonContainerStyle={{backgroundColor: Colors.white}}
            buttonLabelStyle={{color: Colors.Shark}}
          />
        </View>
      </View>
    );
  };

  return (
    <Screen style={styles.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <FlatList
        data={OnboardingData}
        horizontal
        pagingEnabled
        bounces={false}
        style={{marginTop: 25}}
        onScroll={onScroll}
        renderItem={({item, index}) => {
          return <RenderOnboardingData item={item} index={index} />;
        }}
      />
    </Screen>
  );
}

export {OnboardingScreen};
