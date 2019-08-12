import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, StatusBar } from 'react-native'
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import { Icon } from 'native-base';

class SideBar extends Component {

    render() {
        return (
            <View>
                <StatusBar backgroundColor='transparent' barStyle='dark-content' />
                <View style={styles.imageBackground} />

                <Image source={require('../assets/135b131017ea0bf1b33a7168d176ada6.png')} style={styles.profileImage} resizeMode='cover' />

                <View style={styles.viewProfileData}>
                    <Text style={styles.profileData}>Jill Valentine</Text>
                    <Text style={styles.profileData}>jill@gmail.com</Text>
                    <Text style={styles.profileData}>Score: 521</Text>
                </View>

                <View style={styles.flhome}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('LeaderBoards')}><Text style={styles.drawer}><Icon name="trophy" type="FontAwesome5" style={[styles.leaderBoardColor, styles.icon]} /> Leaderboards</Text></TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Login')}><Text style={styles.drawer}><Icon name="user" type="FontAwesome5" style={[styles.leaderBoardColor, styles.icon]} /> Login </Text></TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    imageBackground: {
        backgroundColor: '#3F51B5',
        width: 'auto',
        height: 180
    },
    profileImage: {
        position: 'absolute',
        borderWidth: 2,
        borderColor: 'blue',
        alignSelf: 'flex-start',
        left: 20,
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
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 14,
        marginVertical: 1
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
        color: '#FFD700'
    }
})

export default SideBar