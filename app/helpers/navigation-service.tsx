/**
 * Navigation Service
 * @format
 */

import React from 'react';
import { CommonActions, StackActions } from '@react-navigation/native';

// Navigation container reference
const navigationRef = React.createRef();
const isReady = React.createRef();

// Navigate to a route
function navigate(name, params) {
  navigationRef.current?.dispatch(CommonActions.navigate({ name, params }));
}

// Go back from current screen to previous
function goBack() {
  navigationRef.current?.dispatch(CommonActions.goBack());
}

// Replace current screen with provided screen
function replace(name, params) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}

export const NavigationService = {
  navigationRef,
  navigate,
  goBack,
  replace,
  isReady,
};
