import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScrollView, FlatList, TouchableHighlight } from 'react-native-gesture-handler';

const ChampionSelectScreen = ({ route, navigation }) => {
  const champions = route.params.champions
    
    return(
        <View style={styles.container}>
          <ScrollView 
            contentContainerStyle={styles.championScrollList}
          >
            {Object.keys(champions).map(function(key, index) {
            return(
              <View key={key}>
                <TouchableOpacity style={styles.championTouchable} key={key} onPress={() => navigation.navigate('Main', {selectedChampion: key})}>
                <Image
                source={{uri: 'http://ddragon.leagueoflegends.com/cdn/11.2.1/img/champion/' + key +'.png'}}
                style = {styles.champion}
                key = {key}
                />
                <Text style={styles.championName}>{champions[key]['name']}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
          </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
  },
  championTouchable: {
    marginBottom: 20
  },
  championName: {
    alignSelf: 'center'
  }
});

export default ChampionSelectScreen;