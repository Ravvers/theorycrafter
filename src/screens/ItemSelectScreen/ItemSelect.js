import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const ItemSelectScreen = ({ route, navigation }) => {

  const items = route.params.items;
    return(
        <View style={styles.container}>
          <ScrollView 
            contentContainerStyle={styles.itemScrollList}
          >
            {Object.keys(items).map(function(key, index) {
            return(
              <View key={key}>
                <TouchableOpacity style={styles.itemTouchable} key={key} onPress={() => navigation.navigate('Main', {selectedItem: key, itemSlot: route.params.itemSlot})}>
                <Image
                source={{uri: 'http://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/' + key +'.png'}}
                style = {styles.item}
                key = {key}
                />
                <Text>{items[key]['name']}</Text>
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
  itemScrollList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  },
  item: {
    width: 100,
    height: 100,
  },
  itemTouchable: {
  }
});

export default ItemSelectScreen;