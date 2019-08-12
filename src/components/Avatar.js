import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Thumbnail } from 'native-base';
import { withNavigation } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';

class Avatar extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.openDrawer()
                }}>
                    <Thumbnail source={require('../assets/135b131017ea0bf1b33a7168d176ada6.png')} style={styles.Avatar} />
                </TouchableOpacity>
            </View>
        )
    }
}

export default withNavigation(Avatar)

const styles = StyleSheet.create({
    Avatar: {
        width: 40,
        height: 40,
        marginHorizontal: 10
    }
})