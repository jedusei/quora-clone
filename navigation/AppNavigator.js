import React from 'react';
import { AsyncStorage } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import OnboardingNavigator from './OnboardingNavigator';

export default function AppNavigator() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  React.useEffect(() => {
    AsyncStorage.getItem('user', (err, user) => setIsLoggedIn(Boolean(user)));
  }, []);
  const AppContainer = createAppContainer(
    createSwitchNavigator({
      Onboarding: OnboardingNavigator,
      Main: MainTabNavigator
    }, {
      initialRouteName: isLoggedIn ? "Main" : "Onboarding"
    })
  );
  return <AppContainer />;
}