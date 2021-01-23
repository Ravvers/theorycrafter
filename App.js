// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoadingScreen from './src/screens/LoadingScreen/Loading';
import MainScreen from './src/screens/MainScreen/Main';
import ChampionSelectScreen from './src/screens/ChampionSelectScreen/ChampionSelect';
import ItemSelectScreen from './src/screens/ItemSelectScreen/ItemSelect';
import StatsScreen from './src/screens/StatsScreen/Stats';


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
        <RootStack.Screen name='Main' component={MainScreen} />
        <RootStack.Screen name='ChampionSelect' component={ChampionSelectScreen} />
        <RootStack.Screen name='ItemSelect' component={ItemSelectScreen} />
        <RootStack.Screen name='Stats' component={StatsScreen} />
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
