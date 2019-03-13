import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text } from 'react-native';


class Chat extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Chat</Text>
        <Button
          title="Go to Home"
          // onPress={() => {
          //   this.props.navigation.dispatch(StackActions.reset({
          //     index: 0,
          //     actions: [
          //       NavigationActions.navigate({ routeName: 'Homescreen' })
          //     ],
          //   }))
          // }}
        />
      </View>
    );
  }
}

export default Chat