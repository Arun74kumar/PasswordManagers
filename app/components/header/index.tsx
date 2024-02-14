/**
 * header Component
 * @format
 */

import React from 'react';
import {Pressable, View} from 'react-native';

import {Label} from '../label';
import {CacheImage} from '../cache-image';
import {Images} from '@app/constants';
import {useTheme} from '@app/styles';
import {getStyles} from './styles';
import {NavigationService} from '@app/helpers';

type props = {
  LeftElement?: React.ReactNode;
  rightElement?: React.ReactNode;
  title: string;
  onPressLeft?: Function;
  onPressRight?: Function;
  showLeft?: Boolean;
};

const Header = (prop: props) => {
  const {
    LeftElement,
    rightElement,
    title,
    onPressLeft,
    onPressRight,
    showLeft = true,
  } = prop;

  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <View style={styles.headerMainContainer}>
        {showLeft ? (
          LeftElement ? (
            <Pressable
              onPress={() => {
                onPressLeft && onPressLeft();
              }}
              style={[styles.sideContainer]}>
              {LeftElement}
            </Pressable>
          ) : (
            <Pressable
              onPress={() => {
                onPressLeft ? onPressLeft() : NavigationService.goBack();
              }}
              style={[styles.sideContainer]}>
              <CacheImage
                source={Images.backIcon}
                style={styles.backIconStyle}
              />
            </Pressable>
          )
        ) : (
          <View style={styles.sideContainer} />
        )}
        <Label style={styles.titleStyle}>{title}</Label>
        <Pressable
          onPress={() => {
            onPressRight && rightElement && onPressRight();
          }}
          style={[styles.sideContainer, styles.rightContainer]}>
          {rightElement && rightElement}
        </Pressable>
      </View>
    </View>
  );
};

export {Header};
