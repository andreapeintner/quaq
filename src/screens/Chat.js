import React from 'react'
import {
  KeyboardAvoidingView,
  View,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  AlertIOS
} from 'react-native'
import { db } from '../config'
import Messages from '../components/Messages'


let addItem = item => {
  db.ref('/items').push({
    msg: item
  })
}
let msgRef = db.ref('/items')

export default class Chat extends React.Component {
  state = {
    msg: '',
    items: []
  }

  componentDidMount() {
    msgRef.on('value', snapshot => {
      let data = snapshot.val()
      let items = Object.values(data)
      this.setState({ items })
    })
  }

  handleChange = e => {
    this.setState({
      msg: e.nativeEvent.text
    })
  }

  handleSubmit = () => {
    addItem(this.state.msg)
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.main} behavior="padding" enabled>
        <Messages items={this.state.items} />
        <TextInput style={styles.itemInput} onChange={this.handleChange} />
        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.handleSubmit}
        >
          <Text style={styles.buttonText}>Send</Text>
        </TouchableHighlight>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'orange'
  },
  itemInput: {
    height: 50,
    padding: 4,
    marginRight: 5,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
})