import React, { Component } from 'react'
import { KeyboardAvoidingView, StyleSheet, TextInput, Text, Button, AsyncStorage } from 'react-native'
import User from '../helpers/User'
import { db } from '../config'

// let addNick = nickname => {
//   db.ref('/nick').push({
//     username: nickname
//   })
// }


class Loginscreen extends Component {
  static navigationOptions = {
    header: null
  }
  state = { username: '' }

  componentWillMount() {
    AsyncStorage.getItem('nickname').then(val => {
      if(val) {
        this.setState({ username: val })
      }
    })
  }

  handleChange = e => {
    this.setState({
      username: e.nativeEvent.text
    })
  }
  handleSubmit = async () => {
    if (this.state.username.length < 1) {
      alert('Please enter a nickname')
    }
    else {
      await AsyncStorage.setItem('nickname', this.state.username)
      User.username = this.state.username
      db.ref('users/' + Math.random().toString(36).substr(2, 9)).set({
        nickname: this.state.username
      })
      this.props.navigation.navigate('App')
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 }} behavior="padding" enabled>
        <Text>Nice to meet you</Text>
        <Text>Want to Quaq? Enter your nickname:</Text>
        <TextInput
          style={styles.nameInput}
          placeHolder="nickname"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <Button
          title="Next"
          backgroundColor="#841584"
          accessibilityLabel="Learn more about this purple button"
          onPress={this.handleSubmit}
        />
      </KeyboardAvoidingView>
    )
  }
}


const styles = StyleSheet.create({
  nameInput: {
    fontSize: 20,
    alignSelf: 'stretch',
    borderBottomColor: '#111111',
    borderBottomWidth: 1,
    minWidth: 70,
    marginTop: 30,
  },
})

export default Loginscreen
