import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import Drum from '../components/Drum'

class Home extends Component {
    render() {
        return (
            <View>
                <Image source={require('../assets/undraw_walk_in_the_city_1ma6.png')} style={styles.backgroundTopRight} />
                <View style={styles.container}>
                    <Text style={styles.txtScore}>
                        Drum Hore
                    </Text>
                    <Text style={styles.txtNumber}>Score</Text>
                    <Text style={styles.txtNumber}>0</Text>
                    <TouchableHighlight>
                        <Drum />
                    </TouchableHighlight>
                </View>
                <Image source={require('../assets/undraw_compose_music_ovo2.png')} style={styles.backgroundBottomLeft} />
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
        top: 10,
        alignSelf: 'flex-end'
    },
    backgroundBottomLeft: {
        width: 200,
        height: 180,
        top: 500,
        marginRight: 'auto'
    },
    txtScore: {
        fontFamily: 'Roboto',
        fontSize: 50,
        color: '#3F51B5',
        fontWeight: 'bold',
        marginBottom: 0,
        marginTop: 500
    },
    txtNumber: {
        fontFamily: 'Roboto',
        fontSize: 40,
        color: '#3F51B5',
        fontWeight: 'bold',
        marginBottom: 0
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

