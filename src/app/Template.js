import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

export default class Template extends Component {

  state = {

  };

  render() {
    return (
      <View style={styles.container}>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center'
  }
});