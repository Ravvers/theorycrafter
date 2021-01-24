import React, { useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';

const getChampionsListFromAPI = () => {
  return fetch('http://ddragon.leagueoflegends.com/cdn/11.2.1/data/en_US/champion.json')
    .then((response) => response.json())
    .then(setChampionsList)
}

const ChampionSelectScreen = ({ navigation }) => {

  const [championsList, setChampionsList] = useState([]);


    return(
        <View style={styles.container}>
            <Text>
                getChampionsListFromAPI()
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

export default ChampionSelectScreen;