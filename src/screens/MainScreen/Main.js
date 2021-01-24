import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import RandomChampion from '../../img/random-champion.png';
import AttackDamageImg from '../../img/ad.png';
import AbilityPowerImg from '../../img/ap.png';
import ArmorImg from '../../img/armor.png';
import MagicResistImg from '../../img/mr.png';
import AttackSpeedImg from '../../img/as.png';
import AbilityHasteImg from '../../img/cd.png';
import CritImg from '../../img/crit.png';
import MoveSpeedImg from '../../img/ms.png';

const MainScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>

          <View style={styles.topSection}>

            <View style={styles.championSection}>
              <TouchableHighlight onPress={() => navigation.navigate('ChampionSelect')}>
                <Image
                  source={RandomChampion}
                  style={{width: 200, height: 200, borderRadius: 200/2}}
                />
              </TouchableHighlight>

              <Text>
                Champion Name
              </Text>
            </View>

            <View style={styles.statsSection}>
              <View style={styles.statContainer}>
                <Image
                  source={RandomChampion}
                  style={styles.statImage}
                />
                <Text>HP</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={RandomChampion}
                  style={styles.statImage}
                />
                <Text>MP</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={AttackDamageImg}
                  style={styles.statImage}
                />
                <Text>AD</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={AbilityPowerImg}
                  style={styles.statImage}
                />
                <Text>AP</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={ArmorImg}
                  style={styles.statImage}
                />
                <Text>Armor</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={MagicResistImg}
                  style={styles.statImage}
                />
                <Text>MR</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={AttackSpeedImg}
                  style={styles.statImage}
                />
                <Text>AS</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={AbilityHasteImg}
                  style={styles.statImage}
                />
                <Text>AH</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={CritImg}
                  style={styles.statImage}
                />
                <Text>Crit</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={MoveSpeedImg}
                  style={styles.statImage}
                />
                <Text>MS</Text>
              </View>
            </View>
          </View>

          <View style={styles.bottomSection}>

          </View>
          

          

          <StatusBar style="dark" />
        </View>
    );
};

const styles = StyleSheet.create({
  // container: {
  //   borderWidth: 4,
  //   borderColor: 'red'
  // },
  topSection: {
    flexDirection: 'row',
    marginTop: 25,
    marginHorizontal: 10,
  },
  bottomSection: {

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
  }
  // itemsSection: {

  // }
});

export default MainScreen;