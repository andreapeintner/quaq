import React from 'react'

// import { Ionicons, FontAwesome } from '@expo/vector-icons'
// import { gray, white, pink, greenStrong, greenLight, greenBlue, yellowLight, yellowStrong, blue } from './colors'
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'

import App from '../App'
import Login from '../components/Login'
import Chat from '../components/Chat'


const AppNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  Chat: {
    screen: Chat
  }
});