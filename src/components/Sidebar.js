import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, StatusBar, AsyncStorage } from 'react-native'
import { connect } from 'react-redux';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { Icon } from 'native-base';
import { NavigationEvents } from 'react-navigation';


class SideBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userid: null,
            name: '',
            email: '',
            token: ''
        }
    }

    componentDidMount = async () => {
        const userid = this.state.userid
        await this.props.dispatch(getUserId(userid));
        this.setState({
            user: this.props.user,
        })
        AsyncStorage.getItem('userid').then((value) => {
            this.setState({ userid: value })
        })
        AsyncStorage.getItem('name').then((value) => {
            this.setState({ name: value })
        })
        AsyncStorage.getItem('email').then((value) => {
            this.setState({ email: value })
        })
        AsyncStorage.getItem('jwToken').then((value) => {
            this.setState({ token: value })
        })
    };

    render() {
        console.log('token ' + this.state.token)
        console.log('userid ' + this.state.userid)
        console.log('name ' + this.state.name)


        return (
            <View>
                <NavigationEvents
                    onWillFocus={payload => AsyncStorage.getItem('userid').then((value) => {
                        this.setState({ userid: value })
                    })}
                />
                <NavigationEvents
                    onWillFocus={payload => AsyncStorage.getItem('name').then((value) => {
                        this.setState({ name: value })
                    })}
                />
                <NavigationEvents
                    onWillFocus={payload => AsyncStorage.getItem('email').then((value) => {
                        this.setState({ email: value })
                    })}
                />
                <NavigationEvents
                    onWillFocus={payload => AsyncStorage.getItem('jwToken').then((value) => {
                        this.setState({ token: value })
                    })}
                />
                <StatusBar backgroundColor='transparent' barStyle='dark-content' />
                <View style={styles.imageBackground} />
                <Image source={require('../assets/Image/135b131017ea0bf1b33a7168d176ada6.png')} style={styles.profileImage} resizeMode='cover' />

                <View style={styles.viewProfileData}>
                    <Text style={styles.profileData}>{this.state.name}</Text>
                    <Text style={styles.profileData}>{this.state.email}</Text>
                    <Text style={styles.profileData}>Score: 521</Text>
                </View>

                <View style={styles.flhome}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('LeaderBoards')}><Text style={styles.drawer}><Icon name="trophy" type="FontAwesome5" style={[styles.leaderBoardColor, styles.icon]} /> Leaderboards</Text></TouchableOpacity>
                    {this.state.userid == null ?
                        (<TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}><Text style={styles.drawer}><Icon name="user" type="FontAwesome5" style={[styles.leaderBoardColor, styles.icon]} /> Login </Text></TouchableOpacity>) : (<TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}><Text style={styles.drawer}><Icon name="user" type="FontAwesome5" style={[styles.leaderBoardColor, styles.icon]} /> Logout </Text></TouchableOpacity>)}
                    <Image source={require('../assets/Image/mcr2.png')} style={{ height: 240, width: 250, marginTop: 250 }} />
                </View>

            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
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
        borderWidth: 2,
        borderColor: 'black',
        alignSelf: 'flex-start',
        left: 100,
        top: 10,
        width: 80,
        height: 80,
        borderRadius: 150
    },
    viewProfileData: {
        position: 'absolute',
        top: 100,
        marginHorizontal: 20
    },
    profileData: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 14,
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
        fontWeight: "600",
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

