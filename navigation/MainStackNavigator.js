import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { StatusBar } from 'react-native';

import MainTabNavigator from './TabNavigator';
import AnswerScreen from '../screens/Answer';

export default createStackNavigator({
    Tabs: MainTabNavigator,
    Answer: AnswerScreen
}, {
    defaultNavigationOptions: {
        header: null
    }
}); 