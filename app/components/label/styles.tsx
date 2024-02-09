/**
 * label Styles
 * @format
 */

import { Colors, ScaledSheet, Typography } from '@app/styles';

export const styles = ScaledSheet.create({
  textStyle: {
    fontFamily: Typography.fonts.regular,
    color: Colors.black,
  },
  boldStyle: {
    fontFamily: Typography.fonts.bold,
  },
  semiBoldStyle: {
    fontFamily: Typography.fonts.semiBold,
  },
});
