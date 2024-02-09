/**
 * Label on top of RN Text
 * @format
 */

import React from 'react';
import { Text } from 'react-native';

import { useTheme } from '@app/styles';
import { styles } from './styles';

export type LabelProps = React.ComponentProps<typeof Text> & {
  children: string | React.ReactNode,
  uppercase?: boolean,
  bold?: boolean,
  semiBold?: boolean,
};

const Label = (props: LabelProps) => {
  const { style, uppercase, children, bold, semiBold, ...rest } = props;

  const theme = useTheme();

  return (
    <Text
      style={[
        theme?.Text?.light,
        styles.textStyle,
        bold && styles.boldStyle,
        semiBold && styles.semiBoldStyle,
        style,
      ]}
      {...rest}>
      {typeof children === 'string' && uppercase
        ? children.toUpperCase()
        : children}
    </Text>
  );
};

export { Label };
