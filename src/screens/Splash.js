import React, { Component } from 'react'
import { View, Image, StyleSheet } from 'react-native'

class Splash extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/Image/logo.jpg')} style={styles.imagess} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    imagess: {
        position: 'absolute',
        width: 380,
        height: 350,
    },
})

export default Splash