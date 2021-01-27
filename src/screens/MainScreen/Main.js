import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
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
            {champions[route.params.selectedChampion]['name']}
          </Text>
        </View>
        
      <View style={styles.levelSection}>
        <View style={styles.levelButton}>
          <TouchableOpacity onPress={() => {
                  if(championLevel != 1) {
                    setChampionLevel(championLevel => championLevel - 1);
                  }
                }
                }>
            <Text style={styles.levelMinusButtonText}>-</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.championLevel}>{championLevel}</Text>
        </View>
        <View style={styles.levelButton}>
          <TouchableOpacity onPress={() => {
                  if(championLevel != 18) {
                    setChampionLevel(championLevel => championLevel + 1);
                  }
                }
                }>
            <Text style={styles.levelPlusButtonText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      </View>
    )
    }
    else {
      return(
      <Text style={styles.championName}>
        Champion
      </Text>
      )
    }

  }

  const getChampionIcon = () => {
    if('selectedChampion' in route.params) {
      return(
        <TouchableOpacity style={styles.championImageTouchable} onPress={() => {
          navigation.navigate('ChampionSelect', {champions: champions}
          )}}>
                <Image
                  source={{uri: 'http://ddragon.leagueoflegends.com/cdn/11.2.1/img/champion/' + route.params.selectedChampion +'.png'}}
                  style={styles.championImage}
                />
              </TouchableOpacity>
      )
    }
    else {
      return(
        <TouchableOpacity style={styles.championImageTouchable} onPress={() => navigation.navigate('ChampionSelect', {champions: champions})}>
                <Image
                  source={{uri: 'http://ddragon.leagueoflegends.com/cdn/11.2.1/img/profileicon/29.png'}}
                  style={styles.championImage}
                />
              </TouchableOpacity>
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
                <Text style={styles.statText}>{championStats.HP}</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={ManaImg}
                  style={styles.statImage}
                />
                <Text style={styles.statText}>{championStats.MP}</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={AttackDamageImg}
                  style={styles.statImage}
                />
                <Text style={styles.statText}>{championStats.AD}</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={AbilityPowerImg}
                  style={styles.statImage}
                />
                <Text style={styles.statText}>{championStats.AP}</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={ArmorImg}
                  style={styles.statImage}
                />
                <Text style={styles.statText}>{championStats.Armor}</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={MagicResistImg}
                  style={styles.statImage}
                />
                <Text style={styles.statText}>{championStats.MR}</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={AttackSpeedImg}
                  style={styles.statImage}
                />
                <Text style={styles.statText}>{championStats.AS}</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={AbilityHasteImg}
                  style={styles.statImage}
                />
                <Text style={styles.statText}>{championStats.AH}</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={CritImg}
                  style={styles.statImage}
                />
                <Text style={styles.statText}>{championStats.Crit}</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={MoveSpeedImg}
                  style={styles.statImage}
                />
                <Text style={styles.statText}>{championStats.MS}</Text>
              </View>
            </View>
          </View>

          <View style={styles.bottomSection}>
            <TouchableOpacity onPress={() => navigation.navigate('ItemSelect', {itemSlot: 'item1', items: route.params.items})}>
              <View style={styles.itemHolder}>
                <View style={styles.imageHolder}>
                  <Image
                    source={{uri: 'http://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/' + selectedItems['item1'] +'.png'}}
                    style={styles.itemImage}
                />
                </View>
                <View style={styles.itemName}>
                  <Text style={styles.itemNameText}>{items[selectedItems['item1']]["name"]}</Text>
                </View>
              
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ItemSelect', {itemSlot: 'item2', items: route.params.items})}>
              <View style={styles.itemHolder}>
                <View style={styles.imageHolder}>
                  <Image
                    source={{uri: 'http://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/' + selectedItems['item2'] +'.png'}}
                    style={styles.itemImage}
                />
                </View>
                <View style={styles.itemName}>
                  <Text style={styles.itemNameText}>{items[selectedItems['item2']]["name"]}</Text>
                </View>
              
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ItemSelect', {itemSlot: 'item3', items: route.params.items})}>
              <View style={styles.itemHolder}>
                <View style={styles.imageHolder}>
                  <Image
                    source={{uri: 'http://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/' + selectedItems['item3'] +'.png'}}
                    style={styles.itemImage}
                />
                </View>
                <View style={styles.itemName}>
                  <Text style={styles.itemNameText}>{items[selectedItems['item3']]["name"]}</Text>
                </View>
              
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ItemSelect', {itemSlot: 'item4', items: route.params.items})}>
              <View style={styles.itemHolder}>
                <View style={styles.imageHolder}>
                  <Image
                    source={{uri: 'http://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/' + selectedItems['item4'] +'.png'}}
                    style={styles.itemImage}
                />
                </View>
                <View style={styles.itemName}>
                  <Text style={styles.itemNameText}>{items[selectedItems['item4']]["name"]}</Text>
                </View>
              
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ItemSelect', {itemSlot: 'item5', items: route.params.items})}>
              <View style={styles.itemHolder}>
                <View style={styles.imageHolder}>
                  <Image
                    source={{uri: 'http://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/' + selectedItems['item5'] +'.png'}}
                    style={styles.itemImage}
                />
                </View>
                <View style={styles.itemName}>
                  <Text style={styles.itemNameText}>{items[selectedItems['item5']]["name"]}</Text>
                </View>
              
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('ItemSelect', {itemSlot: 'item6', items: route.params.items})}>
              <View style={styles.itemHolder}>
                <View style={styles.imageHolder}>
                  <Image
                    source={{uri: 'http://ddragon.leagueoflegends.com/cdn/11.2.1/img/item/' + selectedItems['item6'] +'.png'}}
                    style={styles.itemImage}
                />
                </View>
                <View style={styles.itemName}>
                  <Text style={styles.itemNameText}>{items[selectedItems['item6']]["name"]}</Text>
                </View>
              
              </View>
            </TouchableOpacity>

          </View>
          

          

          <StatusBar style="dark" />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    paddingHorizontal: 10,
    backgroundColor: '#0E141B'
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
    marginTop: 25
  },
  championImage: {
    width: 110,
    height: 110,
    // borderRadius: 170/2,
    borderColor: '#CA9D4B',
    borderWidth: 2
  },
  championName: {
    color: '#CA9D4B',
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
    marginTop: 5
  },
  levelSection: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center'
  },
  levelButton: {
    width: '35%',
    height: 40,
    justifyContent: 'center'
  },
  levelMinusButtonText: {
    color: '#CA9D4B',
    fontSize: 60,
    textAlign: 'center'
  },
  levelPlusButtonText: {
    color: '#CA9D4B',
    fontSize: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 4
  },
  championLevel: {
    color: '#CA9D4B',
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 7
  },
  statsSection: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    // backgroundColor: 'grey',
    marginTop: 25,
    marginRight: 10
  },
  statContainer: {
    flexDirection: 'row',
    width: '50%',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginBottom: 10
  },
  statText: {
    color: '#FFFFFF'
  },
  statImage: {
    width: 25,
    height: 25,
    marginRight: 10
  },
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

export default MainScreen;