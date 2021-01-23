import React from 'react';
import { View } from 'react-native';
import { Video } from 'expo-av';
import IntroVideo from '../../videos/intro.mp4';

const LoadingScreen = ({ navigation }) => {
    return (
        <View>
            <Video
                source={IntroVideo}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                onPlaybackStatusUpdate= {(playbackStatus) => {
                    if(playbackStatus.didJustFinish) {
                        navigation.navigate('Welcome');
                    }
                }}
                style={{ width: 500, height: 500 }}
            />
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