import React, { Component } from 'react'
import { View, StyleSheet, TouchableHighlight, Text, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Sound from 'react-native-sound';

class Drum extends Component {

    constructor() {
        super();
    }
    onButtonPress() {
        const requireAudio = require('../assets/Sound/Snare7.wav');
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release()); });
    }
    onButtonPress2() {
        const requireAudio = require('../assets/Sound/Snare7.wav');
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release()); });
    }
    onButtPress() {
        const requireAudio = require('../assets/Sound/Cymbal10.wav');
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release()); });
    }
    onButtPress2() {
        const requireAudio = require('../assets/Sound/Cymbal10.wav');
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release()); });
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{ top: '2%' }}>
                    <Text style={styles.txtNumber}>Score</Text>
                    <Text style={styles.txtNumber1}>Combo : 5</Text>
                    <Text style={styles.txtNumber0}>0</Text>
                    <View
                        style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 110, marginBottom: 70 }}>
                        <TouchableHighlight
                            activeOpacity={0.1}
                            style={styles.smallDrum}>
                            <TouchableOpacity style={styles.smallDrumOutter} onPress={this.onButtPress.bind(this)}>
                                <Text style={styles.smallDrumInner} > </Text>
                            </TouchableOpacity>
                        </TouchableHighlight>
                        <TouchableHighlight
                            activeOpacity={0.1}
                            style={styles.smallDrum}>
                            <TouchableOpacity style={styles.smallDrumOutter} onPress={this.onButtPress2.bind(this)}>
                                <Text style={styles.smallDrumInner} > </Text>
                            </TouchableOpacity>
                        </TouchableHighlight>
                    </View>
                    <View
                        style={{ flexDirection: 'row', justifyContent: 'space-evenly', bottom: '10%' }}>
                        <TouchableHighlight
                            activeOpacity={0.01}
                            style={styles.bigDrum}
                        >
                            <TouchableOpacity style={styles.bigDrumOutter} onPress={this.onButtonPress.bind(this)}>
                                <Text style={styles.bigDrumInner}></Text>
                            </TouchableOpacity>
                        </TouchableHighlight>
                        <TouchableHighlight
                            activeOpacity={0.01}
                            style={styles.bigDrum}
                        >
                            <TouchableOpacity style={styles.bigDrumOutter} onPress={this.onButtonPress2.bind(this)}>
                                <Text style={styles.bigDrumInner}></Text>
                            </TouchableOpacity>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}

export default Drum

const styles = StyleSheet.create({
    bigDrum: {
        width: '75%',
        height: 100,
        top: 20,
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
    },
    txtNumber: {
        fontFamily: 'Roboto',
        fontSize: 40,
        color: 'maroon',
        fontWeight: 'bold',
        bottom: 100,
        left: 150
    },
    txtNumber0: {
        fontFamily: 'Roboto',
        fontSize: 40,
        color: 'maroon',
        fontWeight: 'bold',
        bottom: 100,
        left: 187
    },
    txtNumber1: {
        fontFamily: 'Roboto',
        fontSize: 20,
        color: 'maroon',
        fontWeight: 'bold',
        bottom: 100,
        left: 160
    }
})