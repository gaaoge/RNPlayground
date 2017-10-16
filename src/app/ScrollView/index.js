import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, RefreshControl } from 'react-native';

export default class _ScrollView extends Component {

  state = {
    refreshing: false,
    listData: [5, 4, 3, 2, 1]
  };

  _onRefresh() {
    this.setState({ refreshing: true });

    setTimeout(() => {
      let listData = this.state.listData.concat();
      for (let i = 0; i < 5; i++) {
        listData.unshift(listData[0] + 1);
      }

      this.setState({
        refreshing: false,
        listData
      });
    }, 1000);
  }

  render() {
    return (
      <ScrollView contentContainerStyle={styles.container} refreshControl={
        <RefreshControl title="正在刷新..." titleColor="#f00"
                        refreshing={this.state.refreshing} onRefresh={this._onRefresh.bind(this)} />}>
        <Text style={styles.label}>Start</Text>
        {this.state.listData.map(item => <Text style={styles.item} key={item}>{item}</Text>)}
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
    fontSize: 50,
    textAlign: 'center'
  },
  item: {
    margin: 50,
    fontSize: 200,
    textAlign: 'center'
  }
});