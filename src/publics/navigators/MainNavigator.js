import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer,
} from 'react-navigation';

import HomeScreen from '../../screens/Home';


import LeaderboardScreen from '../../screens/Leaderboard';
import ProfileScreen from '../../screens/Profile';
import Login from '../../screens/LoginForm'
import Register from '../../screens/Register'



const HomeStack = createStackNavigator(
    {
        Home: { screen: HomeScreen },
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#05A0E4',
            },
            headerTintColor: 'white',
            headerTitle: 'Drum Hore',
        },
    }
);


const LeaderboardStack = createStackNavigator(
    {
        History: { screen: LeaderboardScreen },
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#05A0E4',
            },
            headerTintColor: 'white',
            title: 'Leaderboards',
        },
    }
);

const ProfileStack = createStackNavigator(
    {
        Profile: { screen: ProfileScreen },
        Login: { screen: Login },
        Register: { screen: Register },

    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#05A0E4',
            },
            headerTintColor: 'white',
            title: 'PROFILE',
        },
    }
);


const switchNavigator = createBottomTabNavigator(
    {
        Home: { screen: HomeStack },
        Leaderboard: { screen: LeaderboardStack },
        Profile: { screen: ProfileStack },
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, horizontal, tintColor }) => {
                const { routeName } = navigation.state;
                let IconComponent = Ionicons;
                let iconName;
                if (routeName === 'Home') {
                    iconName = `ios-home`;
                } else if (routeName === 'Leaderboard') {
                    iconName = `md-bookmarks`;
                } else if (routeName === 'Profile') {
                    iconName = `ios-contact`;
                }
                return <IconComponent name={iconName} size={25} color={tintColor} />;
            },
        }),
        tabBarOptions: {
            activeTintColor: '#05A0E4',
            inactiveTintColor: 'gray',
        },
    }
);

export default createAppContainer(switchNavigator);