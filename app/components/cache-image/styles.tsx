/**
 * cache image Styles
 * @format
 */

import { ScaledSheet } from '@app/styles';

export const styles = ScaledSheet.create({
  placeholderImageStyle: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -1,
  },
  loaderStyle: {
    position: 'absolute',
    alignSelf: 'center',
    top: '40%',
  },
});
