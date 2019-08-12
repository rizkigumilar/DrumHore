import React, { Component } from 'react'
import { View, StyleSheet, TouchableHighlight, Text, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Sound from 'react-native-sound';

class Drum extends Component {

    constructor() {
        super();
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{ top: '5%' }}>
                    <View
                        style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 110, marginBottom: 20 }}>
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

    onButtonPress() {
        const requireAudio = require('../assets/Sound/Snare7.wav');
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release()); });
    }

    onButtPress() {
        const requireAudio = require('../assets/Sound/Snare7.wav');
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release()); });
    }
    render() {
        return (
            <TouchableHighlight
                activeOpacity={0.01}
                colo
                style={styles.bigDrum}
            >
                <TouchableOpacity style={styles.bigDrumOutter} onPress={this.onButtonPress.bind(this)}>
                    <Text style={styles.bigDrumInner}></Text>
                </TouchableOpacity>
            </TouchableHighlight>
        )
    }
}

class SmallDrum extends Component {
    onButtonPress() {
        const requireAudio = require('../assets/Sound/Cymbal10.wav');
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release()); });
    }

    onButtPress() {
        const requireAudio = require('../assets/Sound/Cymbal10.wav');
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release()); });
    }
    render() {
        return (
            <TouchableHighlight
                activeOpacity={0.1}
                style={styles.smallDrum}>
                <TouchableOpacity style={styles.smallDrumOutter} onPress={this.onButtonPress.bind(this)}>
                    <Text style={styles.smallDrumInner} > </Text>
                </TouchableOpacity>
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
        backgroundColor: '#FF5500',
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 8
    },
    bigDrumInner: {
        width: 50,
        height: 50,
        borderRadius: 100 / 2,
        backgroundColor: '#b60d0d',
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