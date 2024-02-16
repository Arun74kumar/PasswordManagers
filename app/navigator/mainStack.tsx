/**
 * App Main Navigator
 * @format
 */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Routes} from './constants';
import {BottomTabBar} from './bottomTab';

// Screens
import {ProfileScreen} from '@app/modules/profile';
import {SecurityScreen} from '@app/modules/analysis';
import {NewRecordScreen} from '@app/modules/newRecord';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.bottomTabBar} component={BottomTabBar} />
      <Stack.Screen name={Routes.profile} component={ProfileScreen} />
      <Stack.Screen name={Routes.securityScreen} component={SecurityScreen} />
      <Stack.Screen name={Routes.newRecordScreen} component={NewRecordScreen} />
    </Stack.Navigator>
  );
};

export {MainStack};
