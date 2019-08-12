import { createAppContainer, createDrawerNavigator, createStackNavigator, HeaderBackButton } from 'react-navigation'
import React, { Components } from 'react'

import Home from '../../screens/Home'
import Login from '../../screens/LoginForm'
import Register from '../../screens/Register'
import LeaderBoards from '../../screens/Leaderboard'
import Play from '../../screens/Play'
import SideBar from '../../components/Sidebar';
import Avatar from '../../components/Avatar';
import IconLeaderBoards from '../../components/IconLeaderboard';

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
    Play: {
        screen: Play,
        navigationOptions: {
            header: null
        }
    },
    LeaderBoards
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

export default createAppContainer(MainNavigation)