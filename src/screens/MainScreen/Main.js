import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, Button } from 'react-native';
import { useIsFocused } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import HealthImg from '../../img/hp.png';
import ManaImg from '../../img/mp.png';
import EnergyImg from '../../img/energy.png';
import AttackDamageImg from '../../img/ad.png';
import AbilityPowerImg from '../../img/ap.png';
import ArmorImg from '../../img/armor.png';
import MagicResistImg from '../../img/mr.png';
import AttackSpeedImg from '../../img/as.png';
import AbilityHasteImg from '../../img/cd.png';
import CritImg from '../../img/crit.png';
import MoveSpeedImg from '../../img/ms.png';

const MainScreen = ({ route, navigation }) => {

  const items = route.params.items;
  const champions = route.params.champions;
  const growthMultiplier = (championLevel) => {
    return (0.7025 + 0.0175 * (championLevel - 1))
  }

  // const [champion, setChampion] = useState(() => {
  //   return 'Select a champion!'
  // })

  const [championLevel, setChampionLevel] = useState(() => {
    return 1
  })
  const [championStats, setChampionStats] = useState(() => { 
    return {
      HP: 'HP',
      MP: 'MP',
      AD: 'AD',
      AP: 'AP',
      Armor: 'Armor',
      MR: 'MR',
      AS: 'AS',
      AH: 'AH',
      Crit: 'Crit',
      MS: 'MS'
    }
  })

  const [selectedItems, setSelectedItems] = useState(() => {
    return {
      item1: '1001',
      item2: '1001',
      item3: '1001',
      item4: '1001',
      item5: '1001',
      item6: '1001'
    }
  })

  const getChampionName = () => {
    if ('selectedChampion' in route.params) {
    return(
      <View>
        <View>
          <Text style={styles.championName}>
            {route.params.selectedChampion}
          </Text>
        </View>
        
      <View style={styles.levelSection}>
        <View style={styles.levelButton}>
          <Button title='-' onPress={() => {
                  if(championLevel != 1) {
                    setChampionLevel(championLevel => championLevel - 1);
                  }
                }
                } />
        </View>
        <View>
          <Text style={styles.championLevel}>{championLevel}</Text>
        </View>
        <View style={styles.levelButton}>
          <Button title='+' onPress={() => {
                  if(championLevel != 18) {
                    setChampionLevel(championLevel => championLevel + 1);
                  }
                }
                } />
        </View>
      </View>
      </View>
    )
    }
    else {
      return(
      <Text style={styles.championName}>
        Choose a champion!
      </Text>
      )
    }

  }

  const getChampionIcon = () => {
    if('selectedChampion' in route.params) {
      return(
        <TouchableHighlight style={styles.championImageTouchable} onPress={() => {
          navigation.navigate('ChampionSelect', {champions: champions}
          )}}>
                <Image
                  source={{uri: 'http://ddragon.leagueoflegends.com/cdn/11.2.1/img/champion/' + route.params.selectedChampion +'.png'}}
                  style={styles.championImage}
                />
              </TouchableHighlight>
      )
    }
    else {
      return(
        <TouchableHighlight style={styles.championImageTouchable} onPress={() => navigation.navigate('ChampionSelect', {champions: champions})}>
                <Image
                  source={{uri: 'http://ddragon.leagueoflegends.com/cdn/11.2.1/img/profileicon/29.png'}}
                  style={styles.championImage}
                />
              </TouchableHighlight>
      )
    }
  }

  const updateChampionStats = () => {
    const championStatsAPI = champions[route.params.selectedChampion]["stats"]
    setChampionStats({
      HP: Math.round((championStatsAPI["hp"] + ((championLevel - 1) * championStatsAPI["hpperlevel"] * growthMultiplier(championLevel)) + Number.EPSILON) * 100) / 100,
      MP: Math.round((championStatsAPI["mp"] + ((championLevel - 1) * championStatsAPI["mpperlevel"] * growthMultiplier(championLevel)) + Number.EPSILON) * 100) / 100,
      AD: Math.round((championStatsAPI["attackdamage"] + ((championLevel - 1) * championStatsAPI["attackdamageperlevel"] * growthMultiplier(championLevel)) + Number.EPSILON) * 100) / 100,
      AP: 0,
      Armor: Math.round((championStatsAPI["armor"] + ((championLevel - 1) * championStatsAPI["armorperlevel"] * growthMultiplier(championLevel)) + Number.EPSILON) * 100) / 100,
      MR: Math.round((championStatsAPI["spellblock"] + ((championLevel - 1) * championStatsAPI["spellblockperlevel"] * growthMultiplier(championLevel)) + Number.EPSILON) * 100) / 100,
      AS: Math.round((championStatsAPI["attackspeed"] * ((championLevel - 1) * championStatsAPI["attackspeedperlevel"] * growthMultiplier(championLevel)) + Number.EPSILON) * 100) / 100,
      AH: 0,
      Crit: championStatsAPI["crit"] + ((championLevel - 1) * championStatsAPI["critperlevel"] * growthMultiplier(championLevel)),
      MS: championStatsAPI["movespeed"]
    })
  }

  const getChampionStats = () => {
    if('selectedChampion' in route.params) {
      updateChampionStats()

    }
  }

  const isFocused = useIsFocused();

  useEffect(() => {
    getChampionStats();
    updateSelectedItems();
  }, [isFocused]);
  
  useEffect(() => {
    if('selectedChampion' in route.params){
      updateChampionStats();
    }
  }, [championLevel]);
  
  const updateSelectedItems = () => {
    if('selectedItem' in route.params){
        selectedItems[route.params.itemSlot] = route.params.selectedItem
    }
  }

    return(
        <View style={styles.container}>

          <View style={styles.topSection}>

            <View style={styles.championSection}>

              {getChampionIcon()}
              {getChampionName()}
            </View>

            <View style={styles.statsSection}>
              <View style={styles.statContainer}>
                <Image
                  source={HealthImg}
                  style={styles.statImage}
                />
                <Text>{championStats.HP}</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={ManaImg}
                  style={styles.statImage}
                />
                <Text>{championStats.MP}</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={AttackDamageImg}
                  style={styles.statImage}
                />
                <Text>{championStats.AD}</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={AbilityPowerImg}
                  style={styles.statImage}
                />
                <Text>{championStats.AP}</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={ArmorImg}
                  style={styles.statImage}
                />
                <Text>{championStats.Armor}</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={MagicResistImg}
                  style={styles.statImage}
                />
                <Text>{championStats.MR}</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={AttackSpeedImg}
                  style={styles.statImage}
                />
                <Text>{championStats.AS}</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={AbilityHasteImg}
                  style={styles.statImage}
                />
                <Text>{championStats.AH}</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={CritImg}
                  style={styles.statImage}
                />
                <Text>{championStats.Crit}</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={MoveSpeedImg}
                  style={styles.statImage}
                />
                <Text>{championStats.MS}</Text>
              </View>
            </View>
          </View>

          <View style={styles.bottomSection}>
            <TouchableHighlight onPress={() => navigation.navigate('ItemSelect', {itemSlot: 'item1', items: route.params.items})}>
              <View style={styles.itemHolder}>
                <Image
                source={{uri: 'http://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/' + selectedItems['item1'] +'.png'}}
                style={styles.itemImage}
                />
                <View style={styles.itemName}>
                  <Text style={styles.itemNameText}>{items[selectedItems['item1']]["name"]}</Text>
                </View>
              
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('ItemSelect', {itemSlot: 'item2', items: route.params.items})}>
              <View style={styles.itemHolder}>
                <Image
                source={{uri: 'http://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/' + selectedItems['item2'] +'.png'}}
                style={styles.itemImage}
                />
                <View style={styles.itemName}>
                  <Text style={styles.itemNameText}>{items[selectedItems['item2']]["name"]}</Text>
                </View>
              
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('ItemSelect', {itemSlot: 'item3', items: route.params.items})}>
              <View style={styles.itemHolder}>
                <Image
                source={{uri: 'http://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/' + selectedItems['item3'] +'.png'}}
                style={styles.itemImage}
                />
                <View style={styles.itemName}>
                  <Text style={styles.itemNameText}>{items[selectedItems['item3']]["name"]}</Text>
                </View>
              
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('ItemSelect', {itemSlot: 'item4', items: route.params.items})}>
              <View style={styles.itemHolder}>
                <Image
                source={{uri: 'http://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/' + selectedItems['item4'] +'.png'}}
                style={styles.itemImage}
                />
                <View style={styles.itemName}>
                  <Text style={styles.itemNameText}>{items[selectedItems['item4']]["name"]}</Text>
                </View>
              
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('ItemSelect', {itemSlot: 'item5', items: route.params.items})}>
              <View style={styles.itemHolder}>
                <Image
                source={{uri: 'http://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/' + selectedItems['item5'] +'.png'}}
                style={styles.itemImage}
                />
                <View style={styles.itemName}>
                  <Text style={styles.itemNameText}>{items[selectedItems['item5']]["name"]}</Text>
                </View>
              
              </View>
            </TouchableHighlight>
            <TouchableHighlight onPress={() => navigation.navigate('ItemSelect', {itemSlot: 'item6', items: route.params.items})}>
              <View style={styles.itemHolder}>
                <Image
                source={{uri: 'http://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/' + selectedItems['item6'] +'.png'}}
                style={styles.itemImage}
                />
                <View style={styles.itemName}>
                  <Text style={styles.itemNameText}>{items[selectedItems['item6']]["name"]}</Text>
                </View>
              
              </View>
            </TouchableHighlight>

          </View>
          

          

          <StatusBar style="dark" />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    marginHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#2b4043'
  },
  topSection: {
    flexDirection: 'row',
  },
  bottomSection: {
    alignItems: 'center',
    marginTop: 20,
  },
  championSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  championImageTouchable: {
    paddingTop: 15
  },
  championImage: {
    width: 170,
    height: 170,
    borderRadius: 170/2,
    borderColor: 'gold',
    borderWidth: 4
  },
  championName: {
    color: 'gold',
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center'
  },
  levelSection: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  levelButton: {
    width: '40%'
  },
  championLevel: {
    color: 'gold',
    fontWeight: 'bold',
    fontSize: 20
  },
  statsSection: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    backgroundColor: 'grey',
  },
  statContainer: {
    flexDirection: 'row',
    width: '50%',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  statImage: {
    width: 40,
    height: 40
  },
  itemHolder: {
    flexDirection: 'row',
    borderColor: 'gold',
    borderWidth: 4,
    height: 72,
    width: 300,
    marginVertical: 5,
    borderRadius: 30
  },
  itemImage: {
    height: 64,
    width: 64,
    borderRadius: 30 
  },
  itemName: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemNameText: {
    color: 'gold'
  }
});

export default MainScreen;