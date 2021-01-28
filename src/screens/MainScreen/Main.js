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
import SelectChampionImg from '../../img/29.gif';

import ItemSlot from '../../components/ItemSlot';
import StatSlot from '../../components/StatSlot';

const MainScreen = ({ route, navigation }) => {

  const isFocused = useIsFocused();

  const items = route.params.items;
  const champions = route.params.champions;
  const apiVersion = route.params.apiVersion;
  const itemsOrderList = route.params.itemsOrderList;
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
      item1: '0',
      item2: '0',
      item3: '0',
      item4: '0',
      item5: '0',
      item6: '0'
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
          navigation.navigate('ChampionSelect', {champions: champions, apiVersion: apiVersion}
          )}}>
                <Image
                  source={{uri: 'http://ddragon.leagueoflegends.com/cdn/' + apiVersion + '/img/champion/' + route.params.selectedChampion +'.png'}}
                  style={styles.championImage}
                />
              </TouchableOpacity>
      )
    }
    else {
      return(
        <TouchableOpacity style={styles.championImageTouchable} onPress={() => navigation.navigate('ChampionSelect', {champions: champions, apiVersion: apiVersion})}>
                <Image
                  source={SelectChampionImg}
                  style={styles.championImage}
                />
              </TouchableOpacity>
      )
    }
  }

  const updateChampionStats = () => {
    const championStatsAPI = champions[route.params.selectedChampion]["stats"];
    const itemTotalStats = getItemsStats();
    setChampionStats({
      HP: Math.round((championStatsAPI["hp"] + ((championLevel - 1) * championStatsAPI["hpperlevel"] * growthMultiplier(championLevel) + itemTotalStats.hp) + Number.EPSILON) * 100) / 100,
      MP: Math.round((championStatsAPI["mp"] + ((championLevel - 1) * championStatsAPI["mpperlevel"] * growthMultiplier(championLevel) + itemTotalStats.mp) + Number.EPSILON) * 100) / 100,
      AD: Math.round((championStatsAPI["attackdamage"] + ((championLevel - 1) * championStatsAPI["attackdamageperlevel"] * growthMultiplier(championLevel) + itemTotalStats.ad) + Number.EPSILON) * 100) / 100,
      AP: 0 + itemTotalStats.ap,
      Armor: Math.round((championStatsAPI["armor"] + ((championLevel - 1) * championStatsAPI["armorperlevel"] * growthMultiplier(championLevel) + itemTotalStats.armor) + Number.EPSILON) * 100) / 100,
      MR: Math.round((championStatsAPI["spellblock"] + ((championLevel - 1) * championStatsAPI["spellblockperlevel"] * growthMultiplier(championLevel) + itemTotalStats.mr) + Number.EPSILON) * 100) / 100,
      AS: Math.round((championStatsAPI["attackspeed"] * (1 + (championLevel - 1) * championStatsAPI["attackspeedperlevel"] / 100 * growthMultiplier(championLevel)) + Number.EPSILON) * 100) / 100,
      AH: 0,
      Crit: Math.round((championStatsAPI["crit"] + ((championLevel - 1) * championStatsAPI["critperlevel"] * growthMultiplier(championLevel) + itemTotalStats.crit) + Number.EPSILON) * 100),
      MS: Math.round(((championStatsAPI["movespeed"] + itemTotalStats.ms) * (1 + itemTotalStats.Sms) + Number.EPSILON) * 100) / 100
    })
  }

  const getChampionStats = () => {
    if('selectedChampion' in route.params) {
      updateChampionStats()

    }
  }

  

  useEffect(() => {
    getChampionStats();
    updateSelectedItems();
  }, [isFocused]);
  
  useEffect(() => {
    if('selectedChampion' in route.params){
      updateChampionStats();
    }
  }, [championLevel]);

  useEffect(() => {
    if('selectedChampion' in route.params){
      if('selectedItem' in route.params){
        updateChampionStats();
      }
    }

  }, [selectedItems]);

  
  const updateSelectedItems = () => {
    if('selectedItem' in route.params){
        setSelectedItems(selectedItems => ({
          ...selectedItems,
          [route.params.itemSlot]: route.params.selectedItem
        }))
    }
  }

  const getItemsStats = () => {
    var totalStats = {
      "FlatHPPoolMod": 0,
      "FlatMPPoolMod": 0,
      "FlatArmorMod": 0,
      "FlatPhysicalDamageMod": 0,
      "FlatMagicDamageMod": 0,
      "FlatMovementSpeedMod": 0,
      "PercentMovementSpeedMod": 0,
      "FlatAttackSpeedMod": 0,
      "PercentAttackSpeedMod": 0,
      "FlatCritChanceMod": 0,
      "FlatSpellBlockMod": 0,
    }
    
    for (const [item, itemId] of Object.entries(selectedItems)) {
      for(const [statName, value] of Object.entries(items[itemId]["stats"])) {
        if (statName in totalStats) {
          totalStats[statName] += value
        }
      }
    }

    return {
      "hp": totalStats.FlatHPPoolMod,
      "mp": totalStats.FlatMPPoolMod,
      "armor": totalStats.FlatArmorMod,
      "ad": totalStats.FlatPhysicalDamageMod,
      "ap": totalStats.FlatMagicDamageMod,
      "ms": totalStats.FlatMovementSpeedMod,
      "Sms": totalStats.PercentMovementSpeedMod,
      "as": totalStats.FlatAttackSpeedMod,
      "Sas": totalStats.PercentAttackSpeedMod,
      "crit": totalStats.FlatCritChanceMod,
      "mr": totalStats.FlatSpellBlockMod
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
              <StatSlot stat={championStats.HP} image={HealthImg}></StatSlot>
              <StatSlot stat={championStats.MP} image={ManaImg}></StatSlot>
              <StatSlot stat={championStats.AD} image={AttackDamageImg}></StatSlot>
              <StatSlot stat={championStats.AP} image={AbilityPowerImg}></StatSlot>
              <StatSlot stat={championStats.Armor} image={ArmorImg}></StatSlot>
              <StatSlot stat={championStats.MR} image={MagicResistImg}></StatSlot>
              <StatSlot stat={championStats.AS} image={AttackSpeedImg}></StatSlot>
              <StatSlot stat={championStats.AH} image={AbilityHasteImg}></StatSlot>
              <StatSlot stat={championStats.Crit} image={CritImg} statName='Crit'></StatSlot>
              <StatSlot stat={championStats.MS} image={MoveSpeedImg}></StatSlot>
            </View>
          </View>

          <View style={styles.bottomSection}>
            
            <ItemSlot
              itemSlot='item1'
              selectedItems={selectedItems}
              navigation={navigation}
              items={items}
              apiVersion={apiVersion}
              itemsOrderList={itemsOrderList}
            ></ItemSlot>
            <ItemSlot
              itemSlot='item2'
              selectedItems={selectedItems}
              navigation={navigation}
              items={items}
              apiVersion={apiVersion}
              itemsOrderList={itemsOrderList}
            ></ItemSlot>
            <ItemSlot
              itemSlot='item3'
              selectedItems={selectedItems}
              navigation={navigation}
              items={items}
              apiVersion={apiVersion}
              itemsOrderList={itemsOrderList}
            ></ItemSlot>
            <ItemSlot
              itemSlot='item4'
              selectedItems={selectedItems}
              navigation={navigation}
              items={items}
              apiVersion={apiVersion}
              itemsOrderList={itemsOrderList}
            ></ItemSlot>
            <ItemSlot
              itemSlot='item5'
              selectedItems={selectedItems}
              navigation={navigation}
              items={items}
              apiVersion={apiVersion}
              itemsOrderList={itemsOrderList}
            ></ItemSlot>
            <ItemSlot
              itemSlot='item6'
              selectedItems={selectedItems}
              navigation={navigation}
              items={items}
              apiVersion={apiVersion}
              itemsOrderList={itemsOrderList}
            ></ItemSlot>

          </View>
          

          

          <StatusBar style="light" />
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingHorizontal: 10,
    backgroundColor: '#0E141B',
    paddingBottom: 30 //to fill screen without champion
  },
  topSection: {
    flexDirection: 'row',
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
    borderColor: '#CA9D4B',
    borderWidth: 2,
    overlayColor: '#FFFFFF'
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
    marginTop: 25,
    marginRight: 10
  },
  bottomSection: {
    alignItems: 'center',
    marginTop: 20,
  }
});

export default MainScreen;