import { createAppContainer, createDrawerNavigator, createStackNavigator, createSwitchNavigator } from 'react-navigation'
import React, { Components } from 'react'

import Home from '../../screens/Home'
import Login from '../../screens/LoginForm'
import Register from '../../screens/Register'
import LeaderBoards from '../../screens/Leaderboard'
import Training from '../../screens/Training';
import Play from '../../screens/Play'
import SideBar from '../../components/Sidebar';
import Avatar from '../../components/Avatar';
import IconLeaderBoards from '../../components/IconLeaderboard';
import AuthLoading from '../../components/Auth';

const AuthStack = createStackNavigator({
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    }
})

const StackNavigation = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerLeft: (<Avatar />),
            headerRight: (<IconLeaderBoards />),
        }
    },
    Login,
    Register,
    Play,
    Training,
    LeaderBoards: {
        screen: LeaderBoards,
        navigationOptions: {
            title: "Leaderboards"
        }
    }
}, {
        initialRouteName: 'Home'
    })

const MainNavigation = createDrawerNavigator({
    StackNavigation
}, {
        contentComponent: SideBar,
        drawerBackgroundColor: 'rgba(255,255,255,.9)',
        overlayColor: 'black',
        contentOptions: {
            activeTintColor: '#fff',
            activeBackgroundColor: 'black',
        },
    })

export default createAppContainer(createSwitchNavigator(
    {
        AuthLoading: AuthLoading,
        App: MainNavigation,
        Auth: AuthStack
    }

))