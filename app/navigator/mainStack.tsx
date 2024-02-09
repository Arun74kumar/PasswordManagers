/**
 * App Main Navigator
 * @format
 */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Routes } from './constants';
import { LoginScreen } from '@app/modules/auth';

// Screens

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='login' component={LoginScreen}/>
    </Stack.Navigator>
  );
};

export { MainStack };
