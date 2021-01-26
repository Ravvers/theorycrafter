import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const ItemSelectScreen = ({ route, navigation }) => {

  const [itemsList, setItemsList] = useState([
  "1001",
  "1004",
  "1006",
  "1011",
  "1018",
  "1026",
  "1027",
  "1028",
  "1029",
  "1031",
  "1033",
  "1035",
  "1036",
  "1037",
  "1038",
  "1039",
  "1042",
  "1043",
  "1052",
  "1053",
  "1054",
  "1055",
  "1056",
  "1057",
  "1058",
  "1082",
  "1083",
  "2003",
  "2010",
  "2015",
  "2031",
  "2033",
  "2051",
  "2052",
  "2055",
  "2065",
  "2138",
  "2139",
  "2140",
  "2403",
  "2419",
  "2420",
  "2421",
  "2422",
  "2423",
  "2424",
  "3001",
  "3003",
  "3004",
  "3006",
  "3009",
  "3011",
  "3020",
  "3024",
  "3026",
  "3031",
  "3033",
  "3035",
  "3036",
  "3040",
  "3041",
  "3042",
  "3043",
  "3044",
  "3046",
  "3047",
  "3048",
  "3050",
  "3051",
  "3053",
  "3057",
  "3065",
  "3066",
  "3067",
  "3068",
  "3070",
  "3071",
  "3072",
  "3074",
  "3075",
  "3076",
  "3077",
  "3078",
  "3082",
  "3083",
  "3085",
  "3086",
  "3089",
  "3091",
  "3094",
  "3095",
  "3100",
  "3102",
  "3105",
  "3107",
  "3108",
  "3109",
  "3110",
  "3111",
  "3112",
  "3113",
  "3114",
  "3115",
  "3116",
  "3117",
  "3123",
  "3124",
  "3133",
  "3134",
  "3135",
  "3139",
  "3140",
  "3142",
  "3143",
  "3145",
  "3152",
  "3153",
  "3155",
  "3156",
  "3157",
  "3158",
  "3165",
  "3177",
  "3179",
  "3181",
  "3184",
  "3190",
  "3191",
  "3193",
  "3211",
  "3222",
  "3330",
  "3340",
  "3363",
  "3364",
  "3400",
  "3504",
  "3508",
  "3513",
  "3599",
  "3600",
  "3742",
  "3748",
  "3801",
  "3802",
  "3814",
  "3850",
  "3851",
  "3853",
  "3854",
  "3855",
  "3857",
  "3858",
  "3859",
  "3860",
  "3862",
  "3863",
  "3864",
  "3916",
  "4005",
  "4401",
  "4403",
  "4628",
  "4629",
  "4630",
  "4632",
  "4633",
  "4635",
  "4636",
  "4637",
  "4638",
  "4641",
  "4642",
  "4643",
  "6029",
  "6035",
  "6333",
  "6609",
  "6616",
  "6617",
  "6630",
  "6631",
  "6632",
  "6653",
  "6655",
  "6656",
  "6660",
  "6662",
  "6664",
  "6670",
  "6671",
  "6672",
  "6673",
  "6675",
  "6676",
  "6677",
  "6691",
  "6692",
  "6693",
  "6694",
  "6695",
]);

  // function getItemsListFromAPI() {
  //   return fetch('http://ddragon.leagueoflegends.com/cdn/11.2.1/data/en_US/item.json')
  //       .then((response) => response.json())
  //       .then((responseJson) => {
  //         return addItemsToState(responseJson)
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       })
  //   }

  //   function addItemsToState(responseJson) {
  //       for (const [key, value] of Object.entries(responseJson["data"])) {
  //       setItemsList(itemsList => [...itemsList, key])
  //       }
  //   }

  //   getItemsListFromAPI();
  //   useEffect(() => {
  //     if(itemsList.length == 201) {
  //         console.log(itemsList.splice(0,201));
  //     }
  //   });

    return(
        <View style={styles.container}>
          <ScrollView 
            contentContainerStyle={styles.itemScrollList}
          >
            {itemsList.map((prop, key) => {
            return(
              <View key={key}>
                <TouchableOpacity style={styles.itemTouchable} key={key} onPress={() => navigation.navigate('Main', {selectedItem: itemsList[key], itemSlot: route.params.itemSlot})}>
                <Image
                source={{uri: 'http://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/' + itemsList[key] +'.png'}}
                style = {styles.item}
                key = {key}
                />
                </TouchableOpacity>
              </View>
            );
          })}
          </ScrollView>
        </View>
    );
};

{/* <TouchableOpacity style={styles.itemTouchable} key={key} onPress={() => navigation.navigate('Main', {selectedItem: itemsList[key], itemSlot: route.params.itemSlot})}></TouchableOpacity> */}

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