/**
 * onboarding Screen
 * @format
 */

import React from 'react';
import {View} from 'react-native';

import {Screen, Label} from '@app/components';
import {useTheme} from '@app/styles';
import {getStyles} from './styles';

function OnboardingScreen() {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <Screen style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Label>OnboardingScreen</Label>
      </View>
    </Screen>
  );
}

export {OnboardingScreen};
