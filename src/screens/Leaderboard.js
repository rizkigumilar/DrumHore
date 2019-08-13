import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    StatusBar,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import Leaderboard from 'react-native-leaderboard'
import { getLeaderboard } from '../publics/redux/actions/score';

class boards extends Component {
    // state = {
    //     data: [
    //         { userName: 'Ujanx', highScore: 520056 },
    //         { userName: 'Jajang', highScore: 120874 },
    //         { userName: 'Samsul', highScore: 145874 },
    //     ]
    // }
    state = {
        data: [],
        index: '',
        userid: null,
        name: '',
        scores: ''
    };
    constructor(props) {
        super(props);
    }

    componentDidMount = async () => {
        await this.props.dispatch(getLeaderboard());
        this.setState({
            data: this.props.data,
        });
        AsyncStorage.getItem('userid').then((value) => {
            this.setState({ userid: value })
        });
        AsyncStorage.getItem('name').then((value) => {
            this.setState({ name: value })
        });
        this.subs = [
            this.props.navigation.addListener('willBlur', async () => {
                await this.props.dispatch(getLeaderboard());
                this.setState({
                    data: this.props.data,
                })
            }),
            this.props.navigation.addListener('willFocus', async () => {
                await this.props.dispatch(getLeaderboard());
                this.setState({
                    data: this.props.data,
                })
            }),
        ]
    };

    componentWillUnmount = () => {
        this.subs.forEach(sub => {
            sub.remove();
        });
    };

    render() {
        console.log("props " + this.props.score)
        console.log("state " + this.state.data)
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
                            source={require('../assets/Image/135b131017ea0bf1b33a7168d176ada6.png')} />
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
                        sortBy='score'
                        labelBy='username' />
                </View>
            </View>
        )
    }
}
const mapStateToProps = state => {
    return {
        data: state.score.dataList,
    };
};

export default connect(mapStateToProps)(boards)

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
