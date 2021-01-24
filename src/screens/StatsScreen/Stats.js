import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StatsScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>
            <Text>
                Stats Screen

                Health Regen
                Resource Regen
                Lethality | Armor Pen
                Magic Pen
                Life Steal
                Vamp
                Attack Range
                Tenacity

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