import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { StatusBar } from 'react-native';

import MainTabNavigator from './TabNavigator';
import WebViewScreen from '../screens/WebView';

export default createStackNavigator({
    Tabs: MainTabNavigator,
    WebView: WebViewScreen
}, {
    defaultNavigationOptions: {
        header: null
    }
}); 