/**
 * Bottom navigator
 * @format
 */

import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {HomeScreen} from '@app/modules/home';
import {Images} from '@app/constants';
import {SettingScreen} from '@app/modules/setting';
import {Colors} from '@app/styles';
import {AnalysisScreen} from '@app/modules/analysis';
import {SearchScreen} from '@app/modules/search';

const BottomTab = createBottomTabNavigator<BottomStackParamList>();

function BottomTabBar() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: {
          color: Colors.Shark,
        },
        tabBarStyle: {
          position: 'absolute',
          height: 50,
          backgroundColor: Colors.white,
          borderColor: Colors.Shark,
        },
      }}>
      <BottomTab.Screen
        name={'HOME'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? Images.homeFillIcon : Images.homeIcon}
              style={{
                width: 25,
                resizeMode: 'contain',
                tintColor: focused ? Colors.black : Colors.dustyGray,
              }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={'ANALYSIS'}
        component={AnalysisScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? Images.analysisFillIcon : Images.analysisIcon}
              style={{
                width: 25,
                resizeMode: 'contain',
                tintColor: focused ? Colors.black : Colors.dustyGray,
              }}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={'SEARCH'}
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="search" size={24} color={'black'} />
            ) : (
              <Ionicons name="search-outline" size={24} color={'black'} />
            ),
        }}
      />
      <BottomTab.Screen
        name={'SETTING'}
        component={SettingScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={focused ? Images.settingFillIcon : Images.settingIcon}
              style={{
                width: 25,
                resizeMode: 'contain',
                tintColor: focused ? Colors.black : Colors.dustyGray,
              }}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

export {BottomTabBar};
