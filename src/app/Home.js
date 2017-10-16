import React, { Component } from 'react';
import { StyleSheet, Text, Image, View, FlatList, TouchableOpacity } from 'react-native';
import { routes } from '../router';

export default class Home extends Component {

  _listData = Object.keys(routes)
    .filter(item => item !== 'Home')
    .map((item) => {
      return { key: item }
    });

  _onPressItem = (key) => {
    return () => {
      this.props.navigation.navigate(key);
    }
  };

  _renderItem = ({ item }) => (
    <TouchableOpacity onPress={this._onPressItem(item.key)}>
      <View style={styles.item}>
        <Text style={styles.itemName}>{item.key}</Text>
      </View>
    </TouchableOpacity>
  );

  render() {
    return (
      <View>
        <View style={styles.header}>
          <Image style={styles.logo} source={require('../../resource/assets/logo.png')} />
          <Text style={styles.title}>React Native Playground</Text>
          <Text style={styles.sign}>by GG</Text>
        </View>
        <FlatList data={this._listData} renderItem={this._renderItem} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: 50,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#000'
  },
  logo: {
    width: 50,
    height: 50,
    margin: 25
  },
  sign: {
    position: 'absolute',
    right: 15,
    bottom: 15,
    color: "#fff",
    fontWeight: 'bold'
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 'bold'
  },
  item: {
    height: 50,
    justifyContent: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#ddd',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  itemName: {
    marginLeft: 20,
    fontWeight: 'bold',
    fontSize: 16
  }
});