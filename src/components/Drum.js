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
            pattern: [1, 4, 1, 2, 4, 2, 4, 1, 3, 5],
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
    add = () => {
        const data = {
            userid: Number(this.state.id),
            score: this.state.score
        }
        this.props.dispatch(postScores(Number(this.state.id), this.state.token, data))
            .then(() => {
                Alert.alert(
                    'Success'
                )
                this.setState({
                    score: 0,
                    hasil: 0,
                    isNow: 0,
                    combo: 0
                })
            })
            .catch(() => {
                Alert.alert(
                    'Failed',
                    'Cannot save your score, please login to save your score',
                    [

                        { text: 'Cancel' },
                        { text: 'Go To Login', onPress: () => this.props.navigation.navigate('Login') }

                    ]
                )
                this.setState({
                    score: 0,
                    hasil: 0,
                    isNow: 0,
                    combo: 0
                })
            })
    }

    onSnarePress = async () => {

        const requireNext = require('../assets/Sound/Ahsiap.mp3');
        const requireAudio = require('../assets/Sound/Snare7.wav');
        const next = new Sound(requireNext)
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
            next.play(() => next.release())
        }
        else {
            Alert.alert(
                'Lose !!!',
                `Your Score : ${this.state.score}`, // <- this part is optional, you can pass an empty string
                [

                    { text: 'Try again' },
                    { text: 'Save score', onPress: () => this.add() }


                ],
            );
            clearTimeout(this.state.timer); //cancel the previous timer.
            this.setState({
                timer: null
            })
        }
        if (this.state.timer) {
            clearTimeout(this.state.timer); //cancel the previous timer.
            this.setState({
                timer: null
            })
        }

        this.setState({
            timer: setTimeout(() => {
                this.setState({
                    combo: 0,
                    score: 0,
                })
                alert("reset");
            }, 4000)
        })
        await this.setState({
            button: this.state.pattern[this.state.isNow]
        })

    }
    onSnarePress2 = async () => {

        const requireAudio = require('../assets/Sound/Snare5.wav');
        const requireNext = require('../assets/Sound/Ahsiap.mp3');
        const next = new Sound(requireNext)
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
            next.play(() => next.release())
        }
        else {
            Alert.alert(
                'Lose !!!',
                `Your Score : ${this.state.score}`, // <- this part is optional, you can pass an empty string
                [
                    { text: 'Try again' },
                    { text: 'Save score', onPress: () => this.add() }
                ],
            );
            clearTimeout(this.state.timer); //cancel the previous timer.
            this.setState({
                timer: null
            })
        }
        if (this.state.timer) {
            clearTimeout(this.state.timer); //cancel the previous timer.
            this.setState({
                timer: null
            })
        }

        this.setState({
            timer: setTimeout(() => {
                this.setState({
                    combo: 0,
                    score: 0,
                })
                alert("reset");
            }, 4000)
        })
        await this.setState({
            button: this.state.pattern[this.state.isNow]
        })
    }
    onCymbalPress = async () => {

        const requireAudio = require('../assets/Sound/Hat25.wav');
        const requireNext = require('../assets/Sound/Ahsiap.mp3');
        const next = new Sound(requireNext)
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
            next.play(() => next.release())
        }
        else {
            Alert.alert(
                'Lose !!!',
                `Your Score : ${this.state.score}`, // <- this part is optional, you can pass an empty string
                [
                    { text: 'Try again' },
                    { text: 'Save score', onPress: () => this.add() }

                ],
            );
            clearTimeout(this.state.timer); //cancel the previous timer.
            this.setState({
                timer: null
            })
        }
        if (this.state.timer) {
            clearTimeout(this.state.timer); //cancel the previous timer.
            this.setState({
                timer: null
            })
        }

        this.setState({
            timer: setTimeout(() => {
                this.setState({
                    combo: 0,
                    score: 0,
                })
                alert("reset");
            }, 4000)
        })
        await this.setState({
            button: this.state.pattern[this.state.isNow]
        })
    }
    onCymbalPress2 = async () => {

        const requireAudio = require('../assets/Sound/Cymbal27.wav');
        const requireNext = require('../assets/Sound/Ahsiap.mp3');
        const next = new Sound(requireNext)
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
            next.play(() => next.release())
        }
        else {
            Alert.alert(
                'Lose !!!',
                `Your Score : ${this.state.score}`, // <- this part is optional, you can pass an empty string
                [
                    { text: 'Try again' },
                    { text: 'Save score', onPress: () => this.add() }

                ],
            );
            clearTimeout(this.state.timer); //cancel the previous timer.
            this.setState({
                timer: null
            })
        }
        if (this.state.timer) {
            clearTimeout(this.state.timer); //cancel the previous timer.
            this.setState({
                timer: null
            })
        }

        this.setState({
            timer: setTimeout(() => {
                this.setState({
                    combo: 0,
                    score: 0,
                })
                alert("reset");
            }, 4000)
        })
        await this.setState({
            button: this.state.pattern[this.state.isNow]
        })
    }
    AhsyiapPress = async () => {

        const requireAudio = require('../assets/Sound/Ahsiap.mp3');
        const requireNext = require('../assets/Sound/Ahsiap.mp3');
        const next = new Sound(requireNext)
        const s = new Sound(requireAudio, (e) => { if (e) { console.log('Error in SOUND', e); return; } s.play(() => s.release()); });
        if (this.state.pattern[this.state.isNow] === 5) {
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
            next.play(() => next.release())
        }
        else {
            Alert.alert(
                'Lose !!!',
                `Your Score : ${this.state.score}`, // <- this part is optional, you can pass an empty string
                [
                    { text: 'Try again' },
                    { text: 'Save score', onPress: () => this.add() }

                ],
            );
            clearTimeout(this.state.timer); //cancel the previous timer.
            this.setState({
                timer: null
            })
        }
        if (this.state.timer) {
            clearTimeout(this.state.timer); //cancel the previous timer.
            this.setState({
                timer: null
            })
        }

        this.setState({
            timer: setTimeout(() => {
                this.setState({
                    combo: 0,
                    score: 0,
                })
                alert("reset");
            }, 4000)
        })
        await this.setState({
            button: this.state.pattern[this.state.isNow]
        })
    }
    render() {
        console.log(this.state.id)
        console.log(this.state.token)
        console.log(this.state.score)
        console.log(this.state.data)
        return (
            <View style={styles.container}>
                <View style={{ top: '2%' }}>
                    <Text style={styles.txtNumber}>Score</Text>
                    <Text style={styles.txtNumber1}>Combo : {this.state.combo}</Text>
                    <Text style={styles.txtNumber0}>{this.state.score}</Text>
                    <View
                        style={{ flexDirection: 'row', justifyContent: 'space-around', marginHorizontal: 100, marginBottom: 20, bottom: 80 }}>
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
                    <View style={{ marginBottom: 120, marginLeft: 80 }}>
                        {this.state.button == 5 ?
                            <TouchableHighlight
                                activeOpacity={0.01}
                                style={styles.bigDrum}>
                                <TouchableOpacity style={styles.bigDrumOutterActive} onPress={this.AhsyiapPress.bind(this)}>
                                    <Text style={styles.bigDrumInnerAtta}></Text>
                                </TouchableOpacity>
                            </TouchableHighlight> : <TouchableHighlight
                                activeOpacity={0.01}
                                style={styles.bigDrum}>
                                <TouchableOpacity style={styles.bigDrumOutterAtta} onPress={this.AhsyiapPress.bind(this)}>
                                    <Text style={styles.bigDrumInnerAtta}></Text>
                                </TouchableOpacity>
                            </TouchableHighlight>}
                    </View>
                    <View
                        style={{ flexDirection: 'row', justifyContent: 'space-evenly', bottom: '40%' }}>

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
    bigDrumOutterAtta: {
        width: 100,
        height: 100,
        borderRadius: 100 / 2,
        backgroundColor: '#7d12df',
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