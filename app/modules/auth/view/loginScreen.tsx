/**
 * Login Screen
 * @format
 */

import React from 'react';

import { Screen, Label } from '@app/components';
import { useTheme } from '@app/styles';
import { getStyles } from './styles';

function LoginScreen() {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <Screen style={styles.container}>
      <Label>This is login screen</Label>
    </Screen>
  );
}

export { LoginScreen };
