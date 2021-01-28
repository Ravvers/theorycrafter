import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import Item0 from '../../img/item_yellow.png';

const ItemSelectScreen = ({ route, navigation }) => {

  const items = route.params.items;
  const apiVersion = route.params.apiVersion;
  const itemsOrderList = route.params.itemsOrderList;
  
    return(
        <View style={styles.container}>
          <FlatList
            data={itemsOrderList}
            keyExtractor={(item, index) => index.toString()}
            numColumns={3}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            renderItem={({ item }) => {
              return (
                <View key={item[1]}>
                  <TouchableOpacity style={styles.itemTouchable} key={item[1]} onPress={() => navigation.navigate('Main', {selectedItem: item[1], itemSlot: route.params.itemSlot})}>
                    <Image
                      source={item[1] == "0" ? Item0 : {uri: 'http://ddragon.leagueoflegends.com/cdn/' + apiVersion + '/img/item/' + item[1] +'.png'}}
                      style = {styles.item}
                      key = {item[1]}
                    />
                    <View key = {item[1] + '0'} style={styles.itemNameContainer}>
                      <Text key = {item[1] + '0'} style={styles.itemName}>{items[item[1]]['name']}</Text>
                    </View>
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
    paddingTop: 35,
    paddingHorizontal: 20
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