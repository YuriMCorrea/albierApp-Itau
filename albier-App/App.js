import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
import EStyleSheet from 'react-native-extended-stylesheet';


EStyleSheet.build({
  
});

export default function App() {
  return (

    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}


