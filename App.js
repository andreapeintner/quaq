import React from 'react'
import { KeyboardAvoidingView, Text, Button } from 'react-native'
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'
import Home from './src/screens/Home'
import Chat from './src/screens/Chat'


const AppNavigator = createStackNavigator({
  Home,
  Chat
}, {
    initialRouteName: 'Home',
});

const AppContainer = createAppContainer(AppNavigator)

export default class App extends React.Component {
  render() {
    return <AppContainer />
  }
};