import React, { Component } from 'react'
import { View, StyleSheet, TouchableHighlight, Text, Alert, AsyncStorage } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { postScores } from '../publics/redux/actions/score';
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
            pattern: [1, 2, 1, 2, 1, 3, 4, 3],
            isNow: 0,
            button: 1,
            id: '',
            token: ''
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
    add = () => {
        console.log(this.state.token)
        const data = {
            userid: Number(this.state.id),
            score: this.state.score
        }
        this.props.dispatch(postScores(Number(this.state.id), this.state.token, data))
            .then(() => {
                this.setState({
                    score: 0,
                    hasil: 0,
                    isNow: 0,
                    combo: 0
                })
            })
    }

    onSnarePress = async () => {

        const requireAudio = require('../assets/Sound/Snare7.wav');
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release()); });
        if (this.state.pattern[this.state.isNow] === 1) {
            if (this.state.pattern.length === this.state.isNow + 1) {
                await this.setState({
                    combo: this.state.combo + 1,
                    isNow: 0
                })
            }
            await this.setState({
                score: this.state.score + 10,
                isNow: this.state.isNow + 1
            })

        }
        else {
            Alert.alert(
                'Lose !!!',
                `Your Score : ${this.state.score}`, // <- this part is optional, you can pass an empty string
                [
                    {
                        text: 'Save Score',
                        onPress: () => this.add()
                    },

                ],
            );

        }
        await this.setState({
            button: this.state.pattern[this.state.isNow]
        })

    }
    onSnarePress2 = async () => {

        const requireAudio = require('../assets/Sound/Tom3.wav');
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release()); });
        if (this.state.pattern[this.state.isNow] === 4) {
            if (this.state.pattern.length === this.state.isNow + 1) {
                await this.setState({
                    combo: this.state.combo + 1,
                    isNow: 0
                })
            }
            await this.setState({
                score: this.state.score + 10,
                isNow: this.state.isNow + 1
            })

        }
        else {
            Alert.alert(
                'Lose !!!',
                `Your Score : ${this.state.score}`, // <- this part is optional, you can pass an empty string
                [
                    {
                        text: 'Save Score',
                        onPress: () => this.add()
                    },

                ],
            );

        }
        await this.setState({
            button: this.state.pattern[this.state.isNow]
        })
    }
    onCymbalPress = async () => {

        const requireAudio = require('../assets/Sound/Hat25.wav');
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release()); });
        if (this.state.pattern[this.state.isNow] === 2) {
            if (this.state.pattern.length === this.state.isNow + 1) {
                await this.setState({
                    combo: this.state.combo + 1,
                    isNow: 0
                })
            }
            await this.setState({
                score: this.state.score + 10,
                isNow: this.state.isNow + 1
            })

        }
        else {
            Alert.alert(
                'Lose !!!',
                `Your Score : ${this.state.score}`, // <- this part is optional, you can pass an empty string
                [
                    {
                        text: 'Save Score',
                        onPress: () => this.add()
                    },

                ],
            );
        }
        await this.setState({
            button: this.state.pattern[this.state.isNow]
        })
    }
    onCymbalPress2 = async () => {

        const requireAudio = require('../assets/Sound/Cymbal27.wav');
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release()); });
        if (this.state.pattern[this.state.isNow] === 3) {
            if (this.state.pattern.length === this.state.isNow + 1) {
                await this.setState({
                    combo: this.state.combo + 1,
                    isNow: 0
                })
            }
            await this.setState({
                score: this.state.score + 10,
                isNow: this.state.isNow + 1
            })

        }
        else {
            Alert.alert(
                'Lose !!!',
                `Your Score : ${this.state.score}`, // <- this part is optional, you can pass an empty string
                [
                    {
                        text: 'Save Score',
                        onPress: () => this.add()
                    },

                ],
            );
        }
        await this.setState({
            button: this.state.pattern[this.state.isNow]
        })
    }
    render() {
        console.log(this.state.id)
        console.log(this.state.token)
        console.log(this.state.score)
        return (
            <View style={styles.container}>
                <View style={{ top: '2%' }}>
                    <Text style={styles.txtNumber}>Score</Text>
                    <Text style={styles.txtNumber1}>Combo : {this.state.combo}</Text>
                    <Text style={styles.txtNumber0}>{this.state.score}</Text>
                    <View
                        style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 110, marginBottom: 70 }}>
                        {this.state.button == 2 ?
                            <TouchableHighlight
                                activeOpacity={0.1}
                                style={styles.smallDrum}>
                                <TouchableOpacity style={styles.smallDrumOutterActive} onPress={this.onCymbalPress.bind(this)}>
                                    <Text style={styles.smallDrumInner} > </Text>
                                </TouchableOpacity>
                            </TouchableHighlight> : <TouchableHighlight
                                activeOpacity={0.1}
                                style={styles.smallDrum}>
                                <TouchableOpacity style={styles.smallDrumOutter} onPress={this.onCymbalPress.bind(this)}>
                                    <Text style={styles.smallDrumInner} > </Text>
                                </TouchableOpacity>
                            </TouchableHighlight>}

                        {this.state.button == 3 ?
                            <TouchableHighlight
                                activeOpacity={0.1}
                                style={styles.smallDrum}>
                                <TouchableOpacity style={styles.smallDrumOutterActive} onPress={this.onCymbalPress2.bind(this)}>
                                    <Text style={styles.smallDrumInner} > </Text>
                                </TouchableOpacity>
                            </TouchableHighlight> : <TouchableHighlight
                                activeOpacity={0.1}
                                style={styles.smallDrum}>
                                <TouchableOpacity style={styles.smallDrumOutter} onPress={this.onCymbalPress2.bind(this)}>
                                    <Text style={styles.smallDrumInner} > </Text>
                                </TouchableOpacity>
                            </TouchableHighlight>}

                    </View>
                    <View
                        style={{ flexDirection: 'row', justifyContent: 'space-evenly', bottom: '10%' }}>

                        {this.state.button == 1 ?
                            <TouchableHighlight
                                activeOpacity={0.01}
                                style={styles.bigDrum}>
                                <TouchableOpacity style={styles.bigDrumOutterActive} onPress={this.onSnarePress.bind(this)}>
                                    <Text style={styles.bigDrumInner}></Text>
                                </TouchableOpacity>
                            </TouchableHighlight> : <TouchableHighlight
                                activeOpacity={0.01}
                                style={styles.bigDrum}>
                                <TouchableOpacity style={styles.bigDrumOutter} onPress={this.onSnarePress.bind(this)}>
                                    <Text style={styles.bigDrumInner}></Text>
                                </TouchableOpacity>
                            </TouchableHighlight>}

                        {this.state.button == 4 ?
                            <TouchableHighlight
                                activeOpacity={0.01}
                                style={styles.bigDrum}>
                                <TouchableOpacity style={styles.bigDrumOutterActive} onPress={this.onSnarePress2.bind(this)}>
                                    <Text style={styles.bigDrumInner}></Text>
                                </TouchableOpacity>
                            </TouchableHighlight> : <TouchableHighlight
                                activeOpacity={0.01}
                                style={styles.bigDrum}>
                                <TouchableOpacity style={styles.bigDrumOutter} onPress={this.onSnarePress2.bind(this)}>
                                    <Text style={styles.bigDrumInner}></Text>
                                </TouchableOpacity>
                            </TouchableHighlight>}

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
    bigDrumOutterActive: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: '#d6eb34',
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