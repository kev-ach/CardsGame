import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

import ScreenHome from '../screens/ScreenHome';
import Game from '../screens/Game';

var AppNavigator = createStackNavigator({
  
  'Home': {screen: ScreenHome},
  'Game': {screen: Game},
  
})

export default createAppContainer(
  AppNavigator
);
