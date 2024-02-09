/**
 * App loader
 * @format
 */

import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';

import { useTheme } from '@app/styles';
import { selectLoader } from '@app/modules/common';
import { getStyles } from './styles';

const Loader = () => {
  const theme = useTheme();
  const styles = getStyles(theme);
  const visible = useSelector(selectLoader);

  if (!visible) {
    return null;
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={theme.colors.primaryLight} />
    </View>
  );
};

export { Loader };
