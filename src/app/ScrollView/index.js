import React, { Component } from 'react';
import { StyleSheet, Text, Image, ScrollView } from 'react-native';

export default class _ScrollView extends Component {

  render() {

    var images = [];
    for (let i = 0; i < 10; i++) {
      images.push(<Image key={i} style={styles.image} source={require('../../../resource/assets/logo.png')} />);
    }

    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>Start</Text>
        {images}
        <Text style={styles.label}>End</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20
  },
  label: {
    lineHeight: 50,
    fontSize: 50,
    textAlign: 'center'
  },
  image: {
    width: 300,
    height: 300,
    marginVertical: 20
  }
});