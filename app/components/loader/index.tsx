/**
 * App loader
 * @format
 */

import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { useTheme } from '@app/styles';
import { getStyles } from './styles';

const Loader = () => {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.primary} />
    </View>
  );
};

export { Loader };
