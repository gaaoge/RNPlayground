import React, { Component } from 'react';
import { StyleSheet, View, StatusBar, Button, Text, Picker, Switch, TextInput } from 'react-native';

export default class _StatusBar extends Component {

  state = {
    animated: true,
    barStyle: 'dark-content',
    hidden: false,
    networkActivityIndicatorVisible: true,
    showHiddenTransition: 'fade',
    backgroundColor: '#fff',
    _backgroundColor: '#fff'
  };


  _toggleAnimated = () => {
    let animated = !this.state.animated;
    this.setState({
      animated
    });
  };

  _selectBarStyle = (barStyle) => {
    this.setState({
      barStyle
    });
  };

  _toggleHidden = () => {
    let hidden = !this.state.hidden;
    this.setState({
      hidden
    });
  };

  _selectShowHiddenTransition = (showHiddenTransition) => {
    this.setState({
      showHiddenTransition
    });
  };

  _toggleNetworkActivityIndicatorVisible = () => {
    let networkActivityIndicatorVisible = !this.state.networkActivityIndicatorVisible;
    this.setState({
      networkActivityIndicatorVisible
    });
  };

  _onChangeBackgroundColor = (_backgroundColor) => {
    this.setState({
      _backgroundColor
    });
  };

  _onEndChangeBackgroundColor = () => {
    let backgroundColor = this.state._backgroundColor;
    this.setState({
      backgroundColor
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar animated={this.state.animated} barStyle={this.state.barStyle} hidden={this.state.hidden}
                   networkActivityIndicatorVisible={this.state.networkActivityIndicatorVisible}
                   showHideTransition={this.state.showHiddenTransition}
                   backgroundColor={this.state.backgroundColor} />
        <View style={styles.row}>
          <Text>动画过渡</Text>
          <Switch value={this.state.animated} onValueChange={this._toggleAnimated} />
        </View>
        <View style={styles.row}>
          <Text>状态栏样式</Text>
          <Picker style={styles.picker} selectedValue={this.state.barStyle}
                  onValueChange={this._selectBarStyle}>
            <Picker.Item label="dark-content" value="dark-content" />
            <Picker.Item label="light-content" value="light-content" />
          </Picker>
        </View>
        <View style={styles.row}>
          <Text>状态栏隐藏</Text>
          <Switch value={this.state.hidden} onValueChange={this._toggleHidden} />
        </View>
        <View style={styles.row}>
          <Text>状态栏过渡动画(ios)</Text>
          <Picker style={styles.picker} selectedValue={this.state.showHiddenTransition}
                  onValueChange={this._selectShowHiddenTransition}>
            <Picker.Item label="fade" value="fade" />
            <Picker.Item label="slide" value="slide" />
          </Picker>
        </View>
        <View style={styles.row}>
          <Text>网络请求标识(ios)</Text>
          <Switch value={this.state.networkActivityIndicatorVisible}
                  onValueChange={this._toggleNetworkActivityIndicatorVisible} />
        </View>
        <View style={styles.row}>
          <Text>状态栏背景颜色(android)</Text>
          <TextInput style={styles.input} placeholder="颜色值"
                     value={this.state._backgroundColor}
                     onChangeText={this._onChangeBackgroundColor}
                     onEndEditing={this._onEndChangeBackgroundColor} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    width: 300,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  picker: {
    width: 150
  },
  input: {
    width: 100,
    textAlign: 'right'
  }
});