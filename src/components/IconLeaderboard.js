import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'
import { View, Thumbnail, Icon } from 'native-base'
import { TouchableOpacity } from 'react-native-gesture-handler';

class IconLeaderBoards extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => {
                    this.props.navigation.navigate('LeaderBoards')
                }}>
                    <Icon name="trophy" type="FontAwesome5" style={styles.iconLeaderBoards} />
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
    },
    iconLeaderBoards: {
        width: 40,
        height: 40,
        marginHorizontal: 10,
        color: '#FFD700'
    }
})
export default withNavigation(IconLeaderBoards)
