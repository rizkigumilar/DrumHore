import React, { Component } from 'react'
import { View, StyleSheet, TouchableHighlight, Text, Alert, AsyncStorage } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { postScores, updateScore } from '../publics/redux/actions/score';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import Sound from 'react-native-sound';

class Drum extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hasil: 0,
            combo: 0,
            score: 0,
            isNow: 0,
            button: 1,
            timer: null,
            id: '',
            token: '',
        };
        AsyncStorage.getItem('userid', (error, result) => {
            if (result) {
                this.setState({
                    id: result,
                });
            }
        });
        AsyncStorage.getItem('jwToken', (error, result) => {
            if (result) {
                this.setState({
                    token: result,
                });
            }
        });
    }

    onSnarePress = async () => {

        const requireAudio = require('../assets/Sound/Snare7.wav');
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release()); });

    }
    onSnarePress2 = async () => {

        const requireAudio = require('../assets/Sound/Snare5.wav');
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release()); });

    }
    onCymbalPress = async () => {

        const requireAudio = require('../assets/Sound/Hat25.wav');
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release()); });

    }
    onCymbalPress2 = async () => {

        const requireAudio = require('../assets/Sound/Cymbal27.wav');
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release()); });

    }
    AhsyiapPress = async () => {

        const requireAudio = require('../assets/Sound/Ahsiap.mp3');
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release()); });
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ top: '2%' }}>
                    <Text style={styles.txtNumber}>Training Mode</Text>
                    <View
                        style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 110, marginBottom: 70 }}>
                        <TouchableHighlight
                            activeOpacity={0.1}
                            style={styles.smallDrum}>
                            <TouchableOpacity style={styles.smallDrumOutter} onPress={this.onCymbalPress.bind(this)}>
                                <Text style={styles.smallDrumInner} > </Text>
                            </TouchableOpacity>
                        </TouchableHighlight>

                        <TouchableHighlight
                            activeOpacity={0.1}
                            style={styles.smallDrum}>
                            <TouchableOpacity style={styles.smallDrumOutter} onPress={this.onCymbalPress2.bind(this)}>
                                <Text style={styles.smallDrumInner} > </Text>
                            </TouchableOpacity>
                        </TouchableHighlight>

                    </View>
                    <View style={{ marginBottom: 10, marginLeft: 80 }}>
                        <TouchableHighlight
                            activeOpacity={0.01}
                            style={styles.bigDrum}>
                            <TouchableOpacity style={styles.bigDrumOutterAtta} onPress={this.AhsyiapPress.bind(this)}>
                                <Text style={styles.bigDrumInnerAtta}></Text>
                            </TouchableOpacity>
                        </TouchableHighlight>
                    </View>
                    <View
                        style={{ flexDirection: 'row', justifyContent: 'space-evenly', bottom: '10%' }}>

                        <TouchableHighlight
                            activeOpacity={0.01}
                            style={styles.bigDrum}>
                            <TouchableOpacity style={styles.bigDrumOutter} onPress={this.onSnarePress.bind(this)}>
                                <Text style={styles.bigDrumInner}></Text>
                            </TouchableOpacity>
                        </TouchableHighlight>

                        <TouchableHighlight
                            activeOpacity={0.01}
                            style={styles.bigDrum}>
                            <TouchableOpacity style={styles.bigDrumOutter} onPress={this.onSnarePress2.bind(this)}>
                                <Text style={styles.bigDrumInner}></Text>
                            </TouchableOpacity>
                        </TouchableHighlight>

                    </View>
                </View>
            </View>
        )
    }
}
const mapStateToProps = state => {
    return {
        user: state.user.userList
    };
};
export default connect(mapStateToProps)(withNavigation(Drum))

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
    bigDrumOutterAtta: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: '#7d12df',
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
    bigDrumInnerAtta: {
        width: 50,
        height: 50,
        borderRadius: 100 / 2,
        backgroundColor: '#551A8B',
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
    smallDrumOutterActive: {
        width: 80,
        height: 80,
        borderRadius: 100 / 2,
        backgroundColor: '#d6eb34',
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
        bottom: 60,
        left: 80
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