import React, { Component } from 'react';
import { StyleSheet, ActivityIndicator, Text, View } from 'react-native';

export default class Networking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.getMovies();
    }, 2000);
  }

  async getMovies() {
    try {
      let response = await fetch('https://facebook.github.io/react-native/movies.json');
      let data = await response.json();
      this.setState({
        data: data
      })
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    let data = this.state.data;
    if (!data) {
      return (
        <View style={styles.container}>
          <Text style={{marginBottom: 20}}>正在请求数据...</Text>
          <ActivityIndicator size="large"/>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.desc}>{data.description}</Text>
        <View style={styles.table}>
          <View style={[styles.tableHeader, styles.tableItem]}>
            <Text style={{ fontWeight: 'bold' }}>movie name</Text>
            <Text style={{ fontWeight: 'bold' }}>year</Text>
          </View>
          {data.movies.map((item, index) => {
            return (
              <View key={index} style={styles.tableItem}>
                <Text>{item.title}</Text>
                <Text>{item.releaseYear}</Text>
              </View>
            )
          })}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f4f5f5'
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold'
  },
  desc: {
    marginTop: 10,
    color: '#909090'
  },
  table: {
    width: 300,
    marginTop: 40,
    paddingHorizontal: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ddd',
    backgroundColor: '#fff'
  },
  tableHeader: {
    position: 'absolute',
    left: 10,
    right: 10,
    top: -30,
    backgroundColor: 'transparent'
  },
  tableItem: {
    height: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});