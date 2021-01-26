import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { ScrollView, FlatList, TouchableHighlight } from 'react-native-gesture-handler';

const ChampionSelectScreen = ({ route, navigation }) => {
  const champions = route.params.champions
//   const [championsList, setChampionsList] = useState(() => {
//     return 
//   }
//   // "Aatrox",
//   // "Ahri",
//   // "Akali",
//   // "Alistar",
//   // "Amumu",
//   // "Anivia",
//   // "Annie",
//   // "Aphelios",
//   // "Ashe",
//   // "AurelionSol",
//   // "Azir",
//   // "Bard",
//   // "Blitzcrank",
//   // "Brand",
//   // "Braum",
//   // "Caitlyn",
//   // "Camille",
//   // "Cassiopeia",
//   // "Chogath",
//   // "Corki",
//   // "Darius",
//   // "Diana",
//   // "Draven",
//   // "DrMundo",
//   // "Ekko",
//   // "Elise",
//   // "Evelynn",
//   // "Ezreal",
//   // "Fiddlesticks",
//   // "Fiora",
//   // "Fizz",
//   // "Galio",
//   // "Gangplank",
//   // "Garen",
//   // "Gnar",
//   // "Gragas",
//   // "Graves",
//   // "Hecarim",
//   // "Heimerdinger",
//   // "Illaoi",
//   // "Irelia",
//   // "Ivern",
//   // "Janna",
//   // "JarvanIV",
//   // "Jax",
//   // "Jayce",
//   // "Jhin",
//   // "Jinx",
//   // "Kaisa",
//   // "Kalista",
//   // "Karma",
//   // "Karthus",
//   // "Kassadin",
//   // "Katarina",
//   // "Kayle",
//   // "Kayn",
//   // "Kennen",
//   // "Khazix",
//   // "Kindred",
//   // "Kled",
//   // "KogMaw",
//   // "Leblanc",
//   // "LeeSin",
//   // "Leona",
//   // "Lillia",
//   // "Lissandra",
//   // "Lucian",
//   // "Lulu",
//   // "Lux",
//   // "Malphite",
//   // "Malzahar",
//   // "Maokai",
//   // "MasterYi",
//   // "MissFortune",
//   // "MonkeyKing",
//   // "Mordekaiser",
//   // "Morgana",
//   // "Nami",
//   // "Nasus",
//   // "Nautilus",
//   // "Neeko",
//   // "Nidalee",
//   // "Nocturne",
//   // "Nunu",
//   // "Olaf",
//   // "Orianna",
//   // "Ornn",
//   // "Pantheon",
//   // "Poppy",
//   // "Pyke",
//   // "Qiyana",
//   // "Quinn",
//   // "Rakan",
//   // "Rammus",
//   // "RekSai",
//   // "Rell",
//   // "Renekton",
//   // "Rengar",
//   // "Riven",
//   // "Rumble",
//   // "Ryze",
//   // "Samira",
//   // "Sejuani",
//   // "Senna",
//   // "Seraphine",
//   // "Sett",
//   // "Shaco",
//   // "Shen",
//   // "Shyvana",
//   // "Singed",
//   // "Sion",
//   // "Sivir",
//   // "Skarner",
//   // "Sona",
//   // "Soraka",
//   // "Swain",
//   // "Sylas",
//   // "Syndra",
//   // "TahmKench",
//   // "Taliyah",
//   // "Talon",
//   // "Taric",
//   // "Teemo",
//   // "Thresh",
//   // "Tristana",
//   // "Trundle",
//   // "Tryndamere",
//   // "TwistedFate",
//   // "Twitch",
//   // "Udyr",
//   // "Urgot",
//   // "Varus",
//   // "Vayne",
//   // "Veigar",
//   // "Velkoz",
//   // "Vi",
//   // "Viego",
//   // "Viktor",
//   // "Vladimir",
//   // "Volibear",
//   // "Warwick",
//   // "Xayah",
//   // "Xerath",
//   // "XinZhao",
//   // "Yasuo",
//   // "Yone",
//   // "Yorick",
//   // "Yuumi",
//   // "Zac",
//   // "Zed",
//   // "Ziggs",
//   // "Zilean",
//   // "Zoe",
//   // "Zyra",
// );
    

    return(
        <View style={styles.container}>

          {/* <TouchableHighlight onPress={() => console.log(championsList)}>
            <Text>
                getChampionsListFromAPI()
            </Text>
          </TouchableHighlight> */}
          
          {/* <View>
            <FlatList
              data={championsList}
              renderItem={({ champion }) => 

                <TouchableOpacity>
                  <Image
                        source={{uri: 'http://ddragon.leagueoflegends.com/cdn/11.2.1/img/champion/' + champion +'.png'}}
                        style = {styles.champion}
                  />
                </TouchableOpacity>
              }
              keyExtractor={champion => champion}
            />
          </View> */}
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
                <Text>{key}</Text>
                </TouchableOpacity>
              </View>
            );
          })}
          </ScrollView>


          {/* <TouchableHighlight>
            <Text>
                getChampionsListFromAPI()
            </Text>
          </TouchableHighlight> */}
          {/* <TouchableOpacity onPress={() => navigation.navigate('Main')}>
            <Image
              source={{uri: 'http://ddragon.leagueoflegends.com/cdn/11.2.1/img/champion/Vayne.png'}}
              style = {{width: 200, height: 200}}
            />
          </TouchableOpacity> */}
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
  }
});

export default ChampionSelectScreen;