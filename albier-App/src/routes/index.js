import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { Login } from '../screens/Login/index';


const Stack = createStackNavigator();

export function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{ headerTransparent: true, headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}