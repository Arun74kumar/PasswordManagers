/**
 * switchToggle component
 * @format
 */

import React, {useState} from 'react';
import {Switch} from 'react-native-switch';

import {styles} from './styles';
import {Colors} from '@app/styles';

const SwitchToggle = () => {
  const [state, setState] = useState(false);

  return (
    <Switch
      value={state}
      onValueChange={val => setState(!state)}
      circleSize={18}
      barHeight={17}
      backgroundActive={'#105DFB'}
      backgroundInactive={Colors.dustyGray}
      circleActiveColor={'white'}
      changeValueImmediately={true}
      innerCircleStyle={styles.innerCircleStyle}
      renderActiveText={false}
      renderInActiveText={false}
      switchLeftPx={2}
      switchRightPx={2}
    />
  );
};

export {SwitchToggle};
