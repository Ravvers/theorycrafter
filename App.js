import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoadingScreen from './src/screens/LoadingScreen/Loading';
import ChampionSelectScreen from './src/screens/ChampionSelectScreen/ChampionSelect';
import WelcomeScreen from './src/screens/WelcomeScreen/Welcome';

const RootStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <RootStack.Navigator 
        screenOptions={{
          headerShown: false
        }}
      >
        <RootStack.Screen name='Loading' component={LoadingScreen} />
        <RootStack.Screen name='Welcome' component={WelcomeScreen} />
        <RootStack.Screen name='ChampionSelect' component={ChampionSelectScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
