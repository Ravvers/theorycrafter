import React from 'react';
import { View, Text } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
    return(
        <View>
            <Text>
                Welcome to the league of legends theorycrafter!
                Click here to start
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default WelcomeScreen;