import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { StatusBar } from 'react-native';

import LandingScreen from '../screens/Landing';

export default createStackNavigator({
    Landing: LandingScreen
}, {
    defaultNavigationOptions: {
        header: <StatusBar barStyle='dark-content' backgroundColor="#f7f7f8" />
    }
}); 