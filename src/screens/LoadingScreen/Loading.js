import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Video } from 'expo-av';
import IntroVideo from '../../videos/intro.mp4';

const LoadingScreen = ({ navigation }) => {

    const [items, setItems] = useState(() => {
        return {}
    })

    const [champions, setChampions] = useState(() => {
        return {}
    })

    var championNames = {};
    var itemIds = {};

    function getChampionsFromAPI() {
      return fetch('http://ddragon.leagueoflegends.com/cdn/11.2.1/data/en_AU/champion.json')
          .then((response) => response.json())
          .then((responseJson) => {
            addChampionsToState(responseJson)
          })
          .then(championNames = Object.keys(champions))
          .catch((error) => {
            console.error(error);
          });
    }

    function addChampionsToState(responseJson) {
      var tempList = {};
        for (const key in responseJson["data"]) {
          tempList[key] = {
              stats: responseJson["data"][key]["stats"]
          };
        }
        setChampions(champions => tempList)
    }

    // getChampionsFromAPI();

    function getItemsFromAPI() {
    return fetch('http://ddragon.leagueoflegends.com/cdn/11.2.1/data/en_US/item.json')
        .then((response) => response.json())
        .then((responseJson) => {
          addItemsToState(responseJson)
        })
        .then(itemIds = Object.keys(items))
        .catch((error) => {
          console.error(error);
        })
    }

    function addItemsToState(responseJson) {
      var tempList = {};
        for (const key in responseJson["data"]) {
          tempList[key] = {
              name: responseJson["data"][key]["name"],
              stats: responseJson["data"][key]["stats"]
          };
        }
      setItems(items => tempList)
    }

    getItemsFromAPI();

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
                        navigation.navigate('Main', {
                            champions: champions,
                            items: items,
                            // championNames: championNames
                        } );
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