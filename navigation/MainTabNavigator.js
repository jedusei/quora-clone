import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/Home';
import QuestionsScreen from '../screens/Questions';
import SpacesScreen from '../screens/Spaces';
import NotifsScreen from '../screens/Notifs';
import { tintColor } from '../constants/Colors';
import Header from '../components/Header';

const config = {
  defaultNavigationOptions: ({ navigation }) => ({
    header: <Header title={navigation.state.routeName} showExtraButtons={navigation.state.routeName != "Notifs"} />
  })
};

const HomeStack = createStackNavigator({
  Home: HomeScreen,
}, config);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-information-circle'}
    />
  )
};

HomeStack.path = '';

const QuestionsStack = createStackNavigator({
  Questions: QuestionsScreen,
}, config);

QuestionsStack.navigationOptions = {
  tabBarLabel: 'Answer',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

QuestionsStack.path = '';

const SpacesStack = createStackNavigator({
  Spaces: SpacesScreen,
}, config);

SpacesStack.navigationOptions = {
  tabBarLabel: 'Spaces',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  )
};

SpacesStack.path = '';

const NotifsStack = createStackNavigator({
  Notifs: NotifsScreen,
}, config);

NotifsStack.navigationOptions = {
  tabBarLabel: 'Notifs',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'} />
  )
};

NotifsStack.path = '';

const tabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    QuestionsStack,
    SpacesStack,
    NotifsStack
  },
  {
    tabBarOptions: { activeTintColor: tintColor }
  }
);

tabNavigator.path = '';

export default tabNavigator;