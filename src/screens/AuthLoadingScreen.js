import React from 'react'
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  View,
} from 'react-native'
import User from '../helpers/User'

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    User.username = await AsyncStorage.getItem('nickname');

    this.props.navigation.navigate(User.username ? 'App' : 'Auth');
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}