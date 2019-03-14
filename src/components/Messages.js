import React, { Component } from 'react'
import { ScrollView, View, Text, StyleSheet } from 'react-native'

export default class ItemComponent extends Component {

  render() {
    return (
      <ScrollView contentContainerStyle={styles.itemsList}>
        {this.props.items.map((item, index) => {
          return (
            <View key={index}>
              <Text style={styles.itemtext}>{item.msg}</Text>
            </View>
          )
        })}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  itemsList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  itemtext: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})