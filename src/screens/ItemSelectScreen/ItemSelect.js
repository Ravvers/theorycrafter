import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import Item0 from '../../img/item_yellow.png';

const ItemSelectScreen = ({ route, navigation }) => {

  const items = route.params.items;
  const apiVersion = route.params.apiVersion;
  
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
                    source={key == "0" ? Item0 : {uri: 'http://ddragon.leagueoflegends.com/cdn/' + apiVersion + '/img/item/' + key +'.png'}}
                    style = {styles.item}
                    key = {key}
                  />
                  <View style={styles.itemNameContainer}>
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
    paddingTop: 25,
    paddingHorizontal: 10
  },
  itemScrollList: {
    marginTop: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-around'
  },
  item: {
    width: 98,
    height: 98,
    borderWidth: 1,
    borderColor: '#CA9D4B'
  },
  itemTouchable: {
    marginBottom: 20
  },
  itemNameContainer: {
    flexDirection: 'row'
  },
  itemName: {
    flex: 1,
    textAlign: 'center',
    color: '#FFFFFF',
    flexShrink: 1,
    fontSize: 13
  }
});

export default ItemSelectScreen;