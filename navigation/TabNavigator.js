import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../components/TabBarIcon';
import { Feather, Ionicons, MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
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
  Home: HomeScreen
}, config);

HomeStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      component={MaterialCommunityIcons}
      name={focused ? "home" : "home-outline"}
      size={28}
      focused={focused}
    />
  )
};

HomeStack.path = '';

const QuestionsStack = createStackNavigator({
  Questions: QuestionsScreen,
}, config);

QuestionsStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      component={Feather}
      name="edit"
      size={24}
      focused={focused}
    />
  ),
};

QuestionsStack.path = '';

const SpacesStack = createStackNavigator({
  Spaces: SpacesScreen,
}, config);

SpacesStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      component={MaterialIcons}
      name={focused ? "people" : "people-outline"}
      size={28}
      focused={focused}
    />
  )
};

SpacesStack.path = '';

const NotifsStack = createStackNavigator({
  Notifs: NotifsScreen,
}, config);

NotifsStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      component={Ionicons}
      name={focused ? "ios-notifications" : "ios-notifications-outline"}
      size={28}
      focused={focused}
    />
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
    tabBarOptions: {
      activeTintColor: tintColor,
      showLabel: false
    }
  }
);

tabNavigator.path = '';

export default tabNavigator;