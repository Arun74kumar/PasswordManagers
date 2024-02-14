/**
 * App Main Navigator
 * @format
 */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Routes} from './constants';
import {BottomTabBar} from './bottomTab';
import {ProfileScreen} from '@app/modules/profile';

// Screens

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.bottomTabBar} component={BottomTabBar} />
      <Stack.Screen name={Routes.profile} component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export {MainStack};
