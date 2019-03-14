import React from 'react'
import {
  KeyboardAvoidingView,
  Text,
  TouchableHighlight,
  StyleSheet,
  TextInput,
  AlertIOS
} from 'react-native'
import { db } from '../config'

let addItem = item => {
  db.ref('/items').push({
    msg: item
  })
}

export default class Chat extends React.Component {
  state = {
    msg: ''
  }

  handleChange = e => {
    this.setState({
      msg: e.nativeEvent.text
    })
  }

  handleSubmit = () => {
    addItem(this.state.msg);
    AlertIOS.alert('Msg saved successfully');
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.main} behavior="padding" enabled>
        <Text style={styles.title}>Chat</Text>
        <TextInput style={styles.itemInput} onChange={this.handleChange} />
        <TouchableHighlight
          style={styles.button}
          underlayColor="white"
          onPress={this.handleSubmit}
        >
          <Text style={styles.buttonText}>Add</Text>
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
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center'
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
});