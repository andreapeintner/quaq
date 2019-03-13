import React from 'react'
import { KeyboardAvoidingView, Text, Button } from 'react-native'
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'

import Login from './components/Login'

class HomeScreen extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} behavior="padding" enabled>
        <Login />
      </KeyboardAvoidingView>
    );
  }
}


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);