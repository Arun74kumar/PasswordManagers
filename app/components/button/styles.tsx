/**
 * button Style
 * @format
 */

import {ms} from 'react-native-size-matters';

import {ScaledSheet, Colors} from '@app/styles';

export const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    height: ms(50),
    width: '80%',
    borderWidth: 1,
    borderRadius: ms(10),
    backgroundColor: Colors.Shark,
    borderColor: Colors.Shark,
  },
  buttonLabel: {
    fontSize: ms(14),
    fontWeight: '500',
    color: Colors.white,
  },
});
