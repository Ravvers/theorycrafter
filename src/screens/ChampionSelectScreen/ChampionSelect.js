import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { ScrollView, TouchableHighlight } from 'react-native-gesture-handler';

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
        setChampionsList(championsList => [...championsList, key])
        }
    }

    getChampionsListFromAPI();

    return(
        <View style={styles.container}>
          <ScrollView 
            contentContainerStyle={styles.championScrollList}
          >
            {championsList.map((prop, key) => {
            return(
              <Image
                source={{uri: 'http://ddragon.leagueoflegends.com/cdn/11.2.1/img/champion/' + championsList[key] +'.png'}}
                style = {styles.champion}
                key = {key}
              />
            );
          })}
          </ScrollView>
          {/* <TouchableHighlight>
            <Text>
                getChampionsListFromAPI()
            </Text>
          </TouchableHighlight>

          <Image
            source={{uri: 'http://ddragon.leagueoflegends.com/cdn/11.2.1/img/champion/Vayne.png'}}
            style = {{width: 200, height: 200}}
          /> */}
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    marginTop: 25,
    marginHorizontal: 10,
  },
  championScrollList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  champion: {
    width: 100,
    height: 100,
  }
});

export default ChampionSelectScreen;