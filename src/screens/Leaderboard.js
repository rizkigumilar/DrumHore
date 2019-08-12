import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import Leaderboard from 'react-native-leaderboard'
import { getLeaderboard } from '../publics/redux/actions/user';
class boards extends Component {
    state = {
        data: [
            { userName: 'Joe', highScore: 52 },
            { userName: 'Jenny', highScore: 120 }
        ]
    }
    render() {
        let index = 1
        return (
            <View style={style.container}>
                <View style={style.header}>
                    <View style={style.text1}>
                        <Text style={{
                            fontSize: 20,
                            color: 'black',
                        }}>Rank </Text>
                        <Text style={{
                            fontSize: 20,
                            color: 'black',
                        }}>100</Text>
                    </View>
                    <View>
                        <Image style={style.img}
                            source={require('../assets/135b131017ea0bf1b33a7168d176ada6.png')} />
                    </View>
                    <View style={style.text2}>
                        <Text style={{
                            fontSize: 20,
                            color: 'black',
                        }}>Point </Text>
                        <Text style={{
                            fontSize: 20,
                            color: 'black',
                        }}>1000</Text>
                    </View>
                </View>
                <View>
                    <Leaderboard
                        data={this.state.data}
                        sortBy='highScore'
                        labelBy='userName' />
                </View>
            </View>
        )
    }
}
export default boards
const style = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
    },
    header: {
        width: "80%",
        height: 132,
        backgroundColor: '#FF5500',
        marginBottom: 20,
        marginTop: 20,
        borderRadius: 15
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 100,
        overflow: "hidden",
        marginVertical: '12%',
        marginHorizontal: '40%'
    },
    text1: {
        position: 'absolute',
        marginVertical: '12%',
        marginHorizontal: '12%'
    },
    text2: {
        position: 'absolute',
        marginVertical: '12%',
        marginLeft: '73%',
    }
})
