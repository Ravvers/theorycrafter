import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const StatSlot = (props) => {
    var unit = '';
    if(props.statName == 'Crit') {
        unit = ' %'
    }
    return(
        <View style={styles.statContainer}>
            <Image
                source={props.image}
                style={styles.statImage}
            />
            <Text style={styles.statText}>{props.stat}{unit}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
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
})

export default StatSlot;