import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ItemSlot = (props) => {

  const itemId = props.selectedItems[props.itemSlot];
    // const imageComponent = () => {
    //     if(props.itemS)
    // }
    return(
      <TouchableOpacity onPress={() => props.navigation.navigate('ItemSelect', {itemSlot: props.itemSlot, items: props.items, apiVersion: props.apiVersion})}>
        <View style={styles.itemHolder}>

          <View style={styles.imageHolder}>
            <Image
              source={{uri: 'http://ddragon.leagueoflegends.com/cdn/' + props.apiVersion + '/img/item/' + itemId +'.png'}}
              style={styles.itemImage}
            />
          </View>
          <View style={styles.itemName}>
            <Text style={styles.itemNameText}>{props.items[itemId]["name"]}</Text>
          </View>
        
        </View>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
  itemHolder: {
    flexDirection: 'row',
    borderColor: '#CA9D4B',
    borderWidth: 2,
    height: 72,
    width: 300,
    marginBottom: 18
  },
  imageHolder: {
    flex: 1
  },
  itemImage: {
    height: 72,
    width: 72,
    borderColor: '#CA9D4B',
    borderWidth: 2,
    position: 'absolute',
    bottom: -2,
    left: -2
  },
  itemName: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    width: 228
  },
  itemNameText: {
    color: '#FFFFFF',
  }
});

export default ItemSlot;