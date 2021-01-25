import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Video } from 'expo-av';
import IntroVideo from '../../videos/intro.mp4';

const LoadingScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Video
                source={IntroVideo}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                onPlaybackStatusUpdate= {(playbackStatus) => {
                    if(playbackStatus.didJustFinish) {
                        navigation.navigate('Main');
                    }
                }}
                style={{ width: 500, height: 500 }}
            />
            <StatusBar style="light" />
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

export default LoadingScreen;