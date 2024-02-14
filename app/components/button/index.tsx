/**
 * Button component
 * @format
 */

import React from 'react';
import {StyleProp, Pressable, ViewStyle, TextStyle} from 'react-native';

import {Label} from '../label';
import {styles} from './styles';
import {Colors} from '@app/styles';

type ButtonProp = {
  title: string;
  buttonContainerStyle?: StyleProp<ViewStyle>;
  buttonLabelStyle?: StyleProp<TextStyle>;
  onPress?: Function;
  isDisable?: boolean;
};

const Button = (props: ButtonProp) => {
  const {
    buttonContainerStyle,
    buttonLabelStyle,
    title,
    onPress,
    isDisable = false,
  } = props;

  return (
    <Pressable
      disabled={isDisable}
      onPress={() => {
        onPress && onPress();
      }}
      style={[
        styles.buttonContainer,
        buttonContainerStyle,
        isDisable && {
          backgroundColor: Colors.white,
          borderColor: Colors.dustyGray,
        },
      ]}>
      <Label
        style={[
          styles.buttonLabel,
          buttonLabelStyle,
          isDisable && {color: Colors.dustyGray},
        ]}>
        {title}
      </Label>
    </Pressable>
  );
};

export {Button};
