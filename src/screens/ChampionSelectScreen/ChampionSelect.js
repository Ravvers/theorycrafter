import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ChampionSelectScreen = ({ route, navigation }) => {
  
  const champions = route.params.champions;
  const apiVersion = route.params.apiVersion;
  const championKeys = Object.keys(champions);
    
    return(
        <View style={styles.container}>
          <FlatList
            data={championKeys}
            keyExtractor={(item, index) => index.toString()}
            numColumns={3}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            renderItem={({ item }) => {
              return (
                <View key={item}>
                    <TouchableOpacity style={styles.championTouchable} key={item} onPress={() => navigation.navigate('Main', {selectedChampion: item})}>
                      <Image
                        source={{uri: 'http://ddragon.leagueoflegends.com/cdn/' + apiVersion + '/img/champion/' + item +'.png'}}
                        style = {styles.champion}
                        key = {item}
                      />
                      <Text style={styles.championName}>{champions[item]["name"]}</Text>
                    </TouchableOpacity>
                </View>
              )
            }}
          />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0E141B',
    paddingTop: 25,
    paddingHorizontal: 10
  },
  champion: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: '#CA9D4B'
  },
  championTouchable: {
    marginBottom: 20
  },
  championName: {
    alignSelf: 'center',
    color: '#FFFFFF'
  }
});

export default ChampionSelectScreen;