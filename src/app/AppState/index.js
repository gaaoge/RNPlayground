import React, { Component } from 'react'
import { StyleSheet, View, Text, ScrollView, AppState } from 'react-native'

export default class _AppState extends Component {

  state = {
    history: [
      AppState.currentState
    ]
  }

  componentDidMount () {
    AppState.addEventListener('change', this._handleAppStateChange)
  }

  componentWillUnmount () {
    AppState.removeEventListener('change', this._handleAppStateChange)
  }

  _handleAppStateChange = (nextAppState) => {
    let history = this.state.history
    history.push(nextAppState)
    this.setState({history})
  }

  render () {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.header}>AppState history</Text>
        {this.state.history.map((item, index) => {
          let isLast = index === this.state.history.length - 1
          let style = isLast ? [styles.item, styles.itemLast] : styles.item
          return (
            <Text style={style} key={index}>
              {item}
            </Text>
          )
        })}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 50
  },
  header: {
    fontSize: 30,
    lineHeight: 60,
    fontWeight: 'bold'
  },
  item: {
    height: 30,
    lineHeight: 30,
    color: '#909090'
  },
  itemLast: {
    color: '#000'
  }
})