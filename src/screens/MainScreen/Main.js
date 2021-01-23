import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import RandomChampion from '../../img/random-champion.png';

const MainScreen = ({ navigation }) => {
    return(
        <View style={styles.container}>

          <View style={styles.topSection}>

            <View style={styles.championSection}>
              <Image
              source={RandomChampion}
              style={{width: 200, height: 200, borderRadius: 200/2}}
              />

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
                  source={RandomChampion}
                  style={styles.statImage}
                />
                <Text>AD</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={RandomChampion}
                  style={styles.statImage}
                />
                <Text>AP</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={RandomChampion}
                  style={styles.statImage}
                />
                <Text>Armor</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={RandomChampion}
                  style={styles.statImage}
                />
                <Text>MR</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={RandomChampion}
                  style={styles.statImage}
                />
                <Text>AS</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={RandomChampion}
                  style={styles.statImage}
                />
                <Text>MS</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={RandomChampion}
                  style={styles.statImage}
                />
                <Text>Crit</Text>
              </View>
              <View style={styles.statContainer}>
                <Image
                  source={RandomChampion}
                  style={styles.statImage}
                />
                <Text>Range</Text>
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