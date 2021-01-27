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
                <View style={{ flexDirection: 'row'}}>
                  <Text style={styles.itemName}>{items[key]['name']}</Text>
                </View>
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
    backgroundColor: '#0E141B',
    marginTop: 25,
    marginHorizontal: 10,
  },
  itemScrollList: {
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around'
  },
  item: {
    width: 80,
    height: 80,
    borderWidth: 1,
    borderColor: '#CA9D4B'
  },
  itemTouchable: {
    marginBottom: 20
  },
  itemName: {
    flex: 1,
    textAlign: 'center',
    color: '#FFFFFF',
    flexShrink: 1,
    fontSize: 12
  }
});

export default ItemSelectScreen;