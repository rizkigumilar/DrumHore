import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableHighlight, AsyncStorage } from 'react-native'
import { getScoreId } from '../publics/redux/actions/score';
import { connect } from 'react-redux'
import { TouchableOpacity } from 'react-native-gesture-handler';


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            id: '',
            userData: []
        }
    }

    componentDidMount = async () => {
        await AsyncStorage.getItem('userid', (error, result) => {
            if (result) {
                this.setState({
                    id: result,
                });
            }
        });
        // console.log(this.state.userData)
        // await this.props.dispatch(getScoreId(this.state.id));
        // this.setState({
        //     userData: this.props.userid
        // });

    };
    render() {
        console.log(this.state.id)
        console.log(this.state.userData)
        return (
            <View>
                <Image source={require('../assets/Image/mcr4.png')} style={styles.backgroundTopRight} />
                <Image source={require('../assets/Image/mcr11.jpg')} style={styles.backgroundTopLeft} />
                <View style={styles.container}>
                    <Image style={styles.txtScore} source={require('../assets/Image/MCR.png')} />
                    <Text style={styles.txtNumber}>Drum Hore</Text>
                    <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.props.navigation.navigate('Play', { data: this.state.userData })}>
                        <Text style={styles.loginText}>Play</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={[styles.buttonContainerT, styles.loginButton]} onPress={() => this.props.navigation.navigate('Training', { data: this.state.userData })}>
                        <Text style={styles.loginText}>Training</Text>
                    </TouchableHighlight>
                </View>
                <Image source={require('../assets/Image/mcr2.png')} style={styles.backgroundBottomLeft} />
                <Image source={require('../assets/Image/mcr6.png')} style={styles.backgroundBottomRight} />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        userid: state.user.listId,
    };

};
export default connect(mapStateToProps)(Home)

const styles = StyleSheet.create({
    backgroundTopRight: {
        position: 'absolute',
        width: 200,
        height: 150,
        top: 200,
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
        top: 270,
        marginLeft: 'auto'
    },
    txtScore: {
        height: 150,
        width: 300,
        color: '#3F51B5',
        fontWeight: 'bold',
        fontStyle: 'italic',
        bottom: 40,
        marginTop: 400
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
        backgroundColor: 'black',
        top: 200
    },
    container: {
        flex: 5,
        margin: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        borderRadius: 30,
        top: 70
    },
    buttonContainerT: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        borderRadius: 30,
        top: 90
    },
    loginButton: {
        backgroundColor: "#FF5500",
    },
    loginText: {
        color: 'white',
    },
})

