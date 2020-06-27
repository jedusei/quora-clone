import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import Colors from '../constants/Colors';

export default function TabBarIcon({ component, ...props }) {
  let Component = component;
  return (
    <Component
      {...props}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
