import React, { Component } from 'react'
import { View, StyleSheet, TouchableHighlight, Text, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Sound from 'react-native-sound';

class Drum extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasil: 0,
            combo: 5,
            score: 0,
            pattern: [1, 2, 1, 1, 3],
            isNow: 0,
            button: 1
        };
    }
    onButtonPress = async () => {
        await this.setState({
            button: 1
        })
        const requireAudio = require('../assets/Sound/Snare7.wav');
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release()); });
        if (this.state.pattern[this.state.isNow] === this.state.button) {
            if (this.state.pattern.length === this.state.isNow + 1) {
                await this.setState({
                    combo: this.state.combo - 1
                })
            }
            await this.setState({
                score: this.state.score + 10,
                isNow: this.state.isNow + 1
            })

        }
        else {
            await this.setState({
                score: 0,
                hasil: 0,
                isNow: 0,
                combo: 5
            })
        }

    }
    onButtonPress2 = async () => {
        await this.setState({
            button: 4
        })
        const requireAudio = require('../assets/Sound/Snare7.wav');
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release()); });
        if (this.state.pattern[this.state.isNow] === this.state.button) {
            if (this.state.pattern.length === this.state.isNow + 1) {
                await this.setState({
                    combo: this.state.combo - 1
                })
            }
            await this.setState({
                score: this.state.score + 10,
                isNow: this.state.isNow + 1
            })

        }
        else {
            await this.setState({
                score: 0,
                hasil: 0,
                isNow: 0,
                combo: 5
            })
        }
    }
    onButtPress = async () => {
        await this.setState({
            button: 2
        })
        const requireAudio = require('../assets/Sound/Cymbal10.wav');
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release()); });
        if (this.state.pattern[this.state.isNow] === this.state.button) {
            if (this.state.pattern.length === this.state.isNow + 1) {
                await this.setState({
                    combo: this.state.combo - 1
                })
            }
            await this.setState({
                score: this.state.score + 10,
                isNow: this.state.isNow + 1
            })

        }
        else {
            await this.setState({
                score: 0,
                hasil: 0,
                isNow: 0,
                combo: 5
            })
        }
    }
    onButtPress2 = async () => {
        await this.setState({
            button: 3
        })
        const requireAudio = require('../assets/Sound/Cymbal10.wav');
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release()); });
        if (this.state.pattern[this.state.isNow] === this.state.button) {
            if (this.state.pattern.length === this.state.isNow + 1) {
                await this.setState({
                    combo: this.state.combo - 1
                })
            }
            await this.setState({
                score: this.state.score + 10,
                isNow: this.state.isNow + 1
            })

        }
        else {
            await this.setState({
                score: 0,
                hasil: 0,
                isNow: 0,
                combo: 5
            })
        }
    }
    setScore() {
        this.setState(() => {
            this.state.button = 1
        })
        console.log("setScore " + this.state.button)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ top: '2%' }}>
                    <Text style={styles.txtNumber}>Score</Text>
                    <Text style={styles.txtNumber1}>Combo : {this.state.combo}</Text>
                    <Text style={styles.txtNumber0}>{this.state.score}</Text>
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