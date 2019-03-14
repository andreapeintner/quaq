import React from 'react'
import { View, KeyboardAvoidingView, Button } from 'react-native'
import Login from '../components/Login'

export default class Home extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} behavior="padding" enabled>
        <Login />
        <Button
          title="Next"
          backgroundColor="#841584"
          accessibilityLabel="Learn more about this purple button"
          onPress={() => this.props.navigation.navigate('Chat')}
        />
      </KeyboardAvoidingView>
    )
  }
}

