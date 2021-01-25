import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import RandomChampion from '../../img/random-champion.png';
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

  var champs = []
  const updateChampsList = () => {
    if (route.params != undefined) {
      champs = route.params.champs
    }
  }

  updateChampsList();

  const championName = () => {
    if (route.params != undefined) {
    return(
      <Text>
        {route.params.selectedChampion}
      </Text>
    )
    }
    else {
      return(
      <Text>
        Choose a champion!
      </Text>
      )
    }

  }

  const getChampionIcon = () => {
    if(route.params != undefined) {
      return(
        <TouchableHighlight style = {{paddingTop: 15}}onPress={() => navigation.navigate('ChampionSelect', {champs: champs})}>
                <Image
                  source={{uri: 'http://ddragon.leagueoflegends.com/cdn/11.2.1/img/champion/' + route.params.selectedChampion +'.png'}}
                  style={{width: 170, height: 170, borderRadius: 200/2}}
                />
              </TouchableHighlight>
      )
    }
    else {
      return(
        <TouchableHighlight onPress={() => navigation.navigate('ChampionSelect', {champs: champs})}>
                <Image
                  source={RandomChampion}
                  style={{width: 200, height: 200, borderRadius: 200/2}}
                />
              </TouchableHighlight>
      )
    }
  }

  const getChampionStats = () => {
    return fetch('http://ddragon.leagueoflegends.com/cdn/11.2.1/data/en_AU/champion/' + route.params.selectedChampion +'.json')
        .then((response) => response.json())
        .then((responseJson) => {
          const championStatsAPI = (responseJson['data'][route.params.selectedChampion]["stats"])
          setChampionStats({
            HP: championStatsAPI["hp"],
            MP: championStatsAPI["mp"],
            AD: championStatsAPI["attackdamage"],
            AP: 0,
            Armor: championStatsAPI["armor"],
            MR: championStatsAPI["spellblock"],
            AS: championStatsAPI["attackspeed"],
            AH: 0,
            Crit: championStatsAPI["crit"],
            MS: championStatsAPI["movespeed"]}
        )})
        .catch((error) => {
          console.error(error);
        });
  }

  const updateChampionStats = () => {
    if(route.params != undefined) {
      getChampionStats()

    }
  }

  const [championStats, setChampionStats] = useState({
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
  })
  updateChampionStats();


    return(
        <View style={styles.container}>

          <View style={styles.topSection}>

            <View style={styles.championSection}>

              {getChampionIcon()}
              {championName()}
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
            <TouchableHighlight onPress={() => navigation.navigate('ItemSelect')}>
              <View style={styles.itemHolder}>
              
              </View>
            </TouchableHighlight>
            <TouchableHighlight>
              <View style={styles.itemHolder}>
              
              </View>
            </TouchableHighlight>
            <TouchableHighlight>
              <View style={styles.itemHolder}>
              
              </View>
            </TouchableHighlight>
            <TouchableHighlight>
              <View style={styles.itemHolder}>
              
              </View>
            </TouchableHighlight>
            <TouchableHighlight>
              <View style={styles.itemHolder}>
              
              </View>
            </TouchableHighlight>
            <TouchableHighlight>
              <View style={styles.itemHolder}>
              
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
    marginBottom: 20
  },
  topSection: {
    flexDirection: 'row',
  },
  bottomSection: {
    borderColor: 'blue',
    borderWidth: 4

  },
  championSection: {
    flex: 1,
    alignItems: 'center'
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
    borderColor: 'red',
    borderWidth: 4,
    height: 72,
    marginVertical: 10
  }
});

export default MainScreen;