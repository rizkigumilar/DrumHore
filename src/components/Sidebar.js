import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, StatusBar, AsyncStorage } from 'react-native'
import { connect } from 'react-redux';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'native-base';




class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: [],
            userid: '',
            name: '',
            token: '',
        };
        AsyncStorage.getItem('userid', (error, result) => {
            if (result) {
                this.setState({
                    userid: result,
                });
            }
        });
        AsyncStorage.getItem('name', (error, result) => {
            if (result) {
                this.setState({
                    name: result,
                });
            }
        });
    }

    render() {
        console.log(this.state.userid)
        console.log(this.state.name)

        return (
            <View>
                <StatusBar backgroundColor='transparent' barStyle='dark-content' />
                <View style={styles.imageBackground} />
                <Image source={require('../assets/Image/MCR.png')} style={styles.profileImage} resizeMode='cover' />
                <View style={styles.flhome}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('LeaderBoards')}><Text style={styles.drawer}><Icon name="trophy" type="FontAwesome5" style={[styles.leaderBoardColor, styles.icon]} /> Leaderboards</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}><Text style={styles.drawer}><Icon name="user" type="FontAwesome5" style={[styles.leaderBoardColor, styles.icon]} /> Profile </Text></TouchableOpacity>
                    <Image source={require('../assets/Image/mcr2.png')} style={{ height: 240, width: 250, marginTop: 250 }} />
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
export default connect(mapStateToProps)(SideBar)

const styles = StyleSheet.create({
    imageBackground: {
        backgroundColor: 'transparent',
        width: 'auto',
        height: 180
    },
    profileImage: {
        position: 'absolute',
        alignSelf: 'flex-start',
        top: 10,
        width: '100%',
        height: 150,
        borderRadius: 0
    },
    viewProfileData: {
        position: 'absolute',
        top: 100,
        marginHorizontal: 20
    },
    profileData: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 24,
        marginVertical: 1,
        left: 75
    },
    flhome: {
        width: "100%",
        flexDirection: "column",
        alignItems: "flex-start",
    },
    drawer: {
        margin: 15,
        fontWeight: "bold",
        color: "#000",
        fontSize: 15,
    },
    icon: {
        fontSize: 18
    },
    leaderBoardColor: {
        color: 'black'
    }
})

