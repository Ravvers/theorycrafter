import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const MainScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text>
                Welcome to the league of legends theorycrafter!
                Click here to start
            </Text>
            <StatusBar style="dark" />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MainScreen;