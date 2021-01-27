import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ItemSlot = (props) => {
    return(
        <View style={styles.itemHolder}>
            <View style={styles.imageHolder}>
                <Image
                    source={{uri: 'http://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/' + props.selectedItems[props.itemSlot] +'.png'}}
                    style={styles.itemImage}
                />
            </View>
            <View style={styles.itemName}>
                <Text style={styles.itemNameText}>{props.name}</Text>
            </View>
        
        </View>
    )
}

const styles = StyleSheet.create({
  itemHolder: {
    flexDirection: 'row',
    borderColor: '#CA9D4B',
    borderWidth: 2,
    height: 72,
    width: 300,
    // marginVertical: 5,
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