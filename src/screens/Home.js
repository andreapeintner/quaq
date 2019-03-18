import React from 'react'
import { AsyncStorage, KeyboardAvoidingView, TouchableOpacity, Text, FlatList } from 'react-native'
import User from '../helpers/User'
import { db } from '../config'

export default class Home extends React.Component {
  static navigationOptions = {
    title: 'Users'
  }

  state = {
    users: []
  }

  componentWillMount() {
    let dbRef = db.ref('users')
    dbRef.on('child_added', (val) => {
      let person = val.val()
      person.id = val.key
      this.setState((prevState) => {
        return {
          users: [...prevState.users, person]
        }
      })
    })
  }

  _logout = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }

  renderRow = ({ item }) => {
    return (
      <TouchableOpacity style={{ padding: 10, borderBottomColor: '#ccc', borderBottomWidth: 2 }}>
        <Text>{item.nickname}</Text>
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" enabled>
        <FlatList
          data={this.state.users}
          renderItem={this.renderRow}
          keyExtractor={(item) => item.id}
        />
        <Text>Hello {User.username}</Text>
        <TouchableOpacity onPress={this._logout}>
          <Text>Log out</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('Chat')}>
          <Text>To the chat</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    )
  }
}

