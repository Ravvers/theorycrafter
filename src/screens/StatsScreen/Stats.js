import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatsScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text>
                Stats Screen
            </Text>
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

export default StatsScreen;