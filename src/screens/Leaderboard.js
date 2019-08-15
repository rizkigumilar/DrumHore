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
import { getLeaderboard, getScoreId } from '../publics/redux/actions/score';


class boards extends Component {
    // state = {
    //     data: [
    //         { userName: 'Ujanx', highScore: 520056 },
    //         { userName: 'Jajang', highScore: 120874 },
    //         { userName: 'Samsul', highScore: 145874 },
    //     ]
    // }
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            userData: {},
            user: {}
        };
    }

    componentDidMount = async () => {
        await this.props.dispatch(getLeaderboard());
        this.setState({
            data: this.props.data,
            user: this.props.user
        });
        await this.props.dispatch(getScoreId(this.props.navigation.getParam('userid')));
        this.setState({
            userData: this.props.userid
        });

    };

    render() {
        console.log(this.state.userData)
        return (
            <View style={style.container}>
                <View style={style.header}>
                    <View style={style.text1}>
                        <Text style={{
                            fontSize: 20,
                            color: 'yellow',
                            fontStyle: 'italic',
                        }}>Drum Hore </Text>
                    </View>
                    <View>
                        <Image style={style.img}
                            source={require('../assets/Image/mcr4.png')} />
                    </View>
                    <View style={style.text2}>
                        <Text style={{
                            fontSize: 20,
                            color: 'yellow',
                            fontStyle: 'italic',
                        }}>Drum Hore </Text>
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
        userid: state.score.listId,
        user: state.score.dataList[0]
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
        marginVertical: '17%',
        marginHorizontal: '8%'
    },
    text2: {
        position: 'absolute',
        marginVertical: '17%',
        marginLeft: '61%',
    }
})
