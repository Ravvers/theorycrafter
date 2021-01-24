import React, { useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';

const ChampionSelectScreen = ({ navigation }) => {

  const [championsList, setChampionsList] = useState([]);

  async function getChampionsListFromAPI() {
  return fetch('http://ddragon.leagueoflegends.com/cdn/11.2.1/data/en_US/champion.json')
    .then((response) => response.json())
    .then((responseJson) => {
      addChampionsToState(responseJson)
    })
  }

  async function addChampionsToState(responseJson) {
    for (const [key, value] of Object.entries(responseJson["data"])) {
      setChampionsList(championsList => [...championsList, key]);
    }
  }



    return(
        <View style={styles.container}>
          <TouchableHighlight onPress={getChampionsListFromAPI}>
            <Text>
                getChampionsListFromAPI()
            </Text>
          </TouchableHighlight>
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

export default ChampionSelectScreen;