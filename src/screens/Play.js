import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Drum from '../components/Drum';

class Home extends Component {
    render() {
        return (
            <View>
                <Image source={require('../assets/Image/mcr4.png')} style={styles.backgroundTopRight} />
                <Image source={require('../assets/Image/mcr11.jpg')} style={styles.backgroundTopLeft} />
                <View style={styles.container}>
                    <Image style={styles.txtScore} source={require('../assets/Image/MCR.png')} />
                    <TouchableHighlight style={{ marginTop: 10 }}>
                        <Drum />
                    </TouchableHighlight>
                </View>
                <Image source={require('../assets/Image/mcr2.png')} style={styles.backgroundBottomLeft} />
                <Image source={require('../assets/Image/mcr6.png')} style={styles.backgroundBottomRight} />
            </View>
        )
    }
}


export default Home

const styles = StyleSheet.create({
    backgroundTopRight: {
        position: 'absolute',
        width: 200,
        height: 150,
        top: 250,
        alignSelf: 'flex-end'
    },
    backgroundTopLeft: {
        position: 'absolute',
        width: 200,
        height: 250,
        top: 260,
        alignSelf: 'flex-start'
    },
    backgroundBottomLeft: {
        width: 200,
        height: 180,
        top: 520,
        marginRight: 'auto'
    },
    backgroundBottomRight: {
        width: 200,
        height: 200,
        top: 330,
        marginLeft: 'auto'
    },
    txtScore: {
        height: 150,
        width: 300,
        color: '#3F51B5',
        fontWeight: 'bold',
        bottom: 40,
        marginTop: 250
    },
    txtNumber: {
        fontFamily: 'Roboto',
        fontSize: 40,
        color: 'maroon',
        fontWeight: 'bold',
        bottom: 50
    },
    btnPlay: {
        width: 200,
        height: 80,
        backgroundColor: 'black'

    },
    container: {
        flex: 5,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center'
    }
})

