import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { login, getUserId } from '../publics/redux/actions/user';
import {
    AsyncStorage,
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,
    ImageBackground
} from 'react-native';
import Logo from '../assets/Image/mcr2.png';
import { NavigationEvents } from 'react-navigation';
import { ScrollView } from 'react-native-gesture-handler';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
            data: [],
            user: [],
            userid: null,
            name: '',
            ktp: '',
            email: '',
            token: '',

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
    }

    log = () => {
        this.state.data.push({
            email: this.state.email,
            password: this.state.password
        });
        this.add()

    };
    add = async () => {
        await this.props.dispatch(login(this.state.data[0]))
            .then(() => {
                Alert.alert(
                    'Login',
                    'Login Success',
                    [
                        {
                            text: 'OK', onPress: () => this.props.navigation.navigate('Home', {
                                userid: this.state.userid,
                                token: this.state.token,
                                name: this.state.name,
                                email: this.state.email
                            })
                        },
                    ],
                );
            })
            .catch(() => {
                Alert.alert(
                    'Login',
                    'Login Failed',
                    [
                        { text: 'Try Again' },
                    ],
                );
            })
    };

    render() {
        console.log(this.state.userid)

        const del = () => {
            AsyncStorage.removeItem('userid')
            AsyncStorage.removeItem('jwToken')
                .then(() => {
                    this.setState({ isLogin: false })
                    this.setState({ data: [] })
                    Alert.alert(
                        'Logout',
                        'Logout success', [
                            {
                                text: 'OK', onPress: () => this.props.navigation.navigate('Home')
                            }
                        ]
                    )
                })
        };
        console.log("userid", this.state.userid, 'token', this.state.token)

        return (
            <ScrollView>
                <View behavior="padding"
                    style={styles.Wrapper}>
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

                    <View style={styles.container}>

                        {this.state.userid == null ? (
                            <View>
                                <Text style={styles.title}>Login</Text>
                                <View style={styles.inputContainer}>
                                    <Image style={styles.inputIcon} source={{ uri: 'http://icons.iconarchive.com/icons/mysitemyway/blue-jeans-social-media/256/mail-icon.png' }} />
                                    <TextInput style={styles.inputs}
                                        placeholder="Email"
                                        keyboardType="email-address"
                                        underlineColorAndroid='transparent'
                                        onChangeText={(email) => this.setState({ email })} />
                                </View>

                                <View style={styles.inputContainer}>
                                    <Image style={styles.inputIcon} source={{ uri: 'https://image.flaticon.com/icons/png/512/69/69891.png' }} />
                                    <TextInput style={styles.inputs}
                                        placeholder="Password"
                                        secureTextEntry={true}
                                        underlineColorAndroid='transparent'
                                        onChangeText={(password) => this.setState({ password })} />
                                </View>

                                <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.log}>
                                    <Text style={styles.loginText}>Login</Text>
                                </TouchableHighlight>

                                <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Register')}>
                                    <Text>Register</Text>
                                </TouchableHighlight>
                                <Image style={styles.logo} source={Logo} />
                                <TouchableHighlight style={styles.buttonContainer} onPress={() => this.props.navigation.navigate('Home')}>
                                    <Text style={{ fontSize: 18, left: 50 }}>Skip -->></Text>
                                </TouchableHighlight>
                            </View>) : (<View>
                                <View style={{ marginTop: 200 }}>
                                    <Image style={styles.avatar} source={require('../assets/Image/mcr4.png')} />
                                    <View style={styles.body}>
                                        <View style={styles.bodyContent}>
                                            <Text style={styles.name}>{this.state.name}</Text>
                                            <Text style={styles.info}>{this.state.email}</Text>
                                            <Text style={styles.info}>{this.state.idNum}</Text>
                                            <Text style={styles.description}>Dream Big, Start Small, Act Now</Text>
                                        </View>
                                    </View>
                                    <TouchableHighlight onPress={del.bind(this)} style={[styles.buttonContainerOut, styles.loginButton]}>
                                        <Text style={{ color: 'white', fontSize: 18 }}>Logout</Text>
                                    </TouchableHighlight>
                                </View>
                            </View>)}
                    </View>
                </View>
            </ScrollView>
        );

    }
}
const mapStateToProps = state => {
    return {
        user: state.user
    };
};
export default connect(mapStateToProps)(withNavigation(Login))

const styles = StyleSheet.create({
    wraper: {
        height: '100%'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#DCDCDC',
    },
    logo: {
        height: 335,
        width: 350
    },
    inputContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 30,
        width: 250,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
        marginBottom: 30
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        flex: 1,
    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        width: 250,
        borderRadius: 30,
    },
    buttonContainerOut: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        width: 250,
        borderRadius: 30,
        marginTop: 90,
        left: 70
    },
    loginButton: {
        backgroundColor: "#FF5500",
    },
    loginText: {
        color: 'white',
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 70,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: -70,
        backgroundColor: 'white'
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    body: {
        marginTop: 40,
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 30,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "600"
    },
    info: {
        fontSize: 16,
        color: "#00BFFF",
        marginTop: 5
    },
    description: {
        fontSize: 36,
        color: "#696969",
        marginTop: 10,
        textAlign: 'center',
        marginBottom: 50
    }
});