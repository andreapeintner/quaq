import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, Button } from 'react-native';


class Login extends Component {
  state = { username: '' }
  render() {
    return (
      <View style={{ padding: 10 }}>
        <Text>Nice to meet you</Text>
        <Text>Want to Quaq? Enter your nickname:</Text>
        <TextInput
          style={styles.nameInput}
          placeHolder="nickname"
          value={this.state.username}
          onChangeText={(username) => this.setState({username})}
        />
        <Button
          // onPress={() => {
          //   this.props.navigation.dispatch(StackActions.reset({
          //     index: 0,
          //     actions: [
          //       NavigationActions.navigate({ routeName: 'Chat' })
          //     ],
          //   }))
          // }}
          title="Next"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
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
});

export default Login;
