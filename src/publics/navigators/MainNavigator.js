import { createAppContainer, createDrawerNavigator, createStackNavigator, HeaderBackButton } from 'react-navigation'
import React, { Components } from 'react'

import Home from '../../screens/Home'
import Login from '../../screens/LoginForm'
import Register from '../../screens/Register'
import LeaderBoards from '../../screens/Leaderboard'
// import Main from '../../screens/Main'
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
    // Main: {
    //     screen: Main,
    //     navigationOptions: {
    //         header: null
    //     }
    // },
    LeaderBoards
}, {
        initialRouteName: 'Home'
    })

const MainNavigation = createDrawerNavigator({
    StackNavigation
}, {
        contentComponent: SideBar,
        drawerBackgroundColor: 'rgba(255,255,255,.9)',
        overlayColor: '#6b52ae',
        contentOptions: {
            activeTintColor: '#fff',
            activeBackgroundColor: '#6b52ae',
        },
    })

export default createAppContainer(MainNavigation)