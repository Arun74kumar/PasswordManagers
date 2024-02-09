/**
 * Screen container
 * @format
 */

import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useThemedStyle } from '@app/styles';
import { getStyles } from './styles';

const Screen = props => {
  const { children, style, safeAreaProps, statusBarProps } = props;

  const styles = useThemedStyle(getStyles);

  return (
    <React.Fragment>
      <SafeAreaView style={[styles.safeAreaStyle]} edges={['top']} />
      <SafeAreaView
        edges={['left', 'right', 'bottom']}
        {...safeAreaProps}
        style={[styles.container, style]}>
        <StatusBar
          animated={true}
          backgroundColor={'#FAFAFA'}
          barStyle={'dark-content'}
          {...statusBarProps}
        />
        {children}
      </SafeAreaView>
    </React.Fragment>
  );
};

export { Screen };
