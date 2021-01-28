import React from 'react';
import { View, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Video } from 'expo-av';
import IntroVideo from '../../videos/intro.mp4';

const LoadingScreen = ({ navigation }) => {

    var items = {};
    var champions = {};
    var apiVersion = '';

    function getVersionFromAPI() {
      return fetch('https://ddragon.leagueoflegends.com/api/versions.json')
          .then((response) => response.json())
          .then((responseJson) => {
            apiVersion = responseJson[0];
            getChampionsFromAPI();
            getItemsFromAPI();
          })
          .catch((error) => {
            console.error(error);
          });
    }

    getVersionFromAPI();

    function getChampionsFromAPI() {
      return fetch('http://ddragon.leagueoflegends.com/cdn/' + apiVersion + '/data/en_AU/champion.json')
          .then((response) => response.json())
          .then((responseJson) => {
            addChampionsToState(responseJson)
          })
          .catch((error) => {
            console.error(error);
          });
    }

    function addChampionsToState(responseJson) {
        for (const key in responseJson["data"]) {
          champions[key] = {
            name: responseJson["data"][key]["name"],
            stats: responseJson["data"][key]["stats"]
          };
        }
    }

    function getItemsFromAPI() {
    return fetch('http://ddragon.leagueoflegends.com/cdn/' + apiVersion + '/data/en_US/item.json')
        .then((response) => response.json())
        .then((responseJson) => {
          addItemsToState(responseJson)
        })
        .catch((error) => {
          console.error(error);
        })
    }

    function addItemsToState(responseJson) {
      items["0"] = {
        name: "Empty Item",
        stats: {

        }
      }
        for (const key in responseJson["data"]) {
          if(responseJson["data"][key]["gold"]["purchasable"] && (responseJson["data"][key]["maps"]["11"] || responseJson["data"][key]["maps"]["12"])) {
            items[key] = {
              name: responseJson["data"][key]["name"],
              stats: responseJson["data"][key]["stats"]
          };
          }
        }
    }

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
                            apiVersion: apiVersion
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