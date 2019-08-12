import React, { Component } from 'react'
import { View, StyleSheet, TouchableHighlight } from 'react-native'

class Drum extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ top: '5%' }}>
                    <View
                        style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 50 }}>
                        <SmallDrum />
                        <SmallDrum />
                    </View>
                    <View
                        style={{ flexDirection: 'row', justifyContent: 'space-evenly', bottom: '15%' }}>
                        <BigDrum />
                        <BigDrum />
                    </View>
                </View>
            </View>
        )
    }
}

export default Drum

class BigDrum extends Component {
    render() {
        return (
            <TouchableHighlight
                activeOpacity={0.9}
                colo
                style={styles.bigDrum}
            >
                <View style={styles.bigDrumOutter}>
                    <View style={styles.bigDrumInner} />
                </View>
            </TouchableHighlight>
        )
    }
}

class SmallDrum extends Component {
    render() {
        return (
            <TouchableHighlight
                activeOpacity={0.9}
                style={styles.smallDrum}>
                <View style={styles.smallDrumOutter}>
                    <View style={styles.smallDrumInner} />
                </View>
            </TouchableHighlight>
        )
    }
}

const styles = StyleSheet.create({
    bigDrum: {
        width: '75%',
        height: 100,
        top: 100,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bigDrumOutter: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: '#EECECE',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    bigDrumInner: {
        width: 50,
        height: 50,
        borderRadius: 100 / 2,
        backgroundColor: '#E3A6AE',
        position: 'absolute'
    },
    smallDrum: {
        width: '25%',
        height: 70,
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallDrumOutter: {
        width: 80,
        height: 80,
        borderRadius: 100 / 2,
        backgroundColor: '#F7F7F7',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    smallDrumInner: {
        width: 40,
        height: 40,
        borderRadius: 100 / 2,
        backgroundColor: '#B7C8CB',
        position: 'absolute'
    },
    container: {
        flex: 1,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})